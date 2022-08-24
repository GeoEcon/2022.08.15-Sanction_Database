(function(e){function t(t){for(var a,l,o=t[0],s=t[1],c=t[2],f=0,d=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/2022.08.15-Sanction_Database/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Database")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"font-bold"},[e._v("Discrepancies in Western Sanctions Against Russian Entities")]),n("div",{staticClass:"inline-flex m-2 my-4 mt-6"},[[n("v-text-field",{staticClass:"mx-4",attrs:{label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],[n("v-select",{attrs:{items:e.selectors,label:"Type",outlined:""},model:{value:e.selectedVal,callback:function(t){e.selectedVal=t},expression:"selectedVal"}})]],2),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.rows,"items-per-page":5,search:e.search,"custom-filter":e.filterOnlyCapsText}})],1)},o=[],s=(n("d3b7"),n("25f0"),n("bc3a")),c=n.n(s),u=n("4d7c"),f=n.n(u),d={methods:{load:function(){var e=this;c.a.get("https://docs.google.com/spreadsheets/d/1b9dGS8ACKZ1WsYchlpqQt7EBMD3QZhTPIZWG2n70Grc/export?format=csv&gid=0",{responseType:"blob"}).then((function(t){var n=t.data;n.text().then((function(t){f()().fromString(t).then((function(t){e.rows=t,console.log(e.rows)}))}))}))},filterOnlyCapsText:function(e,t){return null!=e&&null!=t&&"string"===typeof e&&-1!==e.toString().toLocaleUpperCase().indexOf(t)}},created:function(){this.load()},data:function(){var e=this,t="",n="",a=[{text:"Entity/Individual",align:"start",sortable:!1,value:"entity_individual"},{text:"Australia",value:"Australia"},{text:"Canada",value:"Canada"},{text:"EU",value:"EU"},{text:"Switzerland",value:"Switzerland"},{text:"UK",value:"UK"},{text:"US",value:"US"},{text:"Sectors for Entities as a filter",value:"filter",filter:function(t){return!e.selectedVal||t==e.selectedVal}}],r=[{entity_individual:"27th Scientific Center",Australia:"✅",Canada:"❌",EU:"❌",Switzerland:"❌",UK:"❌",US:"❌",filter:"I"}],i=["I","O"],l="";return{info:n,headers:a,rows:r,search:t,selectors:i,selectedVal:l}}},p=d,v=(n("5b7f"),n("2877")),b=n("6544"),h=n.n(b),m=n("8fea"),x=n("b974"),y=n("8654"),g=Object(v["a"])(p,l,o,!1,null,"a077763e",null),S=g.exports;h()(g,{VDataTable:m["a"],VSelect:x["a"],VTextField:y["a"]});var w={name:"App",metaInfo:{title:"About Us"},components:{Database:S},data:function(){return{}}},O=w,_=(n("034f"),n("7496")),C=n("f6c4"),j=Object(v["a"])(O,r,i,!1,null,null,null),U=j.exports;h()(j,{VApp:_["a"],VMain:C["a"]});var V=n("f309");a["a"].use(V["a"]);var T=new V["a"]({});n("db43");a["a"].config.productionTip=!1,new a["a"]({vuetify:T,render:function(e){return e(U)}}).$mount("#app")},"5b7f":function(e,t,n){"use strict";n("c08d")},"85ec":function(e,t,n){},c08d:function(e,t,n){},db43:function(e,t,n){}});
//# sourceMappingURL=app.0116d363.js.map