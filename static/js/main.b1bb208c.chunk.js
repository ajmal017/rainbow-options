(this["webpackJsonprainbow-options"]=this["webpackJsonprainbow-options"]||[]).push([[0],{203:function(e,t,a){e.exports=a(234)},208:function(e,t,a){},209:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(208),a(42)),c=(a(209),a(132)),s=a(23),m=a(21),u=a.n(m),p=a(271),d=a(270),g=a(151),f=a(150),h=a(20),v=a.n(h),y=new d.a({link:new f.a({uri:"http://localhost:4000"}),cache:new g.a});function E(e){return v()(e,"YYYY-MM-DD")}function w(e){return e.format("YYYY-MM-DD")}var x,k=a(20);!function(e){e[e.PUT=0]="PUT",e[e.CALL=1]="CALL"}(x||(x={}));var N={legs:[{quantity:1,putCall:x.CALL,k:4,t:k().add(182,"days"),iv:1.2}],entryTime:k()};function b(e){var t=e.legs.map((function(e){return e.t}));return t.sort((function(e,t){return e.isBefore(t)?-1:1})),t[0]}function S(e,t,a){return W(e,t.entryTime,t,a)}function C(e){var t=JSON.stringify(Object(s.a)({},e,{legs:e.legs.map((function(e){return Object(s.a)({},e,{t:w(e.t)})})),entryTime:w(e.entryTime)}));return encodeURI(t)}function P(e){var t=1/(1+.2316419*Math.abs(e)),a=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(t*(1.781478+t*(1.330274*t-1.821256))-.3565638));return e>0?1-a:a}function O(e,t,a,n,r){if(0===a)return Math.max(0,e-t);if(a<0)return 0;var i=(Math.log(e/t)+(n+Math.pow(r,2)/2)*a)/(r*Math.sqrt(a)),o=i-r*Math.sqrt(a);return e*P(i)-t*Math.exp(-n*a)*P(o)}function T(e,t,a,n,r){if(0===a)return Math.max(0,t-e);if(a<0)return 0;var i=(Math.log(e/t)+(n+Math.pow(r,2)/2)*a)/(r*Math.sqrt(a)),o=i-r*Math.sqrt(a);return t*Math.exp(-n*a)*P(-o)-e*P(-i)}var L=new c.GPU;function j(e,t,a,n){if(a.putCall===x.CALL){var r=a.t.diff(t,"years",!0);return O(e,a.k,r,n,a.iv)}if(a.putCall===x.PUT){var i=a.t.diff(t,"years",!0);return T(e,a.k,i,n,a.iv)}throw Error("Invalid type: "+a.putCall)}function W(e,t,a,n){return m.chain(a.legs).map((function(a){return a.quantity*j(e,t,a,n)})).sum().value()}function M(e,t,a,n,r,i,o,l,c){performance.mark("portfolioValueStart");var s=a.diff(l.entryTime,"years",!0),m=n.diff(l.entryTime,"years",!0),u=S(o,l,c);performance.mark("gpuLegStart");var p=L.createKernel((function(e,t,a,n,r,i,o,l){for(var c=Math.floor(this.thread.x/e),s=this.thread.x%e/e*(n-a)+a,m=c/t*(i-r)+r,u=o[0],p=o[1],d=0,g=0;g<p;g++){var f=o[5*g+2],h=o[5*g+3],v=o[5*g+4],y=o[5*g+5],E=o[5*g+6];d+=0===h?f*T(m,v,y-s,l,E):f*O(m,v,y-s,l,E)}return d-u})),d=p.setOutput([e*t])(e,t,s,m,r,i,function(e,t){var a=[];return a.push(t),a.push(e.legs.length),e.legs.forEach((function(t){a.push(t.quantity),a.push(t.putCall===x.PUT?0:1),a.push(t.k),a.push(t.t.diff(e.entryTime,"years",!0)),a.push(t.iv)})),a}(l,u),c);p.destroy();for(var g=1/0,f=0;f<d.length;f++){var h=d[f];h<g&&(g=h)}var v=d.map((function(e){return e/-g}));return performance.measure("portfolioValue","portfolioValueStart"),{pctGain:v,minValue:g}}L.addFunction(P),L.addFunction(O),L.addFunction(T);var B=a(272),F=a(288),D=a(275),R=a(289),V=a(283),z=(a(226),a(149)),q=a.n(z),G=a(290),I=a(148),Y=a.n(I),A=a(137),U=a(138),X=a(152),J=a(139),H=a(153),$=a(28),K=Object(B.a)((function(e){return{outerContainer:{width:"100%",height:"100%"},toolbar:e.mixins.toolbar,contoursInnerContainer:{position:"relative",width:"100%",height:"100%"},d3Container:{position:"absolute",width:"100%",height:"100%",zIndex:1},svg:{position:"absolute",width:"100%",height:"100%",zIndex:2}}}));function Q(e){var t=K();return r.a.createElement("div",{className:t.outerContainer},r.a.createElement(D.a,{className:t.toolbar}),r.a.createElement("div",{id:"contoursInnerContainer",className:t.contoursInnerContainer},r.a.createElement(_,Object.assign({},e,{className:t.d3Container})),r.a.createElement(Z,{st:e.st,pctGain:e.portfolioValue.pctGain,className:t.svg})))}var _=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(X.a)(this,Object(J.a)(t).call(this,e))).d3ContainerRef=r.a.createRef(),a.stockPriceWindow=a.props.stockPriceWindow,a.timeWindow=a.props.timeWindow,a.entryStockPrice=a.props.entryStockPrice,a.portfolio=a.props.portfolio,a.r=a.props.r,a}return Object(H.a)(t,e),Object(U.a)(t,[{key:"updateST",value:function(e,t){for(var a=e.target;"contoursInnerContainer"!==a.id;)if(!(a=a.parentElement))throw new Error("Could not find contoursInnerContainer");var n=a.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,o=this.tScale.invert(r),l=this.yScale.invert(i);this.props.setST({s:l,t:v()(o),mouseX:e.clientX,mouseY:e.clientY,show:t})}},{key:"componentDidMount",value:function(){var e=this;this.initD3(),this.updateD3(),this.resizeListener=m.debounce((function(){return e.updateD3()}),10),window.addEventListener("resize",this.resizeListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListener)}},{key:"shouldComponentUpdate",value:function(e,t,a){return this.timeWindow.t0===e.timeWindow.t0&&this.timeWindow.tFinal===e.timeWindow.tFinal&&this.stockPriceWindow.y0===e.stockPriceWindow.y0&&this.stockPriceWindow.yFinal===e.stockPriceWindow.yFinal&&this.entryStockPrice===e.entryStockPrice&&JSON.stringify(this.props.portfolio)===JSON.stringify(e.portfolio)&&this.r===e.r||(this.timeWindow.t0=e.timeWindow.t0,this.timeWindow.tFinal=e.timeWindow.tFinal,this.stockPriceWindow.y0=e.stockPriceWindow.y0,this.stockPriceWindow.yFinal=e.stockPriceWindow.yFinal,this.entryStockPrice=e.entryStockPrice,this.portfolio=e.portfolio,this.r=e.r,this.updateD3()),!1}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.d3ContainerRef,onMouseMove:function(t){return e.updateST(t,!0)},onMouseOut:function(t){return e.updateST(t,!1)},className:this.props.className})}},{key:"initD3",value:function(){var e=this.d3ContainerRef.current;console.assert(e,"No canvas container");var t=e.offsetWidth||100,a=e.offsetHeight||100;this.svg=$.d("svg").attr("viewBox",[0,0,t,a]),this.yScale=this.yScale=$.h().domain([this.stockPriceWindow.y0,this.stockPriceWindow.yFinal]).range([0,a]),this.yAxis=$.b().scale(this.yScale),this.tScale=this.tScale=$.j().domain([this.timeWindow.t0.valueOf(),this.timeWindow.tFinal.valueOf()]).range([0,t]),this.tAxis=$.a().scale(this.tScale),this.svg.append("g").attr("class","contours").attr("fill","none").attr("stroke","#fff").attr("stroke-opacity",.5),this.svg.append("g").attr("class","t-axis").attr("transform","translate(0,".concat(this.yScale(556),")")).call(this.tAxis),this.svg.append("g").attr("class","y-axis").call(this.yAxis),e.appendChild(this.svg.node())}},{key:"updateD3",value:function(){performance.clearMarks(),performance.clearMeasures();var e=this.d3ContainerRef.current;console.assert(e,"No canvas container");var t=e.offsetWidth||100,a=e.offsetHeight||100;this.yScale.domain([this.stockPriceWindow.y0,this.stockPriceWindow.yFinal]).range([0,a]),this.tScale.domain([this.timeWindow.t0.valueOf(),this.timeWindow.tFinal.valueOf()]).range([0,t]);var n=Math.floor(t/4),r=Math.floor(a/4),i=M(n,r,this.timeWindow.t0,this.timeWindow.tFinal,this.stockPriceWindow.y0,this.stockPriceWindow.yFinal,this.entryStockPrice,this.portfolio,this.r);performance.mark("d3ContoursStart");var o=$.c().size([n,r])(i.pctGain);performance.mark("d3ContoursEnd"),performance.measure("d3Contours","d3ContoursStart","d3ContoursEnd"),console.log(performance.getEntriesByType("measure"));var l=$.e().projection($.f({point:function(e,a){this.stream.point(e/n*t,a/n*t)}}));this.svg.attr("viewBox",[0,0,t,a]),this.svg.select(".contours").selectAll("path").data(o).join("path").attr("fill",(function(e){return $.g((t=e.value)<=0?$.h().domain([-1,0]).range([0,.5])(t):$.i().domain([0,3]).range([.5,1])(t));var t})).attr("d",l),this.svg.select(".t-axis").attr("transform","translate(0,".concat(this.yScale(this.entryStockPrice),")")).call(this.tAxis),this.svg.select(".y-axis").call(this.yAxis)}}]),t}(r.a.Component);function Z(e){var t,a={display:e.hidden?"hidden":"inline",position:"fixed",top:e.st.mouseY+20,left:e.st.mouseX,zIndex:3,backgroundColor:"#33333344",padding:"6px",borderRadius:"4px",transform:"translate(-40%, -200%)"};return r.a.createElement("div",{className:"gains-tooltip",style:a},(t=e.pctGain)<=0?"".concat((100*t).toFixed(2),"%"):t<1?"+".concat((100*t).toFixed(2),"%"):"".concat(t.toFixed(2),"x"))}var ee=a(294),te=a(235),ae=a(285),ne=a(287),re=a(291),ie=a(54),oe=a(146),le=a.n(oe),ce=a(61),se=a(279),me=a(280),ue=a(295),pe=a(296),de=a(284),ge=a(292),fe=a(286),he=a(67),ve=a(277),ye=a(278),Ee=a(145),we=a.n(Ee),xe=a(68),ke=a.n(xe),Ne=a(144),be=a.n(Ne),Se=a(4),Ce=Object(B.a)((function(e){return{card:{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(1),overflow:"visible"},cardHeader:{cursor:"pointer"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},contentRow:{display:"flex",alignItems:"center",marginBottom:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2),justifyContent:"space-between"},bottomMargin:{marginBottom:e.spacing(2)},largeButtonGroup:{flexGrow:1,flexShrink:1},largeButton:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},smallButtonGroup:{marginRight:e.spacing(2)},smallButton:{padding:0,margin:0,minWidth:"24px"},descriptionValueParent:{display:"flex",flexGrow:1,flexDirection:"column"},description:{fontSize:"12px",color:he.a[500],marginTOp:"-2px",marginBottom:"3px"},value:{fontSize:"18px"},orangeLong:{color:e.palette.getContrastText(ve.a[500]),backgroundColor:ve.a[500]},orangeShort:{color:e.palette.getContrastText(ve.a[100]),backgroundColor:ve.a[100]},purpleLong:{color:e.palette.getContrastText(ye.a[500]),backgroundColor:ye.a[500]},purpleShort:{color:e.palette.getContrastText(ye.a[100]),backgroundColor:ye.a[100]},grey:{color:e.palette.getContrastText(he.a[500]),backgroundColor:he.a[500]}}}));function Pe(e){var t=Ce(),a=Object(n.useState)(!1),i=Object(l.a)(a,2),o=i[0],c=i[1];function m(e,t,a){return void 0===e?t:a(e)}var u=m(e.leg.quantity,"-",(function(e){return e>0?"+".concat(e):"".concat(e)})),p=m(e.leg.putCall,"?",(function(e){return e===x.CALL?"Call":"Put"})),d=m(e.leg.quantity,"Long",(function(e){return e<0?"Short":"Long"})),g="".concat(p[0]).concat(d[0]),f=m(e.leg.k,"?",(function(e){return"$".concat(e)})),h=m(e.leg.t,"?",(function(e){return"".concat(e.format("MMM DD, YYYY")," (").concat(e.diff(v()(),"days")," days)")})),y="";e.leg.putCall===x.CALL&&(y=e.leg.quantity&&e.leg.quantity<0?t.orangeShort:t.orangeLong);var E="";e.leg.putCall===x.PUT&&(E=e.leg.quantity&&e.leg.quantity<0?t.purpleShort:t.purpleLong);var w=function(t){return function(){e.setLeg(Object(s.a)({},e.leg,{t:e.leg.t.clone().add(t)}))}},k=function(t){return function(){var a=e.leg.quantity+t;0===a&&(a+=t),e.setLeg(Object(s.a)({},e.leg,{quantity:a}))}},N=function(t){return function(){e.setLeg(Object(s.a)({},e.leg,{k:e.leg.k+t}))}},b=function(t){return function(){e.setLeg(Object(s.a)({},e.leg,{putCall:t}))}},S=function(t){return function(){e.setLeg(Object(s.a)({},e.leg,{iv:e.leg.iv+t}))}};return r.a.createElement(se.a,{elevation:1,className:t.card},r.a.createElement(me.a,{avatar:r.a.createElement(ue.a,{title:"".concat(d," ").concat(p)},r.a.createElement(pe.a,{className:Object(Se.a)(E,y)},g)),title:"".concat(u,"x @ ").concat(f," ").concat(p),subheader:"".concat(h),action:r.a.createElement(V.a,{className:Object(Se.a)(t.expand,Object(ce.a)({},t.expandOpen,o))},r.a.createElement(be.a,null)),onClick:function(){return c(!o)},className:t.cardHeader}),r.a.createElement(de.a,{in:o,timeout:"auto"},r.a.createElement(ae.a,{className:t.bottomMargin}),r.a.createElement(ge.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"horizontal",variant:"outlined",className:t.largeButtonGroup},r.a.createElement(te.a,{className:Object(Se.a)(t.largeButton,y),onClick:b(x.CALL)},e.leg.quantity&&e.leg.quantity<0?"Short":"Long"," ","Call"),r.a.createElement(te.a,{className:Object(Se.a)(t.largeButton,E),onClick:b(x.PUT)},e.leg.quantity&&e.leg.quantity<0?"Short":"Long"," ","Put")),r.a.createElement(V.a,{edge:"end"},r.a.createElement(we.a,{onClick:e.deleteLeg}))),r.a.createElement(ge.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:w(v.a.duration(1,"month"))},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:w(v.a.duration(-1,"month"))},"-")),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Expiration"),r.a.createElement("span",{className:t.value},e.leg.t?r.a.createElement(r.a.Fragment,null,e.leg.t.format("MMM DD, YY")," (",e.leg.t.diff(v()(),"days")," days)"):"Unknown")),r.a.createElement(V.a,{edge:"end"},r.a.createElement(ke.a,null))),r.a.createElement(ge.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:k(1)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:k(-1)},"-")),r.a.createElement("div",{className:t.descriptionValueParent,style:{width:"65px"}},r.a.createElement("span",{className:t.description},"Quantity"),r.a.createElement("span",{className:t.value},e.leg.quantity?e.leg.quantity:"?")),r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:N(1)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:N(-1)},"-")),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Strike Price"),r.a.createElement("span",{className:t.value},"$",e.leg.k?e.leg.k.toFixed(2):"?")),r.a.createElement(V.a,{edge:"end"},r.a.createElement(ke.a,null))),r.a.createElement(ge.a,{flexDirection:"row",className:t.contentRow},r.a.createElement(fe.a,{orientation:"vertical",variant:"outlined",className:t.smallButtonGroup},r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:S(.05)},"+"),r.a.createElement(te.a,{size:"small",className:t.smallButton,onClick:S(-.05)},"-")),r.a.createElement("div",{className:t.descriptionValueParent,style:{width:"60px"}},r.a.createElement("span",{className:t.description},"Unit Price"),r.a.createElement("span",{className:t.value},"$",j(e.entryStockPrice,e.entryTime,e.leg,e.r).toFixed(2))),r.a.createElement("div",{className:t.descriptionValueParent},r.a.createElement("span",{className:t.description},"Implied Volatility"),r.a.createElement("span",{className:t.value},e.leg.iv?e.leg.iv.toFixed(2):"?")),r.a.createElement(V.a,{edge:"end"},r.a.createElement(ke.a,null)))))}var Oe=Object(B.a)((function(e){return{card:{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(1),paddingTop:e.spacing(2),overflow:"visible"},cardHeader:{cursor:"pointer"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},contentRow:{display:"flex",alignItems:"center",marginBottom:e.spacing(2),marginLeft:e.spacing(2),marginRight:e.spacing(2),justifyContent:"space-between"},bottomMargin:{marginBottom:e.spacing(2)},descriptionValueParent:{display:"flex",flexGrow:1,flexBasis:"0px",flexDirection:"column"},descriptionValueParentShrink:{display:"flex",flexShrink:1,flexBasis:"0px",flexDirection:"column","& :last-child":{fontSize:"0.875rem"}},description:{fontSize:"12px",color:he.a[500],marginTop:"-2px",marginBottom:"3px"},value:{},textCenter:{textAlign:"center"}}}));function Te(e){var t,a=Oe();return r.a.createElement(se.a,{className:a.card},r.a.createElement(ge.a,{flexDirection:"row",className:a.contentRow},r.a.createElement("div",{className:a.descriptionValueParent},r.a.createElement("span",{className:a.description},"Net Price"),r.a.createElement("span",{className:a.value},"$",S(e.entryStockPrice,e.portfolio,e.r).toFixed(2))),r.a.createElement("div",{className:a.descriptionValueParent},r.a.createElement("span",{className:a.description},"Weighted IV"),r.a.createElement("span",{className:a.value},(t=e.portfolio,u.a.chain(t.legs).map((function(e){return Math.abs(e.quantity)*e.iv})).sum().value()/u.a.chain(t.legs).map((function(e){return Math.abs(e.quantity)})).sum().value()).toFixed(2)))),r.a.createElement(ge.a,{flexDirection:"row",className:a.contentRow},r.a.createElement("div",{className:a.descriptionValueParent},r.a.createElement("span",{className:a.description},"Max Gain"),r.a.createElement("span",{className:a.value},"38.39 (32x)")),r.a.createElement("div",{className:a.descriptionValueParent},r.a.createElement("span",{className:a.description},"Max Loss"),r.a.createElement("span",{className:a.value},"-$1.39 (-100%)"))),r.a.createElement(ae.a,{className:a.bottomMargin}),r.a.createElement(ge.a,{flexDirection:"row",className:a.contentRow},r.a.createElement(ue.a,{title:"Delta - how much the option value changes for every dollar increase in stock price"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Se.a)(a.description,a.textCenter)},"\u0394"),r.a.createElement("span",{className:a.value},"0.13"))),r.a.createElement(ue.a,{title:"Delta% - how much the option value changes (as a % of max loss) for every dollar increase in stock price"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Se.a)(a.description,a.textCenter)},"\u0394%"),r.a.createElement("span",{className:a.value},"0.13"))),r.a.createElement(ue.a,{title:"Gamma - how much Delta changes for every dollar increase in stock price"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Se.a)(a.description,a.textCenter)},"\u0194"),r.a.createElement("span",{className:a.value},"0.13"))),r.a.createElement(ue.a,{title:"Gamma% - how much Delta% changes for every dollar increase in stock price"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:a.description},"\u0194%"),r.a.createElement("span",{className:a.value},"22%"))),r.a.createElement(ue.a,{title:"Theta - how much the option value changes every day due to time decay"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Se.a)(a.description,a.textCenter)},"\u03f4"),r.a.createElement("span",{className:a.value},"-3.3"))),r.a.createElement(ue.a,{title:"Theta% - how much the option value changes (as a % of max loss) every day due to time decay"},r.a.createElement("div",{className:a.descriptionValueParentShrink},r.a.createElement("span",{className:Object(Se.a)(a.description,a.textCenter)},"\u03f4%"),r.a.createElement("span",{className:a.value},"-4.3%")))))}var Le=Object(B.a)((function(e){return{toolbar:e.mixins.toolbar,drawer:{width:350,flexShrink:0,overflowX:"hidden"},drawerPaper:{width:350,overflowX:"hidden"},drawerTypography:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},drawerTypographySmall:{paddingTop:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},addIconButton:{alignSelf:"flex-end",marginRight:e.spacing(2)}}}));function je(e){var t=Le(),a=function(t){return function(){if(1!==e.portfolio.legs.length){var a=u.a.cloneDeep(e.portfolio);a.legs=a.legs.filter((function(e,a){return a!==t})),e.setPortfolio(a)}}};return r.a.createElement(ee.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(ne.a,{container:!0,className:t.drawerTypography,spacing:2},r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(re.a,{label:"Stock Ticker",fullWidth:!0,variant:"outlined",value:e.symbol,onChange:function(t){return e.setSymbol(t.target.value)}})),r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(re.a,{label:"Stock Price",fullWidth:!0,variant:"outlined",value:e.entryStockPrice.toFixed(2),type:"number",onChange:function(t){return e.setEntryStockPrice(parseFloat(t.target.value))}}))),r.a.createElement(ie.a,{className:t.drawerTypographySmall}),r.a.createElement(ae.a,null),r.a.createElement(ie.a,{variant:"h6",className:t.drawerTypography},"Options Legs"),e.portfolio.legs.map((function(t,n){return r.a.createElement(Pe,{entryStockPrice:e.entryStockPrice,entryTime:e.entryTime,r:e.r,leg:t,setLeg:(i=n,function(t){var a=u.a.cloneDeep(e.portfolio);a.legs[i]=t,e.setPortfolio(a)}),deleteLeg:a(n)});var i})),r.a.createElement(te.a,{variant:"text",startIcon:r.a.createElement(le.a,null),className:t.addIconButton,onClick:function(){var t=u.a.cloneDeep(e.portfolio);t.legs.push(Object(s.a)({},t.legs[t.legs.length-1])),e.setPortfolio(t)}},"Add Leg"),r.a.createElement(Te,{entryStockPrice:e.entryStockPrice,r:e.r,portfolio:e.portfolio}),r.a.createElement(ie.a,{className:t.drawerTypographySmall}),r.a.createElement(ae.a,null),r.a.createElement(ie.a,{variant:"h6",className:t.drawerTypography},"Variables"),r.a.createElement("form",{className:t.drawerTypography,noValidate:!0,autoComplete:"off"},r.a.createElement(re.a,{label:"r (risk-free rate)",fullWidth:!0,variant:"outlined",value:e.r,type:"number",onChange:function(t){return e.setR(parseFloat(t.target.value))}})))}var We=a(37),Me=Object(B.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},titleLink:{color:"#FFF"},toolbar:e.mixins.toolbar,menuButton:{marginRight:e.spacing(2)},content:{top:0,right:0,width:"calc(100% - ".concat(350,"px)"),height:"100%",display:"flex",position:"fixed",overflowY:"hidden",padding:0}}})),Be=m.memoize((function(e){var t=JSON.parse(decodeURI(e));return Object(s.a)({},t,{legs:t.legs.map((function(e){return Object(s.a)({},e,{t:E(e.t)})})),entryTime:E(t.entryTime)})}));var Fe,De=function(e){var t,a=Me(),i=Object(We.f)(),o=Object(We.g)(),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="/p/".concat(C(e));t?i.replace(a):i.push(a)};try{t=Be(o.p)}catch(B){console.log("Failed to deserialize portfolio form hash, falling back to default portfolio."),c(t=N,!0)}var s=Object(n.useState)(.007),m=Object(l.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)({s:0,t:v()(),mouseX:0,mouseY:0,show:!1}),g=Object(l.a)(d,2),f=g[0],h=g[1],y=Object(n.useState)("TEST"),E=Object(l.a)(y,2),w=E[0],x=E[1],k=Object(n.useState)(5),S=Object(l.a)(k,2),P=S[0],O=S[1],T={t0:t.entryTime,tFinal:b(t)},L=2*P,j={yFinal:Math.max(0,P-L),y0:P+L},M=function(e,t,a,n,r){var i=W(e,n.entryTime,n,r),o=W(t,a,n,r),l=o-i;return{endingValue:o,netValue:l,pctGain:l/i}}(P,f.s,f.t,t,u);return r.a.createElement("div",{className:a.root},r.a.createElement(F.a,{position:"fixed",className:a.appBar},r.a.createElement(D.a,null,r.a.createElement(R.a,{edge:"start",className:a.menuButton},r.a.createElement(G.a,{href:"/",underline:"none",className:a.titleLink},r.a.createElement(Y.a,null))),r.a.createElement(G.a,{href:"/",underline:"none",variant:"h6",className:a.titleLink},"Rainbow Options Calculator"),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement("div",null,r.a.createElement(V.a,{"aria-label":"link to github","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},r.a.createElement(G.a,{href:"https://github.com/advait/rainbow-options",className:a.titleLink,target:"_blank"},r.a.createElement(q.a,null)))))),r.a.createElement(je,{portfolio:t,setPortfolio:c,portfolioValue:M,r:u,setR:p,timeWindow:T,symbol:w,setSymbol:x,entryStockPrice:P,setEntryStockPrice:O,mouseST:f,setST:h}),r.a.createElement("main",{className:a.content},r.a.createElement(Q,{portfolio:t,portfolioValue:M,r:u,timeWindow:T,stockPriceWindow:j,entryStockPrice:P,setEntryStockPrice:O,st:f,setST:h})))},Re=a(76);o.a.render((Fe=r.a.createElement(Re.a,null,r.a.createElement(We.c,null,r.a.createElement(We.a,{path:"/p/:p"},r.a.createElement(De,null)),r.a.createElement(We.a,null,r.a.createElement(De,null)))),r.a.createElement(p.a,{client:y},Fe)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.b1bb208c.chunk.js.map