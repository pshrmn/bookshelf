webpackJsonp([0],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=a(1),u=n(r),l=a(29),o=n(l),c=a(161),s=a(174),f=a(187),d=a(227),i=n(d),m=a(230),h=n(m),v=a(231),p=n(v);a(279);var E=function(e){var t=(0,c.combineReducers)(Object.assign({},i["default"])),a=(0,c.createStore)(t,e);o["default"].render(u["default"].createElement(s.Provider,{store:a},u["default"].createElement(f.HashRouter,null,u["default"].createElement(p["default"],null))),document.querySelector("main"))};(0,h["default"])("data/books.json").then(function(e){"string"==typeof e&&(e=JSON.parse(e)),E({books:e.books})})["catch"](function(e){console.error("Failed to load books: "+e)})},227:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(228),u=n(r);t["default"]={books:u["default"]}},228:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case l.ADD_BOOK:return[t.book].concat(r(e.slice()));default:return e}};var u=a(229),l=n(u)},229:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_BOOK="ADD_BOOK"},230:function(e,t){"use strict";function a(e){return new Promise(function(t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="json",n.onload=function(){200===n.status?t(n.response):a(Error("Failed to load books from url "+e))},n.onerror=function(){a(Error("Network error loading "+e))},n.send()})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),u=n(r),l=a(232),o=n(l),c=a(273),s=n(c),f=a(276),d=n(f);t["default"]=function(e){return u["default"].createElement("div",null,u["default"].createElement(s["default"],null),u["default"].createElement(o["default"],null),u["default"].createElement(d["default"],null))}},232:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),u=n(r),l=a(187),o=a(233),c=n(o),s=a(262),f=n(s),d=a(268),i=n(d),m=a(269),h=n(m),v=a(272),p=n(v);t["default"]=function(){return u["default"].createElement("div",{className:"main"},u["default"].createElement(l.Match,{pattern:"/",exactly:!0,component:c["default"]}),u["default"].createElement(l.Match,{pattern:"/genres",component:f["default"]}),u["default"].createElement(l.Match,{pattern:"/genre/:genre",component:i["default"]}),u["default"].createElement(l.Match,{pattern:"/authors",component:h["default"]}),u["default"].createElement(l.Match,{pattern:"/author/:author",component:p["default"]}))}},233:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.books;return l["default"].createElement("div",null,l["default"].createElement(s["default"],{books:t}),l["default"].createElement(d["default"],{books:t,addPath:"/add"}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),l=n(u),o=a(174),c=a(234),s=n(c),f=a(252),d=n(f);t["default"]=(0,o.connect)(function(e){return{books:e.books}})(r)},234:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.books;if(0===t.length)return null;var a=(0,d.genresByCount)(t);return a.length<=1?null:o["default"].createElement("div",{className:"bars"},o["default"].createElement("h2",null,"Books per Genre"),o["default"].createElement(f["default"],{data:a,getX:function(e){return e.genre},getY:function(e){return e.count}}))}function u(e){var t=e.books;return 0===t.length?null:o["default"].createElement("div",{className:"authors"},o["default"].createElement("h2",null,"Most Read Authors"),o["default"].createElement("ol",null,(0,d.mostPopularAuthors)(t).map(function(e,t){return o["default"].createElement("li",{key:t},o["default"].createElement(c.Link,{to:"/author/"+e.author},e.author))})))}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),o=n(l),c=a(187),s=a(235),f=n(s),d=a(249);a(244);a(250),t["default"]=function(e){var t=e.books;return o["default"].createElement("div",{className:"stats"},o["default"].createElement(r,{books:t}),o["default"].createElement(u,{books:t}))}},235:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.x,a=e.y,n=e.width,r=e.height,u=e.genre,l=e.count,o=f.genreMap[u];return c["default"].createElement("g",{className:"bar",transform:"translate("+t+", 0)"},c["default"].createElement("rect",{className:o.className,x:"0",y:a,width:n,height:r}),c["default"].createElement("text",{x:n/2,y:a-2},l))}function u(e){var t=e.values,a=e.scale,n=e.height,r=e.width,u=a.bandwidth()/2;return c["default"].createElement("g",{className:"axis x",transform:"translate(0,"+n+")"},c["default"].createElement("line",{x1:"0",x2:r}),c["default"].createElement("g",{className:"ticks"},t.map(function(e,t){return c["default"].createElement("g",{key:t,className:"tick",transform:"translate("+(a(e)+u)+",0)"},c["default"].createElement("line",{y2:"6",x2:"0"}),c["default"].createElement("text",{dy:"0.715em",y:"9",x:"0"},e))})))}function l(e){var t=e.scale,a=e.height;return c["default"].createElement("g",{className:"axis y"},c["default"].createElement("line",{y1:"0",y2:a}),c["default"].createElement("g",{className:"ticks"},t.ticks(5).map(function(e,a){return c["default"].createElement("g",{key:a,className:"tick",transform:"translate(0,"+t(e)+")"},c["default"].createElement("line",{x2:"-6",y2:"0"}),c["default"].createElement("text",{dx:"0.715em",y:"5",x:"-20"},e))})))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),c=n(o),s=a(236),f=a(244);a(245),t["default"]=c["default"].createClass({displayName:"OrdinalBarChart",getDefaultProps:function(){return{height:100,margin:{top:15,right:15,bottom:25,left:30}}},render:function(){var e=this.props,t=e.height,a=e.margin,n=e.data,o=e.getX,f=e.getY,d=60*n.length;if(0===n.length)return null;var i=n.reduce(function(e,t){var a=f(t);return a>e?a:e},0),m=(0,s.linear)().domain([0,i]).range([t,0]).nice(),h=(0,s.band)().domain(n.map(function(e){return o(e)})).range([0,d]).padding(.1),v=n.map(function(e,a){var n=h(o(e)),u=f(e),l=m(u),s=h.bandwidth();return c["default"].createElement(r,{key:a,x:n,y:l,width:s,height:t-l,genre:e.genre})});return c["default"].createElement("svg",{width:a.left+d+a.right,height:a.top+t+a.bottom},c["default"].createElement("g",{transform:"translate("+a.left+","+a.top+")"},c["default"].createElement(u,{values:n.map(function(e){return o(e)}),scale:h,height:t,width:d}),c["default"].createElement(l,{scale:m,height:t}),v))}})},244:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{name:"adventure",className:"adventure"},{name:"children's",className:"childrens"},{name:"fantasy",className:"fantasy"},{name:"historical",className:"historical"},{name:"mystery",className:"mystery"},{name:"non-fiction",className:"non-fiction"},{name:"poetry",className:"poetry"},{name:"sci-fi",className:"sci-fi"},{name:"thriller",className:"thriller"},{name:"drama",className:"drama"}];t["default"]=a;t.genreMap=a.reduce(function(e,t){return e[t.name]=t,e},{})},245:function(e,t){},249:function(e,t){"use strict";function a(e,t){return e.reduce(function(e,a){var n=a[t];return void 0!==e[n]?e[n]+=1:e[n]=1,e},{})}function n(e){var t=a(e,"genre");return Object.keys(t).map(function(e){return{genre:e,count:t[e]}})}function r(e){var t=a(e,"author");return Object.keys(t).map(function(e){return{author:e,count:t[e]}}).sort(function(e,t){return t.count-e.count}).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),t.genresByCount=n,t.mostPopularAuthors=r},250:function(e,t){},252:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.books;e.addPath;return o["default"].createElement("div",{className:"showcase"},o["default"].createElement("div",{className:"info"},t.length," Books",o["default"].createElement(i["default"],{books:t})),o["default"].createElement("div",{className:"books"},t.map(function(e,t){return o["default"].createElement(s["default"],u({key:t,index:t%10},e))})))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t["default"]=r;var l=a(1),o=n(l),c=(a(187),a(253)),s=n(c),f=a(254),d=(n(f),a(259)),i=n(d);a(260)},253:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.title,a=e.author,n=e.genre,r=f.genreMap[n];return l["default"].createElement("div",{className:"book",title:t},l["default"].createElement(s["default"],{classes:[r.className],title:t}),l["default"].createElement("div",{className:"author"},l["default"].createElement(o.Link,{to:{pathname:"/author/"+a}},a)))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u),o=a(187),c=a(254),s=n(c),f=a(244);a(257)},254:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.classes,a=void 0===t?[]:t,n=e.title,r=e.path,u=["cover"].concat(a),c=l["default"].createElement("div",{className:u.join(" ")},l["default"].createElement("div",{className:"title"},n));return void 0===r?c:l["default"].createElement(o.Link,{to:r},c)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u),o=a(187);a(255)},255:function(e,t){},257:function(e,t){},259:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.books,a=t.length;return l["default"].createElement("div",{className:"genre-bar"},(0,o.genresByCount)(t).map(function(e){var t=c.genreMap[e.genre],n=e.count/a;return l["default"].createElement("div",{key:t.name,className:["genre",t.className].join(" "),style:{flexGrow:n},title:Math.floor(100*n)+"% of books are "+t.name})}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u),o=a(249),c=a(244)},260:function(e,t){},262:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=i["default"].map(function(e,t){return l["default"].createElement("li",{key:t},l["default"].createElement(f["default"],{title:e.name,classes:[e.className],path:{pathname:"/genre/"+e.name}}))});return l["default"].createElement("div",null,h,l["default"].createElement("h1",null,"Genres"),l["default"].createElement("ul",{className:"genres"},t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u),o=(a(174),a(263)),c=n(o),s=a(254),f=n(s),d=a(244),i=n(d);a(266);var m=[{to:{pathname:"/"},title:"Home"}],h=l["default"].createElement(c["default"],{paths:m})},263:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return l["default"].createElement("div",{className:"breadcrumbs"},e.paths.map(function(e,t){return l["default"].createElement(o.Link,{key:t,to:e.to},e.title)}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u),o=a(187);a(264)},264:function(e,t){},266:function(e,t){},268:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.genre,a=e.books;return l["default"].createElement("div",{className:"genre-page"},v,l["default"].createElement("h1",null,t," Books"),l["default"].createElement(s["default"],{books:a}),l["default"].createElement(d["default"],{books:a,addPath:"/genre/"+t+"/add"}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),l=n(u),o=a(174),c=(a(187),a(234)),s=n(c),f=a(252),d=n(f),i=a(263),m=n(i),h=[{to:{pathname:"/"},title:"Home"},{to:{pathname:"/genres"},title:"Genres"}],v=l["default"].createElement(m["default"],{paths:h});t["default"]=(0,o.connect)(function(e,t){var a=t.params.genre;return{genre:a,books:e.books.filter(function(e){return e.genre===a})}})(r)},269:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.authors.map(function(e){var t=e.name,a=e.genre;return l["default"].createElement("li",{key:t},l["default"].createElement(d["default"],{title:t,classes:[a.className],path:{pathname:"/author/"+t}}))});return l["default"].createElement("div",null,h,l["default"].createElement("h1",null,"Authors"),l["default"].createElement("ul",{className:"authors"},t))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),l=n(u),o=a(174),c=(a(187),a(263)),s=n(c),f=a(254),d=n(f),i=a(244);a(270);var m=[{to:{pathname:"/"},title:"Home"}],h=l["default"].createElement(s["default"],{paths:m});r.propTypes={authors:l["default"].PropTypes.array.isRequired},t["default"]=(0,o.connect)(function(e){var t=e.books.reduce(function(e,t){var a=t.author;return e[a]?e[a].books+=1:e[a]={genre:i.genreMap[t.genre],books:1},e},{}),a=Object.keys(t).map(function(e){return{name:e,books:t[e].books,genre:t[e].genre}}).sort(function(e,t){return t.books-e.books});return{authors:a}})(r)},270:function(e,t){},272:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.author,a=e.books;return l["default"].createElement("div",null,m,l["default"].createElement("h1",null,t),l["default"].createElement(s["default"],{books:a,addPath:"/author/"+t+"/add"}))}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),l=n(u),o=a(174),c=a(252),s=n(c),f=a(263),d=n(f),i=[{to:{pathname:"/"},title:"Home"},{to:{pathname:"/authors"},title:"Authors"}],m=l["default"].createElement(d["default"],{paths:i});t["default"]=(0,o.connect)(function(e,t){var a=t.params.author;return{author:a,books:e.books.filter(function(e){return e.author===a})}})(r)},273:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),u=n(r),l=a(187),o=a(244),c=n(o);a(274);var s=c["default"].map(function(e){return u["default"].createElement("li",{key:e.name,className:e.className})});t["default"]=u["default"].createClass({displayName:"TopBar",shouldComponentUpdate:function(e,t){return!1},render:function(){return u["default"].createElement("header",null,u["default"].createElement("ul",null,s),u["default"].createElement("div",{className:"title"},u["default"].createElement(l.Link,{to:"/",title:"home"},"Bookshelf")),u["default"].createElement("nav",null,u["default"].createElement(l.Link,{to:"/"},"Home"),u["default"].createElement(l.Link,{to:"/genres"},"Genres"),u["default"].createElement(l.Link,{to:"/authors"},"Authors")),u["default"].createElement("ul",null,s))}})},274:function(e,t){},276:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return l["default"].createElement("footer",null,"made by ",l["default"].createElement("a",{href:"http://www.pshrmn.com"},"pshrmn.com"))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var u=a(1),l=n(u);a(277)},277:function(e,t){},279:function(e,t){}});