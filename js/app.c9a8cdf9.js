(function(t){function e(e){for(var n,l,r=e[0],o=e[1],c=e[2],u=0,f=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/2022.08.15-Sanction_Database/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"54e8":function(t,e,a){"use strict";a("adf8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("h1",{staticClass:"font-bold text-4xl pl-2"},[t._v("Gaps in Western sanctions against Russia")]),a("GraphBlock",{attrs:{"donut-obj":t.donutObj,sanctionsCountByType:t.sanctionsCountByType,"total-entries":t.totalEntries,"total-sanctions":t.totalSanctions,path:t.path,updateBars:t.updateBars}}),a("Database",{attrs:{rows:t.rows,entList:t.entList,showLoader:t.showLoader,colMap:t.colMap,path:t.path}})],1)],1)},s=[],l=a("3835"),r=(a("99af"),a("d3b7"),a("159b"),a("4fad"),a("d81d"),a("4de4"),a("bc3a")),o=a.n(r),c=a("4d7c"),d=a.n(c),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-none"},[a("div",{staticClass:"grid grid-cols-1 gap-2 lg:grid-cols-5 border-none inline-flex self-center main-color mb-4 mt-6"},[a("div",{staticClass:"sm:mx-2 mx-1 h-20 search-size border-2 col-span-2 border-prim rounded-md flex items-center",attrs:{id:"search"}},[a("div",{staticClass:"p-2"},[a("svg",{staticClass:"bi bi-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#05a8e8",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})])]),[a("v-autocomplete",{attrs:{items:t.entListFiltered,label:t.searchLabel,outlined:!0},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],a("div",{staticClass:"p-2",on:{click:t.resetSearch}},[a("svg",{staticClass:"bi bi-x cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#05a8e8",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])])],2),a("div",{staticClass:"py-5 gap-1 grid md:grid-cols-5 grid-cols-2 col-span-2 lg:col-span-3 xl:col-span-2 flex justify-items-center"},t._l(t.btns,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"btn-margin flex justify-center font-bold cursor-pointer px-4 py-2 rounded-lg border-2",style:{"border-color":e.color,color:t.selectedVals.includes(e.label)?"#fff":e.color,"background-color":t.selectedVals.includes(e.label)?e.color:"#fff",opacity:t.selectedVals.includes(e.label)?1:.6},on:{click:function(e){t.toggle(e),t.animation()}}},[a("button",[t._v(t._s(e.label))])])])})),0),a("div",{staticClass:"flex items-center justify-center flex-col",attrs:{id:"selection-countries"}},[a("div",{staticClass:"mx-4 h-20 rounded-md border-2 border-prim overflow-hidden overflow-clip rounded-md",style:{"background-color":"transparent"}},[a("div",{},[a("v-select",{attrs:{id:"dropdown-countries",items:t.countries,"menu-props":{maxHeight:"400"},label:"Select Countries",hint:"Selected Countries",multiple:"","return-object":"",dense:"","single-line":""},model:{value:t.activeColumns,callback:function(e){t.activeColumns=e},expression:"activeColumns"}})],1)]),a("div",{staticClass:"italic"},[t._v("Selected countries")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader,expression:"showLoader"}],staticClass:"flex justify-center"},[a("div",{staticClass:"loader"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showLoader,expression:"!showLoader"}]},[a("v-data-table",{staticClass:"border-none main-color",attrs:{"mobile-breakpoint":0,headers:t.displayHeaders(),items:t.rows,"items-per-page":10,id:"main-table",search:t.search,"custom-filter":t.searchFunc},scopedSlots:t._u([{key:"header.entity_individual",fn:function(e){var n=e.header;return[a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]}},{key:"header.US",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/us_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-US",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultUS,callback:function(e){t.defaultUS=e},expression:"defaultUS"}})],1)]}},{key:"header.UK",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/uk_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-UK",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultUK,callback:function(e){t.defaultUK=e},expression:"defaultUK"}})],1)]}},{key:"header.EU",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/eu_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-EU",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultEU,callback:function(e){t.defaultEU=e},expression:"defaultEU"}})],1)]}},{key:"header.Canada",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/canada_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-Canada",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultCanada,callback:function(e){t.defaultCanada=e},expression:"defaultCanada"}})],1)]}},{key:"header.Switzerland",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/sw_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-Switzerland",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultSwitzerland,callback:function(e){t.defaultSwitzerland=e},expression:"defaultSwitzerland"}})],1)]}},{key:"header.Australia",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/australia_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-Australia",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultAustralia,callback:function(e){t.defaultAustralia=e},expression:"defaultAustralia"}})],1)]}},{key:"header.Japan",fn:function(e){var n=e.header;return[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex"},[a("img",{staticClass:"rounded-full my-1 mx-1",attrs:{src:t.path+"flags/japan_min.png"}}),a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]),a("v-select",{attrs:{id:"sanctions-Japan",items:["All","✅ Sanctioned","❌ Not Sanctioned"],label:"All",dense:"","return-object":""},model:{value:t.defaultJapan,callback:function(e){t.defaultJapan=e},expression:"defaultJapan"}})],1)]}},{key:"header.Type",fn:function(e){var n=e.header;return[a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]}},{key:"header.SanctionList",fn:function(e){var n=e.header;return[a("span",{staticClass:"font-bold text-lg main-color"},[t._v(t._s(n.text))])]}},{key:"item.entity_individual",fn:function(e){var n=e.item;return[a("div",{staticClass:"text-lg col-entity",domProps:{innerHTML:t._s(n.entity_individual)}})]}},{key:"item.US",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.US)}})]}},{key:"item.UK",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.UK)}})]}},{key:"item.EU",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.EU)}})]}},{key:"item.Canada",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.Canada)}})]}},{key:"item.Switzerland",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.Switzerland)}})]}},{key:"item.Australia",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.Australia)}})]}},{key:"item.Japan",fn:function(e){var n=e.item;return[a("div",{staticClass:"flex justify-center col-generic",domProps:{innerHTML:t._s(n.Japan)}})]}},{key:"item.Type",fn:function(e){var n=e.item;return[a("span",{staticClass:"text-lg font-bold px-2 py-1 text-white rounded-lg text-md col-type",style:{"background-color":t.colMap[n.Type]},domProps:{innerHTML:t._s(n.Type)}})]}},{key:"item.SanctionList",fn:function(e){var n=e.item;return[a("div",{staticClass:"col-sanction-list",domProps:{innerHTML:t._s(n.SanctionList)}})]}}])})],1)])},f=[],p=a("b85c"),h=(a("caad"),a("2532"),a("4e827"),a("ac1f"),a("841c"),a("25f0"),a("5319"),a("1209")),v="#E74C3C",m="#2ECC71",y=32,g='<svg data-v-sign="cross" xmlns="http://www.w3.org/2000/svg" width='.concat(y," height=").concat(y,' fill="').concat(v,'" class="bi bi-x-circle" viewBox="-2 -2 20 20">\n  <path stroke="').concat(v,'" stroke-width="1.5" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n</svg>'),b='<svg data-v-sign="check" xmlns="http://www.w3.org/2000/svg" width='.concat(y," height=").concat(y,' fill="').concat(m,'" class="bi bi-check-circle" viewBox="-2 -2 20 20">\n  <path stroke="').concat(m,'" stroke-width="1.5" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>\n</svg>'),x={props:{path:{type:String},showLoader:{type:Boolean,default:!0},entList:{type:Array,default:function(){return[]}},rows:{type:Array,default:function(){return[{entity_individual:"",US:"",UK:"",EU:"",Canada:"",Switzerland:"",Australia:"",Japan:"",Type:"",SanctionList:""}]}},colMap:{type:Object}},computed:{entListFiltered:function(){var t=this,e=this.entList.filter((function(e){return t.selectedVals.includes(e.type)})),a=e.map((function(t){return t.label}));return a.sort((function(t,e){return t.localeCompare(e)})),a},searchLabel:function(){return"Search"},checkInner:function(){return b},crossInner:function(){return g}},methods:{displayHeaders:function(){var t=this,e=[],a=["entity_individual","SanctionList","Type"];return this.activeColumns.forEach((function(t){return a.push(t)})),this.headers.forEach((function(n){-1!=a.indexOf(n.value)&&e.push(n),t.sanctionFiltersChange("All",n.value)})),this.defaultUS="All",this.defaultUK="All",this.defaultEU="All",this.defaultCanada="All",this.defaultSwitzerland="All",this.defaultAustralia="All",this.defaultJapan="All",e},resetSearch:function(){this.search=""},animation:function(){Object(h["a"])({targets:"tr",opacity:0,duration:1,delay:1,complete:function(){Object(h["a"])({targets:"tr",opacity:1,duration:300,delay:function(t,e){return 50*e}})}})},searchFunc:function(t,e){return null!=t&&null!=e&&"string"===typeof t&&-1!==t.toString().toLowerCase().indexOf(e.toLowerCase())},toggle:function(t){this.selectedVals.includes(t.target.innerText)?this.selectedVals=this.selectedVals.filter((function(e){return e!==t.target.innerText})):this.selectedVals.push(t.target.innerText),"Any"!=t.target.innerText&&(this.selectedVals=this.selectedVals.filter((function(t){return"Any"!==t}))),"Any"==t.target.innerText&&(this.selectedVals=["Individual","Entity","Vessel","Aircraft","Any"])},sanctionFiltersChange:function(t,e){var a=e,n=t;this.colDict[a]="✅ Sanctioned"==n?["check"]:"❌ Not Sanctioned"==n?["cross"]:["check","cross"]},vuetifyUpdate:function(){var t=document.getElementsByClassName("mdi-menu-down"),e=t[0];e.classList.replace("mdi-menu-down","mdi-magnify"),e.style.display="none",e.style.color="rgba(0,0,0,0)";var a,n=document.getElementsByClassName("mdi-chevron-left"),i=Object(p["a"])(n);try{for(i.s();!(a=i.n()).done;){var s=a.value;s.classList.replace("mdi-chevron-left","mdi-chevron-left-circle"),s.style.color="#05a8e8"}}catch(B){i.e(B)}finally{i.f()}var l,r=document.getElementsByClassName("mdi-chevron-right"),o=Object(p["a"])(r);try{for(o.s();!(l=o.n()).done;){var c=l.value;c.classList.replace("mdi-chevron-right","mdi-chevron-right-circle"),c.style.color="#05a8e8"}}catch(B){o.e(B)}finally{o.f()}var d,u=document.getElementsByClassName(".primary--text"),f=Object(p["a"])(u);try{for(f.s();!(d=f.n()).done;){var h=d.value;h.style.color="#05a8e8 !important"}}catch(B){f.e(B)}finally{f.f()}var v,m=document.getElementsByClassName(".v-application"),y=Object(p["a"])(m);try{for(y.s();!(v=y.n()).done;){var g=v.value;g.style.color="#05a8e8 !important"}}catch(B){y.e(B)}finally{y.f()}var b,x=document.getElementsByClassName("v-text-field__details"),C=Object(p["a"])(x);try{for(C.s();!(b=C.n()).done;){var w=b.value;w.style.display="none"}}catch(B){C.e(B)}finally{C.f()}var S=document.getElementsByClassName("v-label");S[0].style.color="#05a8e8";var A,_=document.getElementsByTagName("fieldset"),U=Object(p["a"])(_);try{for(U.s();!(A=U.n()).done;){var k=A.value;k.style.border="1px solid purple !important",k.style["border-radius"]="3px !important"}}catch(B){U.e(B)}finally{U.f()}}},mounted:function(){var t=this;this.vuetifyUpdate(),document.querySelectorAll(".mdi-chevron-right-circle").forEach((function(e){e.addEventListener("click",(function(){t.animation()}))})),document.querySelectorAll(".mdi-chevron-left-circle").forEach((function(e){e.addEventListener("click",(function(){t.animation()}))}))},watch:{defaultUS:function(t){this.sanctionFiltersChange(t,"US")},defaultUK:function(t){this.sanctionFiltersChange(t,"UK")},defaultEU:function(t){this.sanctionFiltersChange(t,"EU")},defaultCanada:function(t){this.sanctionFiltersChange(t,"Canada")},defaultSwitzerland:function(t){this.sanctionFiltersChange(t,"Switzerland")},defaultAustralia:function(t){this.sanctionFiltersChange(t,"Australia")},defaultJapan:function(t){this.sanctionFiltersChange(t,"Japan")}},data:function(){var t=this,e="",a="",n=[{text:"Entity/Individual",align:"start",sortable:!1,value:"entity_individual"},{text:"US",value:"US",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.US.includes(i.dataset.vSign))return e}},{text:"UK",value:"UK",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.UK.includes(i.dataset.vSign))return e}},{text:"EU",value:"EU",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.EU.includes(i.dataset.vSign))return e}},{text:"CA",value:"Canada",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.Canada.includes(i.dataset.vSign))return e}},{text:"SW",value:"Switzerland",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.Switzerland.includes(i.dataset.vSign))return e}},{text:"AU",value:"Australia",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.Australia.includes(i.dataset.vSign))return e}},{text:"JP",value:"Japan",align:"center",sortable:!1,filter:function(e){var a=document.createRange(),n=a.createContextualFragment(e),i=n.firstChild;if(null!=i&&t.colDict.Japan.includes(i.dataset.vSign))return e}},{text:"Type",sortable:!1,value:"Type",filter:function(e){return!t.selectedVals||"ANY TYPE"==t.selectedVals||t.selectedVals.includes(e)}},{text:"Sanctions Lists/Programs",value:"SanctionList",align:"left",sortable:!1}],i=["Entity","Individual","Vessel","Aircraft","ANY TYPE"],s=["Individual"],l=[{id:"btn-individual",label:"Individual",color:this.colMap["Individual"]},{id:"btn-entity",label:"Entity",color:this.colMap["Entity"]},{id:"btn-vessel",label:"Vessel",color:this.colMap["Vessel"]},{id:"btn-aircraft",label:"Aircraft",color:this.colMap["Aircraft"]},{id:"btn-any",label:"Any",color:this.colMap["Any"]}],r={US:["check","cross"],UK:["check","cross"],EU:["check","cross"],Canada:["check","cross"],Switzerland:["check","cross"],Australia:["check","cross"],Japan:["check","cross"]},o=["US","UK","EU","Canada","Switzerland","Australia","Japan"],c=["US","UK","EU","Canada","Switzerland","Australia","Japan"],d="All",u="All",f="All",p="All",h="All",v="All",m="All";return{info:a,headers:n,search:e,selectors:i,selectedVals:s,btns:l,colDict:r,countries:o,activeColumns:c,defaultUS:d,defaultUK:u,defaultEU:f,defaultCanada:p,defaultSwitzerland:h,defaultAustralia:v,defaultJapan:m}}},C=x,w=(a("b201"),a("2877")),S=a("6544"),A=a.n(S),_=a("c6a6"),U=a("8fea"),k=a("b974"),B=Object(w["a"])(C,u,f,!1,null,null,null),E=B.exports;A()(B,{VAutocomplete:_["a"],VDataTable:U["a"],VSelect:k["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid sm:grid-cols-5 sm:p-8 p-2 gap-4 items-stretch text-center"},[a("TotalSanctions",{attrs:{totalSanctions:t.totalSanctions,path:t.path}}),t._l(t.donutObj,(function(e){return a("div",{key:e.id},[a("Donut",{attrs:{color:e.color,label:e.label,labelPlural:e.labelPlural,id:e.id,count:e.count,totalSanctions:t.totalSanctions,sanctionsCountByType:t.sanctionsCountByType,dataBars:e.dataBars,updateBars:t.updateBars}})],1)}))],2)},L=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-md w-full h-full"},[a("Tooltip",{attrs:{title:t.labelPlural,display:t.display,transX:t.transX,transY:t.transY,widthBars:t.widthBars,heightBars:t.heightBars,dataBars:t.dataBars,updateBars:t.updateBars,color:t.color,triggerTransition:t.triggerTransition}}),a("div",{staticClass:"p-4 flex "},[a("div",{staticClass:"relative"},[a("svg",{staticClass:"mx-auto",attrs:{width:t.width,height:t.height,id:t.id}}),a("div",{staticClass:"font-bold text-lg container-fig"},[t._v(" "+t._s(t.formattedPercentage)+" ")])]),a("div",[a("div",{staticClass:"font-bold px-2 text-2xl text-left"},[t._v(t._s(t.sanctionsCountByType[t.label]))]),a("div",{staticClass:"text-left font-bold p-2 text-lg",style:{color:this.color}},[t._v(t._s(t.labelPlural))])])])],1)},O=[],z=(a("b680"),a("a15b"),a("898b")),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-2 rounded-lg shadow-md bg-white absolute z-50 top-0 left-0",style:{display:t.display?"inherit":"none",transform:"translate("+t.transX+"px,"+t.transY+"px)",border:"2px solid "+t.color}},[a("div",{staticClass:"text-center text-lg font-bold pb-2",style:{"border-bottom":"0px solid "+t.color}},[t._v("Sanctioned "),a("span",{staticClass:"uppercase",style:{color:this.color}},[t._v(t._s(t.title))]),t._v(" By Countries")]),a("div",{attrs:{id:"bars-svg-"+t.title}})])},M=[],P={props:["title","display","triggerTransition","transX","transY","widthBars","heightBars","dataBars","updateBars","color"],methods:{drawBars:function(){var t=this;z["h"]("#bars-svg-".concat(this.title)).html("");for(var e=[],a=0,n=Object.entries(this.dataBars);a<n.length;a++){var i=Object(l["a"])(n[a],2),s=i[0],r=i[1];e.push({country:s,value:r})}var o=this.widthBars,c=this.heightBars,d=20,u=[0,z["d"](e,(function(t){return t.value}))],f=z["c"](e,(function(t){var e=Object(l["a"])(t,1),a=e[0];return-a.value}),(function(t){return t.country})),p=.4,h="Sanctions →",v=z["g"](u,[d,o-d]),m=z["f"](f,[d,c-d]).padding(p),y=z["b"](m).tickSize(0),g=z["h"]("#bars-svg-".concat(this.title)).append("svg").attr("style","border:2px solid black;").attr("width",o).attr("height",c).attr("viewBox",[0,0,o,c]).attr("style","max-width: 100%; height: auto; height: intrinsic; overflow:visible;");return g.append("g").attr("transform","translate(0,".concat(d,")")).call((function(t){return t.selectAll(".tick line").clone().attr("y2",c-2*d).attr("stroke-opacity",.1)})).call((function(t){return t.append("text").attr("x",o-d).attr("y",4).attr("fill","currentColor").attr("text-anchor","end").text(h)})),g.append("g").attr("fill",this.color).selectAll("rect").data(e).join("rect").attr("rx","2px").attr("id","bar-".concat(this.title)).attr("ry","2px").attr("stroke-linecap","round").attr("x",v(0)).attr("y",(function(t){return m(t.country)})).attr("width",0).attr("height",m.bandwidth()).transition().delay(0).duration(1800).attr("width",(function(t){return v(t.value)-v(0)})),g.append("g").attr("transform","translate(".concat(d,",0)")).call(y).call((function(t){return t.selectAll(".tick text").attr("text-anchor","start").attr("font-weight","bold").attr("font-size",18).attr("transform","translate(2,-30)")})).call((function(t){return t.select(".domain").remove()})),g.append("g").attr("fill",(function(){return t.color,"#ffffff"})).attr("text-anchor","end").attr("font-family","sans-serif").attr("font-weight","bold").attr("font-size",15).selectAll("text").data(e).join("text").attr("x",(function(t,a){return void 0!==e[a]?v(e[a].value):""})).attr("y",(function(t,a){return void 0!==e[a]?m(e[a].country)+m.bandwidth()/2:""})).attr("dy","0.35em").attr("dx",-4).attr("opacity",(function(t){return 0==t.value?0:1})).text((function(t){return t.value})),g}},watch:{triggerTransition:function(t,e){console.log(t,e),e||this.drawBars()}}},J=P,K=Object(w["a"])(J,V,M,!1,null,"008aa936",null),F=K.exports,D={name:"Donut",components:{Tooltip:F},props:["color","label","labelPlural","id","count","totalSanctions","sanctionsCountByType","dataBars","updateBars"],computed:{formattedPercentage:function(){var t=this.sanctionsCountByType[this.label]/this.totalSanctions*100;return t=0==this.totalSanctions?"":t.toFixed(1)+"%",t}},methods:{donutDraw:function(){var t=[{val:this.sanctionsCountByType[this.label],opacity:1},{val:this.totalSanctions-this.sanctionsCountByType[this.label],opacity:.2}],e=this,a=z["h"]("#".concat(this.id)),n=this.width,i=this.height,s=5,l=z["e"]().value((function(t){return t.val})),r=z["a"]().innerRadius(n/3-s).outerRadius(n/2-s);function o(){e.triggerTransition=!0}function c(t){z["i"]('[data-graph-type="'.concat(this.dataset["graphType"],'"]')).attr("stroke-opacity",1),e.display=!0,e.transY=t.clientY+20,t.clientX<window.innerWidth/2?e.transX=t.clientX+20:e.transX=t.clientX-e.widthBars-40}function d(){z["i"](".svg-arc").attr("stroke-opacity",0),e.triggerTransition=!1,e.display=!1,e.transX=0,e.transY=0}a.attr("width",n).attr("height",i).attr("viewBox",[-n/2,-i/2,n,i]).attr("style","max-width: 100%; height: auto; height: intrinsic;"),a.append("g").selectAll("path").data(l(t)).join("path").attr("stroke","#000").attr("stroke-width",2).attr("stroke-opacity",0).attr("fill",this.color).attr("data-graph-type","graph-".concat(this.id)).attr("class","svg-arc cursor-pointer").attr("opacity",(function(e,a){return t[a].opacity})).attr("d",r).on("mousemove",c).on("mouseleave",d).on("mouseenter",o)}},mounted:function(){this.donutDraw()},watch:{count:function(){this.donutDraw()}},data:function(){var t=125,e=125,a=350,n=500,i=!1,s=0,l=0,r=!1;return{width:t,height:e,display:i,transX:s,transY:l,widthBars:a,heightBars:n,triggerTransition:r}}},N=D,I=(a("54e8"),Object(w["a"])(N,j,O,!1,null,"83b9a312",null)),H=I.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"shadow-md p-4 flex w-full h-full items-center justify-around"},[a("div",[a("img",{attrs:{src:t.path+"avatar.png"}})]),a("div",{staticClass:"h-full"},[a("div",{staticClass:"font-bold px-2 text-2xl text-left"},[t._v(t._s(t.totalSanctions))]),a("div",{staticClass:"text-left font-bold p-2 text-lg"},[t._v("Total Sanctions")])])])])},Y=[],X={props:["totalSanctions","path"]},$=X,W=(a("fb31"),Object(w["a"])($,R,Y,!1,null,"a40d9aa0",null)),q=W.exports,G={components:{Donut:H,TotalSanctions:q},props:["donutObj","totalEntries","totalSanctions","sanctionsCountByType","path","dataBars","updateBars"]},Z=G,Q=Object(w["a"])(Z,T,L,!1,null,null,null),tt=Q.exports,et="#E74C3C",at="#2ECC71",nt=32,it='<svg data-v-sign="cross" xmlns="http://www.w3.org/2000/svg" width='.concat(nt," height=").concat(nt,' fill="').concat(et,'" class="bi bi-x-circle" viewBox="-2 -2 20 20">\n  <path stroke="').concat(et,'" stroke-width="1.5" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n</svg>'),st='<svg data-v-sign="check" xmlns="http://www.w3.org/2000/svg" width='.concat(nt," height=").concat(nt,' fill="').concat(at,'" class="bi bi-check-circle" viewBox="-2 -2 20 20">\n  <path stroke="').concat(at,'" stroke-width="1.5" d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>\n</svg>'),lt={name:"App",metaInfo:{meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}],title:"Russian Sanctions"},components:{Database:E,GraphBlock:tt},methods:{load:function(){var t=this;o.a.get("https://docs.google.com/spreadsheets/d/1tledta6ChBKWBr-LUtAI3O9FY4H24hpZpb86tTNAq4w/export?format=csv&gid=0",{responseType:"blob"}).then((function(e){e.data.text().then((function(e){d()().fromString(e).then((function(e){e.forEach((function(e){for(var a=0;a<t.countryList.length;a++)"✅"==e[t.countryList[a]]&&(t.sanctionsCountByTypeByCountry[e.Type][t.countryList[a]]+=1);for(var n=0,i=Object.entries(e);n<i.length;n++){var s=Object(l["a"])(i[n],2),r=(s[0],s[1]);"✅"==r&&(t.totalSanctions+=1,t.sanctionsCountByType[e.Type]+=1)}e.entity_individual=e["Sanctioned Entity/Individual"],delete e["Sanctioned Entity/Individual"],e.Australia="✅"==e.Australia?st:it,e.Canada="✅"==e.Canada?st:it,e.EU="✅"==e.EU?st:it,e.Switzerland="✅"==e.Switzerland?st:it,e.UK="✅"==e.UK?st:it,e.US="✅"==e.US?st:it,e.Japan="✅"==e.Japan?st:it,"Entity"==e.Type?e.Type="Entity":"Aircraft"==e.Type?e.Type="Aircraft":"Vessel"==e.Type?e.Type="Vessel":e.Type="Individual",e.SanctionList=""===e["Sanctions Lists"]?"<i>List not available</i>":e["Sanctions Lists"]})),t.totalEntries=e.length,t.entList=e.map((function(t){var e={label:t.entity_individual,type:t.Type};return e}));for(var a=e.map((function(t){var e=t.Type;return e})),n=function(e){var n=a.filter((function(a){return a===t.donutObj[e].label}));t.donutObj[e].count=n.length},i=0;i<t.donutObj.length;i++)n(i);t.rows=e,t.showLoader=!1,t.updateBars=!0}))}))}))}},data:function(){var t="2022.12.7-Russia_Sanctions_Database_Demo/",e=["US","UK","EU","Switzerland","Canada","Australia","Japan"],a=!1,n=[],i=!0,s=[{entity_individual:"",US:"",UK:"",EU:"",Canada:"",Switzerland:"",Australia:"",Japan:"",Type:"",SanctionList:""}],l={Individual:"#7eba37",Entity:"#05a8e8",Aircraft:"#235a9d ",Vessel:"#ef1277",Any:"#f959b5"},r={Individual:{US:0,UK:0,EU:0,Switzerland:0,Australia:0,Canada:0,Japan:0},Entity:{US:0,UK:0,EU:0,Switzerland:0,Australia:0,Canada:0,Japan:0},Vessel:{US:0,UK:0,EU:0,Switzerland:0,Australia:0,Canada:0,Japan:0},Aircraft:{US:0,UK:0,EU:0,Switzerland:0,Australia:0,Canada:0,Japan:0}},o=[{label:"Individual",labelPlural:"Individuals",id:"individual",color:l["Individual"],count:0,dataBars:r["Individual"]},{label:"Entity",labelPlural:"Entities",id:"entity",color:l["Entity"],count:0,dataBars:r["Entity"]},{label:"Vessel",labelPlural:"Vessels",id:"vessel",color:l["Vessel"],count:0,dataBars:r["Vessel"]},{label:"Aircraft",labelPlural:"Aircraft",id:"aircraft",color:l["Aircraft"],count:0,dataBars:r["Aircraft"]}],c=1,d=0,u={Individual:0,Entity:0,Vessel:0,Aircraft:0};return{countryList:e,path:t,rows:s,showLoader:i,entList:n,donutObj:o,colMap:l,totalEntries:c,totalSanctions:d,sanctionsCountByType:u,sanctionsCountByTypeByCountry:r,updateBars:a}},created:function(){this.load()},mounted:function(){var t=document.createElement("script");t.setAttribute("src","./iframe/iframeResizer.contentWindow.min.js"),document.body.appendChild(t)}},rt=lt,ot=(a("034f"),a("7496")),ct=a("f6c4"),dt=Object(w["a"])(rt,i,s,!1,null,null,null),ut=dt.exports;A()(dt,{VApp:ot["a"],VMain:ct["a"]});var ft=a("f309");n["a"].use(ft["a"]);var pt=new ft["a"]({theme:{themes:{light:{primary:"#333"}}}}),ht=(a("db43"),a("f917"));n["a"].config.productionTip=!1,n["a"].use(ht["a"]),new n["a"]({vuetify:pt,render:function(t){return t(ut)}}).$mount("#app")},"85ec":function(t,e,a){},a44f:function(t,e,a){},adf8:function(t,e,a){},b201:function(t,e,a){"use strict";a("c237")},c237:function(t,e,a){},db43:function(t,e,a){},fb31:function(t,e,a){"use strict";a("a44f")}});
//# sourceMappingURL=app.c9a8cdf9.js.map