(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var n=r(8947),o=r(5697),i=r.n(o),a=r(7294);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var m=!1;try{m=!0}catch(O){}function b(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function v(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,c=r.className,s=r.title,d=b(o),y=g("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,c=e.listItem,s=e.flip,l=e.size,f=e.rotation,p=e.pull,d=(u(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),"undefined"!==typeof l&&null!==l),u(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),u(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(c.split(" ")))),O=g("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),w=g("mask",b(i)),j=(0,n.qv)(d,l({},y,{},O,{},w,{symbol:a,title:s}));if(!j)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var k=j.abstract,S={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(S[e]=r[e])})),h(k[0],S)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),a=n.style,c=void 0===a?{}:a,u=f(n,["style"]);return i.attrs.style=l({},i.attrs.style,{},c),t.apply(void 0,[r.tag,l({},i.attrs,{},u)].concat(p(o)))}.bind(null,a.createElement)},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4470:function(e,t,r){!function(e){"use strict";var t=/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,r=/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,n=/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,o=[/^janv/i,/^f\xe9vr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^ao\xfbt/i,/^sept/i,/^oct/i,/^nov/i,/^d\xe9c/i];e.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsRegex:n,monthsShortRegex:n,monthsStrictRegex:t,monthsShortStrictRegex:r,monthsParse:o,longMonthsParse:o,shortMonthsParse:o,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(r(381))},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),u=r(387),s=r(7190);var l={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),i=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),p=i.href,d=i.as,y=e.children,m=e.replace,b=e.shallow,g=e.scroll,v=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var h=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,O=o(s.useIntersection({rootMargin:"200px"}),2),w=O[0],j=O[1],k=a.default.useCallback((function(e){w(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,w]);a.default.useEffect((function(){var e=j&&r&&c.isLocalURL(p),t="undefined"!==typeof v?v:n&&n.locale,o=l[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(n,p,d,{locale:t})}),[d,p,j,v,r,n]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:a}))}(e,n,p,d,m,b,g,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&f(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof v?v:n&&n.locale,_=n&&n.isLocaleDomain&&c.getDomainLocale(d,P,n&&n.locales,n&&n.domainLocales);S.href=_||c.addBasePath(c.addLocale(d,P,n&&n.defaultLocale))}return a.default.cloneElement(t,S)};t.default=p},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,l=i.useRef(),f=o(i.useState(!1),2),p=f[0],d=f[1],y=o(i.useState(t?t.current:null),2),m=y[0],b=y[1],g=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||p||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),s.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:m,rootMargin:r}))}),[n,m,r,p]);return i.useEffect((function(){if(!c&&!p){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),i.useEffect((function(){t&&b(t.current)}),[t]),[g,p]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map,s=[]},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},4865:function(e,t,r){var n,o;n=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(e,t,r){return e<t?t:e>r?r:e}function n(e){return 100*(-1+e)}function o(e,r,o){var i;return(i="translate3d"===t.positionUsing?{transform:"translate3d("+n(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+n(e)+"%,0)"}:{"margin-left":n(e)+"%"}).transition="all "+r+"ms "+o,i}e.configure=function(e){var r,n;for(r in e)void 0!==(n=e[r])&&e.hasOwnProperty(r)&&(t[r]=n);return this},e.status=null,e.set=function(n){var c=e.isStarted();n=r(n,t.minimum,1),e.status=1===n?null:n;var u=e.render(!c),s=u.querySelector(t.barSelector),l=t.speed,f=t.easing;return u.offsetWidth,i((function(r){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),a(s,o(n,l,f)),1===n?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){a(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){e.remove(),r()}),l)}),l)):setTimeout(r,l)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var r=function(){setTimeout((function(){e.status&&(e.trickle(),r())}),t.trickleSpeed)};return t.trickle&&r(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var n=e.status;return n?("number"!==typeof t&&(t=(1-n)*r(Math.random()*n,.1,.95)),n=r(n+t,0,.994),e.set(n)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,r=0;e.promise=function(n){return n&&"resolved"!==n.state()?(0===r&&e.start(),t++,r++,n.always((function(){0===--r?(t=0,e.done()):e.set((t-r)/t)})),this):this}}(),e.render=function(r){if(e.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var i,c=o.querySelector(t.barSelector),s=r?"-100":n(e.status||0),l=document.querySelector(t.parent);return a(c,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),t.showSpinner||(i=o.querySelector(t.spinnerSelector))&&f(i),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(o),o},e.remove=function(){s(document.documentElement,"nprogress-busy"),s(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var r=e.shift();r&&r(t)}return function(r){e.push(r),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function r(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function n(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+i)in r)return n;return t}function o(e){return e=r(e),t[e]||(t[e]=n(e))}function i(e,t,r){t=o(t),e.style[t]=r}return function(e,t){var r,n,o=arguments;if(2==o.length)for(r in t)void 0!==(n=t[r])&&t.hasOwnProperty(r)&&i(e,r,n);else i(e,o[1],o[2])}}();function c(e,t){return("string"==typeof e?e:l(e)).indexOf(" "+t+" ")>=0}function u(e,t){var r=l(e),n=r+t;c(r,t)||(e.className=n.substring(1))}function s(e,t){var r,n=l(e);c(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function l(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0===(o="function"===typeof n?n.call(t,r,t,e):n)||(e.exports=o)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},542:function(e,t,r){"use strict";r.d(t,{ZP:function(){return le}});var n={};r.r(n),r.d(n,{addTrackers:function(){return K},default:function(){return ie},event:function(){return ee},exception:function(){return te},ga:function(){return G},initialize:function(){return F},modalview:function(){return Q},outboundLink:function(){return ne},pageview:function(){return Z},plugin:function(){return re},send:function(){return V},set:function(){return $},testModeAPI:function(){return oe},timing:function(){return X}});var o=r(7294),i=r(5697),a=r.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,r,n,i=m(a);function a(){var e;p(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(g(e=i.call.apply(i,[this].concat(r))),"handleClick",(function(t){var r=e.props,n=r.target,o=r.eventLabel,i=r.to,c=r.onClick,u=r.trackerNames,s={label:o},l=n!==O,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);l&&f?(t.preventDefault(),a.trackLink(s,(function(){window.location.href=i}),u)):a.trackLink(s,(function(){}),u),c&&c(t)})),e}return t=a,(r=[{key:"render",value:function(){var e=this.props,t=e.to,r=e.target,n=l(l({},f(e,["to","target"])),{},{target:r,href:t,onClick:this.handleClick});return r===O&&(n.rel="".concat(n.rel?n.rel:""," noopener noreferrer").trim()),delete n.eventLabel,delete n.trackerNames,o.createElement("a",n)}}])&&d(t.prototype,r),n&&d(t,n),a}(o.Component);h(w,"trackLink",(function(){c("ga tracking not enabled")})),w.propTypes={eventLabel:a().string.isRequired,target:a().string,to:a().string,onClick:a().func,trackerNames:a().arrayOf(a().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function j(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function P(e){return k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(S)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&r.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var _=!1;function A(e){console.info("[react-ga]",e)}var x=[],E={calls:x,ga:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];x.push([].concat(t))},resetCalls:function(){x.length=0}};function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){return D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function M(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N="undefined"===typeof window||"undefined"===typeof document,R=!1,q=!0,U=!1,Y=!0,z=!0,W=function(){var e;return U?E.ga.apply(E,arguments):!N&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function H(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e||"";return(arguments.length>1?arguments[1]:void 0)&&(r=P(e)),t&&(r=j(r)),r}(e,q,z)}function B(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r[0];"string"===typeof o?(!Y&&Array.isArray(e)||W.apply(void 0,r),Array.isArray(e)&&e.forEach((function(e){W.apply(void 0,M(["".concat(e,".").concat(o)].concat(r.slice(1))))}))):c("ga command must be a string")}function J(e,t){e?t&&(t.debug&&!0===t.debug&&(R=!0),!1===t.titleCase&&(q=!1),!1===t.redactEmail&&(z=!1),t.useExistingGa)||(t&&t.gaOptions?W("create",e,t.gaOptions):W("create",e,"auto")):c("gaTrackingID is required in initialize()")}function K(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===D(e)?J(e.trackingId,e):c("All configs must be an object")})):J(e,t),!0}function F(e,t){if(t&&!0===t.testMode)U=!0;else{if(N)return;t&&!0===t.standardImplementation||function(e){if(!_){_=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var r,n,o,i,a,c,u,s=e&&e.onerror;r=window,n=document,o="script",i=t,a="ga",r.GoogleAnalyticsObject=a,r.ga=r.ga||function(){(r.ga.q=r.ga.q||[]).push(arguments)},r.ga.l=1*new Date,c=n.createElement(o),u=n.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=s,u.parentNode.insertBefore(c,u)}}(t)}Y=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,K(e,t)}function G(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length>0&&(W.apply(void 0,t),R&&(A("called ga('arguments');"),A("with arguments: ".concat(JSON.stringify(t))))),window.ga}function $(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),B(t,"set",e),R&&(A("called ga('set', fieldsObject);"),A("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function V(e,t){B(t,"send",e),R&&(A("called ga('send', fieldObject);"),A("with fieldObject: ".concat(JSON.stringify(e))),A("with trackers: ".concat(JSON.stringify(t))))}function Z(e,t,r){if(e){var n=k(e);if(""!==n){var o={};if(r&&(o.title=r),B(t,"send",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({hitType:"pageview",page:n},o)),R){A("called ga('send', 'pageview', path);");var i="";r&&(i=" and title: ".concat(r)),A("with path: ".concat(n).concat(i))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function Q(e,t){if(e){var r,n="/"===(r=k(e)).substring(0,1)?r.substring(1):r;if(""!==n){var o="/modal/".concat(n);B(t,"send","pageview",o),R&&(A("called ga('send', 'pageview', path);"),A("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,r=e.variable,n=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&r&&"number"===typeof n){var a={hitType:"timing",timingCategory:H(t),timingVar:H(r),timingValue:n};o&&(a.timingLabel=H(o)),V(a,i)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,r=e.action,n=e.label,o=e.value,i=e.nonInteraction,a=e.transport,u=T(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&r){var l={hitType:"event",eventCategory:H(t),eventAction:H(r)};n&&(l.eventLabel=H(n)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?c("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=u[e]})),V(l,s)}else c("args.category AND args.action are required in event()")}function te(e,t){var r=e.description,n=e.fatal,o={hitType:"exception"};r&&(o.exDescription=H(r)),"undefined"!==typeof n&&("boolean"!==typeof n?c("`args.fatal` must be a boolean."):o.exFatal=n),V(o,t)}var re={require:function(e,t,r){if(e){var n=k(e);if(""!==n){var o=r?"".concat(r,".require"):"require";if(t){if("object"!==D(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),G(o,n,t),R&&A("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else G(o,n),R&&A("called ga('require', '".concat(n,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var r,n,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?r=i[0]:(n=i[0],r=i[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);r=r||null,n&&r?(G(u,n,r),R&&(A("called ga('".concat(u,"');")),A('actionType: "'.concat(n,'" with payload: ').concat(JSON.stringify(r))))):r?(G(u,r),R&&(A("called ga('".concat(u,"');")),A("with payload: ".concat(JSON.stringify(r))))):(G(u),R&&A("called ga('".concat(u,"');")))}}};function ne(e,t,r){if("function"===typeof t)if(e&&e.label){var n={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:H(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);n.hitCallback=function(){clearTimeout(i),o||t()},V(n,r)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var oe=E,ie={initialize:F,ga:G,set:$,send:V,pageview:Z,modalview:Q,timing:X,event:ee,exception:te,plugin:re,outboundLink:ne,testModeAPI:E};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}w.origTrackLink=w.trackLink,w.trackLink=ne;var se=w,le=ce(ce({},n),{},{OutboundLink:se})}}]);