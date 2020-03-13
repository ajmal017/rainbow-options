import {GPU} from "gpu.js";
import {CALL, PUT} from "./portfolio";

export function div(a, b) {
  return a / b;
}

/**
 * The CDF of the normal distribution with mean = 0 and stdev = 1.
 * @param x {Number} the value to look up.
 * @param mean {Number} the mean of the underlying distribution.
 * @param stdev {Number} the standard deviation of the underlying distribution.
 * @returns {number} the CDF value.
 */
export function normalCdf(x) {
  // HASTINGS.  MAX ERROR = .000001
  const t = 1 / (1 + .2316419 * Math.abs(x));
  const d = .3989423 * Math.exp(-x * x / 2);
  const probability = d * t * (.3193815 + t * (-.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) {
    return 1 - probability;
  } else {
    return probability;
  }
}

/**
 * Returns the value of a European call option.
 * @param s {Number} Price of the stock
 * @param k {Number} Strike price of the option
 * @param t {Number} Time to maturity (in years)
 * @param r {Number} Risk-free interest rate (in years)
 * @param sigma {Number} Volatility (annual one-std volatility divided by s)
 * @returns {number} the value of the call option.
 */
export function euroCall(s, k, t, r, sigma) {
  if (t === 0) {
    return Math.max(0, s - k);
  } else if (t < 0) {
    return 0;
  }
  const d1 = (Math.log(s / k) + (r + Math.pow(sigma, 2) / 2.) * t) / (sigma * Math.sqrt(t));
  const d2 = d1 - (sigma * Math.sqrt(t));
  return (s * normalCdf(d1) - k * Math.exp(-r * t) * normalCdf(d2));
}

/**
 * Returns the value of a European put option.
 * @param s {Number} Price of the stock
 * @param k {Number} Strike price of the option
 * @param t {Number} Time to maturity (in years)
 * @param r {Number} Risk-free interest rate (in years)
 * @param sigma {Number} Volatility (annual one-std volatility divided by s)
 * @returns {number} the value of the call option.
 */
export function euroPut(s, k, t, r, sigma) {
  if (t === 0) {
    return Math.max(0, k - s);
  } else if (t < 0) {
    return 0;
  }
  const d1 = (Math.log(s / k) + (r + Math.pow(sigma, 2) / 2.) * t) / (sigma * Math.sqrt(t));
  const d2 = d1 - (sigma * Math.sqrt(t));
  return (k * Math.exp(-r * t) * normalCdf(-d2) - s * normalCdf(-d1));
}

const gpu = new GPU();
gpu.addFunction(normalCdf);
gpu.addFunction(euroCall);
gpu.addFunction(euroPut);

export function euroCallCanvas(widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma) {
  const kernel = gpu.createKernel(function (widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma) {
    let time = this.thread.x / widthPx * (xFinal - x0) + x0;
    let price = this.thread.y / heightPx * (yFinal - y0) + y0;
    let value = euroCall(price, k, time, r, sigma);
    this.color(value * 20, value /20 , value /10);
  });

  const render = kernel
      .setOutput([widthPx, heightPx])
      .setGraphical(true);

  render(widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma);
  return kernel.canvas;
}

export function euroPutCanvas(widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma) {

  const kernel = gpu.createKernel(function (widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma) {
    let time = this.thread.x / widthPx * (xFinal - x0) + x0;
    let price = this.thread.y / heightPx * (yFinal - y0) + y0;
    let value = euroPut(price, k, time, r, sigma);
    this.color(value/2, value / 20., value );
  });

  const render = kernel
      .setOutput([widthPx, heightPx])
      .setGraphical(true);

  render(widthPx, heightPx, x0, xFinal, y0, yFinal, k, r, sigma);
  return kernel.canvas;
}

export function portfolioCanvas(widthPx, heightPx, x0, xFinal, y0, yFinal, portfolio, r, sigma) {
  const entryCosts = portfolio.legs.map((leg) => {
    if (leg.type === CALL) {
      // TODO(advait): We have to incorporate purchase price here
      return leg.quantity * euroCall(100, leg.k, leg.t, r, sigma);
    } else if (leg.type === PUT) {
      return leg.quantity * euroPut(100, leg.k, leg.t, r, sigma);
    } else {
      throw Error("Invalid type: " + leg.type);
    }
  });
  const netEntryCost = entryCosts.reduce((a, b) => a + b, 0);

  // Compute the value for each leg
  const legResults = portfolio.legs.map((leg) => {
    if (leg.type === CALL) {
      const kernel = gpu.createKernel(function (widthPx, heightPx, x0, xFinal, y0, yFinal, quantity, k, legT, r, sigma) {
        let time = this.thread.x / widthPx * (xFinal - x0) + x0;
        let price = this.thread.y / heightPx * (yFinal - y0) + y0;
        return quantity * euroCall(price, k, legT - time, r, sigma);
      });
      const render = kernel.setOutput([widthPx, heightPx]);
      const ret = render(widthPx, heightPx, x0, xFinal, y0, yFinal, leg.quantity, leg.k, leg.t, r, sigma);
      kernel.destroy();
      return ret;
    } else if (leg.type === PUT) {
      throw Error("Invalid type: " + leg.type);
    } else {
      throw Error("Invalid type: " + leg.type);
    }
  });

  // Sum up the leg values, net of entry cost
  let kernel = gpu.createKernel(function(legResults, nLegs, netEntryCost) {
    let sum = 0;
    for (let leg = 0; leg < nLegs; leg++) {
      sum += legResults[leg][this.thread.y][this.thread.x];
    }
    return sum - netEntryCost;
  });
  let render = kernel.setOutput([widthPx, heightPx]);
  let summedResults = render(legResults, legResults.length, netEntryCost);
  kernel.destroy();

  // Compute max and min values
  let maxValue = -Infinity;
  let minValue = Infinity;
  for (let x = 0; x < widthPx; x++) {
    for (let y = 0; y < heightPx; y++) {
      const value = summedResults[y][x];
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }
  }
  console.log(minValue, maxValue);

  // Normalize summed results based on max and min values
  kernel = gpu.createKernel(function(summedResults, minValue, maxValue) {
    const value = summedResults[this.thread.y][this.thread.x];
    const pctGain = value / (-minValue); // -1 to +Inf

    if (pctGain <= -0.999) {
      this.color(0.7176, 0.1098, 0.1098); // #b71c1c
    } else if (pctGain <= -0.8) {
      this.color(0.7764, 0.1568, 0.1568); // #c62828
    } else if (pctGain <= -0.4) {
      this.color(0.8980, 0.2235, 0.2078); // #e53935
    } else if (pctGain <= 0) {
      this.color(1.0, 0.9215, 0.9333);
    } else if (pctGain <= 0.2) {
      this.color(0.9450, 0.9725, 0.9137);
    } else if (pctGain <= 0.8) {
      this.color(0.6980, 1.0, 0.3490);
    } else if (pctGain <= 1.0) {
      this.color(0.4627, 1.0, 0.0118);
    } else {
      this.color(0.3921, 0.8666, 0.0901);
    }
  });
  render = kernel
      .setOutput([widthPx, heightPx])
      .setGraphical(true);
  render(summedResults, minValue, maxValue);
  return kernel.canvas;
}
