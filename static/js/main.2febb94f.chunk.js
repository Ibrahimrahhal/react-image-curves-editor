(this["webpackJsonpreact-image-curves-editor-example"]=this["webpackJsonpreact-image-curves-editor-example"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);n(6);var r,a,i=n(0),c=n.n(i),u=n(4),s=n.n(u),o=n(2),l=n(3),f=n(1),h=n.n(f),g=function(e,t,n,r){e&&t&&window.requestAnimationFrame((function(){t.beginPath(),t.rect(0,0,e.width,e.height),t.fillStyle="#5f5f5f",t.fill(),t.beginPath(),t.moveTo(0,e.height),t.lineWidth=2,t.strokeStyle="#f1f1f1",t.fillStyle="#f1f1f1";for(var a=0;a<e.width/2;a++)t.lineTo(2*a/e.width*e.width,e.height-h()(2*a/e.width,n,r)*e.height);t.lineTo(n[n.length-1]*e.width,e.height-r[r.length-1]*e.height),t.stroke();for(var i=0;i<n.length;i++)t.beginPath(),t.arc(n[i]*e.width,e.height-r[i]*e.height,8,0,2*Math.PI,!1),t.fill(),t.stroke()}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return parseFloat(e.toFixed(t))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return parseFloat(e.toFixed(t))},m={a:{xs:[0,1],ys:[0,1]},r:{xs:[0,1],ys:[0,1]},g:{xs:[0,1],ys:[0,1]},b:{xs:[0,1],ys:[0,1]}},b=function(e){var t,n,r,a,u,s,f,b=e.currentChannel,y=e.targetCanvas,w=b||"a",E=Object(i.useRef)(null),x=Object(i.useRef)(null),p=Object(i.useState)(m),j=Object(o.a)(p,2),O=j[0],I=j[1],C=Object(i.useState)(null),k=Object(o.a)(C,2),D=k[0],S=k[1],A=!1,F=!1;Object(i.useEffect)((function(){var e=function(e){16==(e.keyCode||e.which)&&(F=!0)},t=function(){F=!1};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[]),Object(i.useEffect)((function(){if(!D){var e=y.getContext("2d").getImageData(0,0,y.width,y.height);S(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height))}}),[]),Object(i.useEffect)((function(){if(E.current){var e=E.current;e.width=280,e.height=280,x.current=e.getContext("2d")}}),[E.current,y]),Object(i.useEffect)((function(){I(m)}),[w]),Object(i.useEffect)((function(){D&&function(e,t,n,r){t&&n&&window.requestAnimationFrame((function(){for(var a={a:[],r:[],g:[],b:[]},i=new Uint8ClampedArray(e.data),c=0;c<256;c++)a.a.push(parseInt(256*h()(v(c/256),r.a.xs,r.a.ys))),a.r.push(parseInt(256*h()(v(c/256),r.r.xs,r.r.ys))),a.g.push(parseInt(256*h()(v(c/256),r.g.xs,r.g.ys))),a.b.push(parseInt(256*h()(v(c/256),r.b.xs,r.b.ys)));for(var u=0;u<i.length;u+=4)i[u]=a.r[i[u]],i[u+1]=a.g[i[u+1]],i[u+2]=a.b[i[u+2]],i[u]=a.a[i[u]],i[u+1]=a.a[i[u+1]],i[u+2]=a.a[i[u+2]];n.putImageData(new ImageData(i,t.width,t.height),0,0)}))}(D,y,y.getContext("2d"),O)}),[O]),Object(i.useEffect)((function(){E.current&&x.current&&g(E.current,x.current,O[w].xs,O[w].ys)}));var R=function(e,i,c){r=!1,a=null,f=null,u=i.width,s=i.height,t=e.nativeEvent.offsetX||e.nativeEvent.layerX,n=s-(e.nativeEvent.offsetY||e.nativeEvent.layerY);for(var o=0;o<c.xs.length;o++)t>=c.xs[o]*u-6&&t<=c.xs[o]*u+6&&n>=c.ys[o]*s-6&&n<=c.ys[o]*s+6&&(r=!0,a=o,f=Object.assign({},c));r&&F&&(r=!1,function(e){var t=O;0===e||e>=t[w].xs.length-1||(t[w].xs.splice(e,1),t[w].ys.splice(e,1),I(Object(l.a)({},t)))}((a=null)+1))},T=function(e,t){var n=e.nativeEvent.offsetX||e.nativeEvent.layerX,r=s-(e.nativeEvent.offsetY||e.nativeEvent.layerY);h()(d(n/u),t.xs,t.ys)*s>=r-8&&h()(d(n/u),t.xs,t.ys)*s<=r+8&&function(e,t){for(var n=null,r=Object(l.a)({},O),a=0;a<r[w].xs.length;a++)e>r[w].xs[a]&&e<r[w].xs[a+1]&&(n=a+1);r[w].xs.splice(n,0,e),r[w].ys.splice(n,0,t),I(r)}(d(n/u),d(r/s))};return c.a.createElement("div",null,c.a.createElement("canvas",{ref:E,onMouseDown:function(e){return R(e,E.current,O[w])},onMouseMove:function(e){return function(e,t,n){if(r&&0!=a&&a!=f.xs.length-1){A=!0;var i=e.nativeEvent.offsetX||e.nativeEvent.layerX,c=e.nativeEvent.offsetY||e.nativeEvent.layerY;f.xs[a]=i/u,f.ys[a]=(s-c)/s,g(t,n,f.xs,f.ys)}}(e,E.current,x.current)},onMouseUp:function(){r=!1,A&&(!function(e){var t={};t[w]=e,I(Object(l.a)(Object(l.a)({},O),{},{curveToChange:t}))}(f),A=!1)},onDoubleClick:function(e){return T(e,O[w])}}))},y=function(){for(var e=[],t=0;t<256;t++)e[t]=0;return e},w=document.createElement("canvas"),E=w.getContext("2d"),x={r:"#d22121",g:"#079407",b:"#1b1bbb",a:"#d6d6d6"},p=function(e){var t=e.targetRef,n=Object(i.useRef)(null),u=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(n.current){var e=n.current;e.width=280,e.height=140,u.current=e.getContext("2d")}}),[n.current]),Object(i.useEffect)((function(){u.current&&n.current&&function(e,t,n){e&&t&&window.requestAnimationFrame((function(){t.beginPath(),t.rect(0,0,e.width,e.height),t.fillStyle="#5f5f5f",t.fill(),(a={}).a=y(),a.r=y(),a.g=y(),a.b=y(),"number"===typeof n.height?(w.width=parseInt(n.width/4),w.height=parseInt(n.height/4),E.drawImage(n,0,0,w.width,w.height)):E=n.getContext("2d"),r=E.getImageData(0,0,w.width,w.height).data;for(var i=0;i<r.length;i+=4){var c=parseInt(r[i]/3)+parseInt(r[i+1]/3)+parseInt(r[i+2]/3);c>a.a.length-1&&(c=a.a.length-1),a.a[c]++,a.r[r[i]]++,a.g[r[i+1]]++,a.b[r[i+2]]++}for(var u in a.max=.75*parseInt(r.length),t.lineWidth=1,x){t.strokeStyle=x[u],t.beginPath(),t.moveTo(0,e.height);for(var s=0;s<256;s++){var o=a[u][s]/a.max*256;t.lineTo(parseInt(s/256*e.width),(1-o)*(.7*e.height)+.3*e.height)}t.lineTo(e.width,e.height),t.stroke()}}))}(n.current,u.current,t)}),[u.current]),c.a.createElement("div",null,c.a.createElement("canvas",{ref:n}))},j=(n(13),function(){var e=c.a.useRef(null),t=c.a.useState(!1),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(i.useEffect)((function(){if(e.current){var t=e.current,n=t.getContext("2d");if(n){var r=new Image;r.onload=function(){t.width=r.width,t.height=r.height,n.drawImage(r,0,0),a(!0)},r.src="/react-image-curves-editor/house.jpg"}}}),[]),c.a.createElement("div",null,c.a.createElement("h1",{style:{textAlign:"center"}},"Curves Editor Demo"),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{style:{margin:"0 20px"}},c.a.createElement("canvas",{ref:e})),c.a.createElement("div",null,r&&c.a.createElement(p,{targetRef:e.current}),r&&c.a.createElement(b,{targetCanvas:e.current}))),c.a.createElement("h5",{style:{textAlign:"center"}},"Double click on levels to add new item & shit + mouse click to remove it"))});s.a.render(c.a.createElement(j,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(14)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.2febb94f.chunk.js.map