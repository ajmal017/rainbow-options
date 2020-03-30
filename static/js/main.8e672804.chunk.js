(this["webpackJsonprainbow-options"]=this["webpackJsonprainbow-options"]||[]).push([[0],{203:function(e,t,a){e.exports=a(234)},208:function(e,t,a){},209:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(208),a(29)),c=(a(209),a(22)),s=a(63),u=a(64),m=a(18),p=a.n(m);function d(e){return 1/Math.sqrt(2*Math.PI)*Math.exp(-Math.pow(e,2)/2)}function f(e){var t=1/(1+.2316419*Math.abs(e)),a=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(t*(1.781478+t*(1.330274*t-1.821256))-.3565638));return e>0?1-a:a}function g(e,t,a,n,r){return(Math.log(e/t)+(n+Math.pow(r,2)/2)*a)/(r*Math.sqrt(a))}function h(e,t,a,n,r,i){return e-i*Math.sqrt(n)}function v(e,t,a,n,r){if(0===a)return Math.max(0,e-t);if(a<0)return 0;var i=g(e,t,a,n,r),o=h(i,0,0,a,0,r);return e*f(i)-t*Math.exp(-n*a)*f(o)}function E(e,t,a,n,r){if(0===a)return Math.max(0,t-e);if(a<0)return 0;var i=g(e,t,a,n,r),o=h(i,0,0,a,0,r);return t*Math.exp(-n*a)*f(-o)-e*f(-i)}function y(e,t,a,n,r){return f(g(e,t,a,n,r))}function x(e,t,a,n,r){return f(g(e,t,a,n,r))-1}function w(e,t,a,n,r){var i=g(e,t,a,n,r);return 1/(e*r*Math.sqrt(a))*d(i)}function k(e,t,a,n,r){var i=g(e,t,a,n,r),o=h(i,0,0,a,0,r);return(-(e*d(i)*r/(2*Math.sqrt(a)))-n*t*Math.exp(-n*a)*f(o))/365}function N(e,t,a,n,r){var i=g(e,t,a,n,r),o=h(i,0,0,a,0,r);return(-(e*d(i)*r/(2*Math.sqrt(a)))+n*t*Math.exp(-n*a)*f(-o))/365}var b=new(a(134).GPU);function C(e,t,a,n,r,i,o,l){performance.mark("portfolioValueStart");var c=a.diff(o.entryTime,"years",!0),s=n.diff(o.entryTime,"years",!0);performance.mark("gpuLegStart");var u=b.createKernel((function(e,t,a,n,r,i,o,l){for(var c=Math.floor(this.thread.x/e),s=this.thread.x%e/e*(n-a)+a,u=c/t*(i-r)+r,m=o[0],p=o[1],d=0,f=0;f<p;f++){var g=o[5*f+2],h=o[5*f+3],y=o[5*f+4],x=o[5*f+5],w=o[5*f+6];d+=0===h?g*E(u,y,x-s,l,w):g*v(u,y,x-s,l,w)}return d-m})),m=u.setOutput([e*t])(e,t,c,s,r,i,function(e,t){var a=[];return a.push(e.entryCost(t)),a.push(e.legs.length),e.legs.forEach((function(t){a.push(t.quantity),a.push(t.putCall===q.PUT?0:1),a.push(t.k),a.push(t.t.diff(e.entryTime,"years",!0)),a.push(t.iv)})),a}(o,l),l);u.destroy();for(var p=1/0,d=0;d<m.length;d++){var f=m[d];f<p&&(p=f)}var g=m.map((function(e){return e/-p}));return performance.measure("portfolioValue","portfolioValueStart"),{pctGain:g,minValue:p}}b.addFunction(d),b.addFunction(f),b.addFunction(g),b.addFunction(h),b.addFunction(v),b.addFunction(E);var S=a(270),P=a(269),L=a(151),O=a(150),T=a(25),j=a.n(T),M=new P.a({link:new O.a({uri:"http://localhost:4000"}),cache:new L.a});function B(e){return j()(e,"YYYY-MM-DD")}function V(e){return e.format("YYYY-MM-DD")}var R=a(290);function F(e,t){if(!e)throw new Error(t)}function W(e){var t=Object(n.useState)(e.value),a=Object(l.a)(t,2),i=a[0],o=a[1],s=Object(c.a)({},e,{onChange:function(e){return o(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.setValue(i)},onBlur:function(){return e.setValue(i)},value:i});return r.a.createElement(R.a,s)}var q,D=a(25);!function(e){e[e.PUT=0]="PUT",e[e.CALL=1]="CALL"}(q||(q={}));var z=function(){function e(t,a,n){var r=this;Object(s.a)(this,e),this.legs=void 0,this.entryTime=void 0,this.entryStockPrice=void 0,this.getEarliestExpiration=function(){var e=r.legs.map((function(e){return e.t}));return e.sort((function(e,t){return e.isBefore(t)?-1:1})),e[0]},this.weightedIV=function(){var e=r.legs.map((function(e){return Math.abs(e.quantity)*e.iv})),t=r.legs.map((function(e){return Math.abs(e.quantity)}));return Y(e,t)/p.a.sum(t)},this.toURLSlug=function(){return JSON.stringify({legs:r.legs.map((function(e){return Object(c.a)({},e,{t:V(e.t)})})),entryTime:V(r.entryTime),entryStockPrice:r.entryStockPrice})},this.grossValuePoint=function(e,t,a){return p.a.chain(r.legs).map((function(n){return n.quantity*G(e,t,n,a)})).sum().value()},this.greeks=function(e,t,a){var n=r.legs.map((function(n){return function(e,t,a,n){if(a.putCall===q.CALL){var r=a.t.diff(t,"years",!0);return{delta:y(e,a.k,r,n,a.iv),gamma:w(e,a.k,r,n,a.iv),theta:k(e,a.k,r,n,a.iv)}}if(a.putCall===q.PUT){var i=a.t.diff(t,"years",!0);return{delta:x(e,a.k,i,n,a.iv),gamma:w(e,a.k,i,n,a.iv),theta:N(e,a.k,i,n,a.iv)}}throw Error("Invalid type: "+a.putCall)}(e,t,n,a)})),i=n.map((function(e){return e.delta})),o=n.map((function(e){return e.gamma})),l=n.map((function(e){return e.theta})),c=r.legs.map((function(e){return e.quantity})),s=Y(i,c),u=Y(o,c),m=Y(l,c),p=r.maxLoss(a);return{delta:s,deltaPct:s/-p,gamma:u,gammaPct:u/-p,theta:m,thetaPct:m/-p}},this.entryCost=p.a.memoize((function(e){return r.grossValuePoint(r.entryStockPrice,r.entryTime,e)})),this.maxLoss=function(e){return-r.entryCost(e)},this.netValuePoint=function(e,t,a){var n=r.entryCost(a),i=r.grossValuePoint(e,t,a),o=i-n;return{endingValue:i,netValue:o,pctGain:o/n}},F(t.length>0,"Portfolio must have legs"),F(D.isMoment(a),"entryTime must be a date"),F(n>0,"Stock price must be > 0"),this.legs=t,this.entryTime=a,this.entryStockPrice=n}return Object(u.a)(e,[{key:"withNewLegs",value:function(t){return new e(t,this.entryTime,this.entryStockPrice)}},{key:"equals",value:function(e){return this.toURLSlug()===e.toURLSlug()}}]),e}();z.fromURLSlug=p.a.memoize((function(e){var t=JSON.parse(decodeURI(e)),a=t.legs.map((function(e){return Object(c.a)({},e,{t:B(e.t)})})),n=B(t.entryTime);return new z(a,n,t.entryStockPrice)}));var I=new z([{quantity:1,putCall:q.CALL,k:4,t:D().add(182,"days"),iv:1.2}],D(),5);function G(e,t,a,n){if(a.putCall===q.CALL){var r=a.t.diff(t,"years",!0);return v(e,a.k,r,n,a.iv)}if(a.putCall===q.PUT){var i=a.t.diff(t,"years",!0);return E(e,a.k,i,n,a.iv)}throw Error("Invalid type: "+a.putCall)}function Y(e,t){return p.a.chain(p.a.zip(e,t)).map((function(e){var t=Object(l.a)(e,2);return(t[0]||0)*(t[1]||0)})).sum().value()}var U=a(276),A=(a(229),a(152)),X=a(142),H=a(153),$=a(28),J=a(277),K=Object(U.a)((function(e){return{outerContainer:{width:"100%",height:"100%"},toolbar:e.mixins.toolbar,contoursInnerContainer:{position:"relative",width:"100%",height:"100%"},d3Container:{position:"absolute",width:"100%",height:"100%",zIndex:1},svg:{position:"absolute",width:"100%",height:"100%",zIndex:2}}}));function Q(e){var t=K();return r.a.createElement("div",{className:t.outerContainer},r.a.createElement(J.a,{className:t.toolbar}),r.a.createElement("div",{id:"contoursInnerContainer",className:t.contoursInnerContainer},r.a.createElement(_,Object.assign({},e,{className:t.d3Container})),r.a.createElement(Z,{st:e.st,pctGain:e.portfolioValue.pctGain,className:t.svg})))}var _=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(A.a)(this,Object(X.a)(t).call(this,e))).d3ContainerRef=r.a.createRef(),a.stockPriceWindow=a.props.stockPriceWindow,a.timeWindow=a.props.timeWindow,a.portfolio=a.props.portfolio,a.r=a.props.r,a}return Object(H.a)(t,e),Object(u.a)(t,[{key:"updateST",value:function(e,t){for(var a=e.target;"contoursInnerContainer"!==a.id;)if(!(a=a.parentElement))throw new Error("Could not find contoursInnerContainer");var n=a.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,o=this.tScale.invert(r),l=this.yScale.invert(i);this.props.setST({s:l,t:j()(o),mouseX:e.clientX,mouseY:e.clientY,show:t})}},{key:"componentDidMount",value:function(){var e=this;this.initD3(),this.updateD3(),this.resizeListener=m.debounce((function(){return e.updateD3()}),10),window.addEventListener("resize",this.resizeListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListener)}},{key:"shouldComponentUpdate",value:function(e,t,a){return m.isEqual(this.timeWindow,e.timeWindow)&&m.isEqual(this.stockPriceWindow,e.stockPriceWindow)&&this.portfolio.equals(e.portfolio)&&this.r===e.r||(this.timeWindow=e.timeWindow,this.stockPriceWindow=e.stockPriceWindow,this.portfolio=e.portfolio,this.r=e.r,this.updateD3()),!1}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.d3ContainerRef,onMouseMove:function(t){return e.updateST(t,!0)},onMouseOut:function(t){return e.updateST(t,!1)},className:this.props.className})}},{key:"initD3",value:function(){var e=this.d3ContainerRef.current;F(!!e,"No canvas container");var t=e.offsetWidth||100,a=e.offsetHeight||100;this.svg=$.d("svg").attr("viewBox",[0,0,t,a]),this.yScale=this.yScale=$.h().domain([this.stockPriceWindow.y0,this.stockPriceWindow.yFinal]).range([0,a]),this.yAxis=$.b().scale(this.yScale),this.tScale=this.tScale=$.j().domain([this.timeWindow.t0.valueOf(),this.timeWindow.tFinal.valueOf()]).range([0,t]),this.tAxis=$.a().scale(this.tScale),this.svg.append("g").attr("class","contours").attr("fill","none").attr("stroke","#fff").attr("stroke-opacity",.5),this.svg.append("g").attr("class","t-axis").attr("transform","translate(0,".concat(this.yScale(556),")")).call(this.tAxis),this.svg.append("g").attr("class","y-axis").call(this.yAxis),e.appendChild(this.svg.node())}},{key:"updateD3",value:function(){performance.clearMarks(),performance.clearMeasures();var e=this.d3ContainerRef.current;F(!!e,"No canvas container");var t=e.offsetWidth||100,a=e.offsetHeight||100;this.yScale.domain([this.stockPriceWindow.y0,this.stockPriceWindow.yFinal]).range([0,a]),this.tScale.domain([this.timeWindow.t0.valueOf(),this.timeWindow.tFinal.valueOf()]).range([0,t]);var n=Math.floor(t/4),r=Math.floor(a/4),i=C(n,r,this.timeWindow.t0,this.timeWindow.tFinal,this.stockPriceWindow.y0,this.stockPriceWindow.yFinal,this.portfolio,this.r);performance.mark("d3ContoursStart");var o=$.c().size([n,r])(i.pctGain);performance.mark("d3ContoursEnd"),performance.measure("d3Contours","d3ContoursStart","d3ContoursEnd"),console.log(performance.getEntriesByType("measure"));var l=$.e().projection($.f({point:function(e,a){this.stream.point(e/n*t,a/n*t)}}));this.svg.attr("viewBox",[0,0,t,a]),this.svg.select(".contours").selectAll("path").data(o).join("path").attr("fill",(function(e){return $.g((t=e.value)<=0?$.h().domain([-1,0]).range([0,.5])(t):$.i().domain([0,3]).range([.5,1])(t));var t})).attr("d",l),this.svg.select(".t-axis").attr("transform","translate(0,".concat(this.yScale(this.portfolio.entryStockPrice),")")).call(this.tAxis),this.svg.select(".y-axis").call(this.yAxis)}}]),t}(r.a.Component);function Z(e){var t,a={display:e.hidden?"hidden":"inline",position:"fixed",top:e.st.mouseY+20,left:e.st.mouseX,zIndex:3,backgroundColor:"#33333344",padding:"6px",borderRadius:"4px",transform:"translate(-40%, -200%)"};return r.a.createElement("div",{className:"gains-tooltip",style:a},(t=e.pctGain)<=0?"".concat((100*t).toFixed(2),"%"):t<1?"+".concat((100*t).toFixed(2),"%"):"".concat(t.toFixed(2),"x"))}var ee=a(293),te=a(235),ae=a(284),ne=a(286),re=a(54),ie=a(146),oe=a.n(ie),le=a(62),ce=a(280),se=a(281),ue=a(294),me=a(295),pe=a(283),de=a(291),fe=a(285),ge=a(70),he=a(278),ve=a(279),Ee=a(282),ye=a(145),xe=a.n(ye),we=a(71),ke=a.n(we),Ne=a(144),be=a.n(Ne),Ce=a(4),Se=Object(U.a)((function(e){return{card:{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(1),overflow:"visible"},cardHeader:{cursor:"pointer"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},contentRow:{display:"flex",alignItems:"center",marginBottom:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2),justifyContent:"space-between"},bottomMargin:{marginBottom:e.spacing(2)},largeButtonGroup:{flexGrow:1,flexShrink:1},largeButton:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},smallButtonGroup:{marginRight:e.spacing(2)},smallButton:{padding:0,margin:0,minWidth:"24px"},descriptionValueParent:{display:"flex",flexGrow:1,flexDirection:"column"},description:{fontSize:"12px",color:ge.a[500],marginTOp:"-2px",marginBottom:"3px"},value:{fontSize:"18px"},orangeLong:{color:e.palette.getContrastText(he.a[500]),backgroundColor:he.a[500]},orangeShort:{color:e.palette.getContrastText(he.a[100]),backgroundColor:he.a[100]},purpleLong:{color:e.palette.getContrastText(ve.a[500]),backgroundColor:ve.a[500]},purpleShort:{color:e.palette.getContrastText(ve.a[100]),backgroundColor:ve.a[100]},grey:{color:e.palette.getContrastText(ge.a[500]),backgroundColor:ge.a[500]}}}));function Pe(e){var t=Se(),a=Object(n.useState)(!1),i=Object(l.a)(a,2),o=i[0],s=i[1];function u(e,t,a){return void 0===e?t:a(e)}var m=u(e.leg.quantity,"-",(function(e){return e>0?"+".concat(e):"".concat(e)})),p=u(e.leg.putCall,"?",(function(e){return e===q.CALL?"Call":"Put"})),d=u(e.leg.quantity,"Long",(function(e){return e<0?"Short":"Long"})),f="".concat(p[0]).concat(d[0]),g=u(e.leg.k,"?",(function(e){return"$".concat(e)})),h=u(e.leg.t,"?",(function(e){return"".concat(e.format("MMM DD, YYYY")," (").concat(e.diff(j()(),"days")," days)")})),v="";e.leg.putCall===q.CALL&&(v=e.leg.quantity&&e.leg.quantity<0?t.orangeShort:t.orangeLong);var E="";e.leg.putCall===q.PUT&&(E=e.leg.quantity&&e.leg.quantity<0?t.purpleShort:t.purpleLong);var y=function(t){return function(){e.setLeg(Object(c.a)({},e.leg,{t:e.leg.t.clone().add(t)}))}},x=function(t){return function(){var a=e.leg.quantity+t;0===a&&(a+=t),e.setLeg(Object(c.a)({},e.leg,{quantity:a}))}},w=function(t){return function(){e.setLeg(Object(c.a)({},e.leg,{k:e.leg.k+t}))}},k=function(t){return function(){e.setLeg(Object(c.a)({},e.leg,{putCall:t}))}},N=function(t){return function(){e.setLeg(Object(c.a)({},e.leg,{iv:e.leg.iv+t}))}};return r.a.createElement(ce.a,{elevation:1,className:t.card},r.a.createElement(se.a,{avatar:r.a.createElement(ue.a,{title:"".concat(d," ").concat(p)},r.a.createElement(me.a,{className:Object(Ce.a)(E,v)},f)),title:"".concat(m,"x @ ").concat(g," ").concat(p),subheader:"".concat(h),action:r.a.createElement(Ee.a,{className:Object(Ce.a)(t.expand,Object(le.a)({},t.expandOpen,o))},r.a.createElement(be.a,null)),onClick:function(){return s(!o)},className:t.cardHeader}),r.a.createElement(pe.a,{in:o,timeout:"auto"},r.a.createElement(ae.a,{className:t.bottomMargin}),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"horizontal",variant:"outlined",className:t.largeButtonGroup},r.a.createElement(te.a,{className:Object(Ce.a)(t.largeButton,v),onClick:k(q.CALL)},e.leg.quantity&&e.leg.quantity<0?"Short":"Long"," ","Call"),r.a.createElement(te.a,{className:Object(Ce.a)(t.largeButton,E),onClick:k(q.PUT)},e.leg.quantity&&e.leg.quantity<0?"Short":"Long"," ","Put")),r.a.createElement(Ee.a,{edge:"end"},r.a.createElement(xe.a,{onClick:e.deleteLeg}))),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:y(j.a.duration(1,"month"))},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:y(j.a.duration(-1,"month"))},"-")),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Expiration"),r.a.createElement("span",{className:t.value},e.leg.t?r.a.createElement(r.a.Fragment,null,e.leg.t.format("MMM DD, YY")," (",e.leg.t.diff(j()(),"days")," days)"):"Unknown")),r.a.createElement(Ee.a,{edge:"end"},r.a.createElement(ke.a,null))),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:x(1)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:x(-1)},"-")),r.a.createElement("div",{className:t.descriptionValueParent,style:{width:"65px"}},r.a.createElement("span",{className:t.description},"Quantity"),r.a.createElement("span",{className:t.value},e.leg.quantity?e.leg.quantity:"?")),r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:w(1)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:w(-1)},"-")),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Strike Price"),r.a.createElement("span",{className:t.value},"$",e.leg.k?e.leg.k.toFixed(2):"?")),r.a.createElement(Ee.a,{edge:"end"},r.a.createElement(ke.a,null))),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:N(.05)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:N(-.05)},"-")),r.a.createElement("div",{className:t.descriptionValueParent,style:{width:"60px"}},r.a.createElement("span",{className:t.description},"Unit Price"),r.a.createElement("span",{className:t.value},"$",G(e.entryStockPrice,e.entryTime,e.leg,e.r).toFixed(2))),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Implied Volatility"),r.a.createElement("span",{className:t.value},e.leg.iv?e.leg.iv.toFixed(2):"?")),r.a.createElement(Ee.a,{edge:"end"},r.a.createElement(ke.a,null)))))}var Le=Object(U.a)((function(e){return{card:{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(1),paddingTop:e.spacing(2),overflow:"visible"},cardHeader:{cursor:"pointer"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},contentRow:{display:"flex",alignItems:"center",marginBottom:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2),justifyContent:"space-between"},bottomMargin:{marginBottom:e.spacing(2)},descriptionValueParent:{display:"flex",flexGrow:1,flexBasis:"0px",flexDirection:"column"},descriptionValueParentShrink:{display:"flex",flexShrink:1,flexBasis:"0px",flexDirection:"column","& :last-child":{fontSize:"0.875rem"}},description:{fontSize:"12px",color:ge.a[500],marginTop:"-2px",marginBottom:"3px"},value:{},textCenter:{textAlign:"center"}}}));function Oe(e){var t=Le(),a=e.portfolio.greeks(e.portfolio.entryStockPrice,e.portfolio.entryTime,e.r);return r.a.createElement(ce.a,{className:t.card},r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Net Price"),r.a.createElement("span",{className:t.value},"$",e.portfolio.entryCost(e.r).toFixed(2))),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Weighted IV"),r.a.createElement("span",{className:t.value},e.portfolio.weightedIV().toFixed(2)))),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Max Gain"),r.a.createElement("span",{className:t.value},"38.39 (32x)")),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Max Loss"),r.a.createElement("span",{className:t.value},"$",e.portfolio.maxLoss(e.r).toFixed(2)," (-100%)"))),r.a.createElement(ae.a,{className:t.bottomMargin}),r.a.createElement(de.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(ue.a,{title:"Delta - how much the option value changes for every dollar increase in stock price"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u0394"),r.a.createElement("span",{className:t.value},a.delta.toFixed(2)))),r.a.createElement(ue.a,{title:"Delta% - how much the option value changes (as a % of max loss) for every dollar increase in stock price"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u0394%"),r.a.createElement("span",{className:t.value},(100*a.deltaPct).toFixed(1),"%"))),r.a.createElement(ue.a,{title:"Gamma - how much Delta changes for every dollar increase in stock price"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u0194"),r.a.createElement("span",{className:t.value},a.gamma.toFixed(2)))),r.a.createElement(ue.a,{title:"Gamma% - how much Delta% changes for every dollar increase in stock price"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u0194%"),r.a.createElement("span",{className:t.value},(100*a.gammaPct).toFixed(1),"%"))),r.a.createElement(ue.a,{title:"Theta - how much the option value changes every day due to time decay"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u03f4"),r.a.createElement("span",{className:t.value},a.theta.toFixed(2)))),r.a.createElement(ue.a,{title:"Theta% - how much the option value changes (as a % of max loss) every day due to time decay"},r.a.createElement("div",{className:t.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Ce.a)(t.description,t.textCenter)},"\u03f4%"),r.a.createElement("span",{className:t.value},(100*a.thetaPct).toFixed(1),"%")))))}var Te=Object(U.a)((function(e){return{toolbar:e.mixins.toolbar,drawer:{width:350,flexShrink:0,overflowX:"hidden"},drawerPaper:{width:350,overflowX:"hidden"},drawerTypography:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},drawerTypographySmall:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},addIconButton:{alignSelf:"flex-end",marginRight:e.spacing(2)}}}));function je(e){var t=Te(),a=function(t){return function(){1!==e.portfolio.legs.length&&e.setPortfolio(e.portfolio.withNewLegs(e.portfolio.legs.filter((function(e,a){return a!==t}))))}};return r.a.createElement(ee.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(ne.a,{container:!0,className:t.drawerTypography,spacing:2},r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(W,{label:"Stock Ticker",fullWidth:!0,variant:"outlined",value:e.symbol,setValue:e.setSymbol})),r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(W,{label:"Stock Price",fullWidth:!0,variant:"outlined",type:"number",value:e.portfolio.entryStockPrice.toFixed(2),setValue:function(t){e.setPortfolio(new z(e.portfolio.legs,e.portfolio.entryTime,parseFloat(t)))}}))),r.a.createElement(re.a,{className:t.drawerTypographySmall}),r.a.createElement(ae.a,null),r.a.createElement(re.a,{variant:"h6",className:t.drawerTypography},"Options Legs"),e.portfolio.legs.map((function(t,n){return r.a.createElement(Pe,{entryStockPrice:e.portfolio.entryStockPrice,entryTime:e.portfolio.entryTime,r:e.r,leg:t,setLeg:(i=n,function(t){var a=p.a.clone(e.portfolio.legs);a[i]=t,e.setPortfolio(e.portfolio.withNewLegs(a))}),deleteLeg:a(n)});var i})),r.a.createElement(te.a,{variant:"text",startIcon:r.a.createElement(oe.a,null),className:t.addIconButton,onClick:function(){var t=p.a.clone(e.portfolio.legs);t.push(Object(c.a)({},e.portfolio.legs[e.portfolio.legs.length-1])),e.setPortfolio(e.portfolio.withNewLegs(t))}},"Add Leg"),r.a.createElement(Oe,{r:e.r,portfolio:e.portfolio}),r.a.createElement(re.a,{className:t.drawerTypographySmall}),r.a.createElement(ae.a,null),r.a.createElement(re.a,{variant:"h6",className:t.drawerTypography},"Variables"),r.a.createElement("form",{className:t.drawerTypography,noValidate:!0,autoComplete:"off"},r.a.createElement(W,{label:"r (risk-free rate)",fullWidth:!0,variant:"outlined",type:"number",value:"".concat(e.r),setValue:function(t){return e.setR(parseFloat(t))}})))}var Me=a(38),Be=a(287),Ve=a(288),Re=a(289),Fe=a(148),We=a.n(Fe),qe=a(147),De=a.n(qe),ze=Object(U.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},titleLink:{color:e.palette.primary.contrastText},menuButton:{marginRight:e.spacing(2)}}}));function Ie(){var e=ze();return r.a.createElement(Be.a,{position:"fixed",className:e.appBar},r.a.createElement(J.a,null,r.a.createElement(Ve.a,{className:e.menuButton},r.a.createElement(Re.a,{href:"/rainbow-options",underline:"none",className:e.titleLink},r.a.createElement(De.a,null))),r.a.createElement(Re.a,{href:"/",underline:"none",variant:"h6",className:e.titleLink},"Rainbow Options Calculator"),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement("div",null,r.a.createElement(Ee.a,{"aria-label":"link to github","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},r.a.createElement(Re.a,{href:"https://github.com/advait/rainbow-options",className:e.titleLink,target:"_blank"},r.a.createElement(We.a,null))))))}var Ge=Object(U.a)((function(e){return{root:{display:"flex"},content:{top:0,right:0,width:"calc(100% - ".concat(350,"px)"),height:"100%",display:"flex",position:"fixed",overflowY:"hidden",padding:0}}}));var Ye,Ue=function(){var e,t=Ge(),a=Object(Me.f)(),i=Object(Me.g)(),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="/p/".concat(e.toURLSlug());t?a.replace(n):a.push(n)};try{e=z.fromURLSlug(i.p)}catch(b){console.log("Failed to deserialize portfolio form hash, falling back to default portfolio."),o(e=I,!0)}var c=Object(n.useState)(.007),s=Object(l.a)(c,2),u=s[0],m=s[1],p=Object(n.useState)({s:0,t:j()(),mouseX:0,mouseY:0,show:!1}),d=Object(l.a)(p,2),f=d[0],g=d[1],h=Object(n.useState)("TEST"),v=Object(l.a)(h,2),E=v[0],y=v[1],x={t0:e.entryTime,tFinal:e.getEarliestExpiration()},w=2*e.entryStockPrice,k={yFinal:Math.max(0,e.entryStockPrice-w),y0:e.entryStockPrice+w},N=e.netValuePoint(f.s,f.t,u);return r.a.createElement("div",{className:t.root},r.a.createElement(Ie,null),r.a.createElement(je,{portfolio:e,setPortfolio:o,r:u,setR:m,symbol:E,setSymbol:y}),r.a.createElement("main",{className:t.content},r.a.createElement(Q,{portfolio:e,portfolioValue:N,r:u,timeWindow:x,stockPriceWindow:k,st:f,setST:g})))},Ae=a(79);o.a.render((Ye=r.a.createElement(Ae.a,null,r.a.createElement(Me.c,null,r.a.createElement(Me.a,{path:"/p/:p"},r.a.createElement(Ue,null)),r.a.createElement(Me.a,null,r.a.createElement(Ue,null)))),r.a.createElement(S.a,{client:M},Ye)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.8e672804.chunk.js.map