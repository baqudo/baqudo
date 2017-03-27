/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _sayHello = __webpack_require__(1);\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n\nvar links, updatestate, contain, tabs, tabsWrap, nav, changeTabs, changeLinks;\n\ncontain = document.querySelector('#contain');\ntabsWrap = document.querySelector('.tabs');\ntabs = document.querySelectorAll('.tab');\nnav = document.querySelector('.nav');\nconsole.log(nav);\nconsole.log(tabs);\nconsole.log(tabsWrap);\nconsole.log(contain);\n\nlinks = {\n\ttab1: \"tab -1- is open\",\n\ttab2: \"tab -2- is open\",\n\ttab3: \"tab -3- is open\",\n\ttab4: \"tab -4- is open\"\n};\n\n// changeTabs = function(e){\n// \tif (e.target) {\n// \t\treturn;\n// \t}\n// }\n\nupdatestate = function updatestate(state) {\n\tif (!state) return;\n\tcontain.innerHTML = links[state.page] || \"page not found\";\n};\n\nwindow.addEventListener('popstate', function (e) {\n\tupdatestate(e.state);\n});\nwindow.addEventListener('load', function (e) {\n\tupdatestate(e.state);\n});\n\nnav.addEventListener('click', function (e) {\n\te.preventDefault();\n\tvar state;\n\tif (e.target.tagName !== 'A') return;\n\tstate = { page: e.target.getAttribute('href') };\n\thistory.pushState(state, '', state.page);\n\tupdatestate(state);\n});\n\n// ;(function () {\n// \twindow.onhashchange = function () {\n\n// \tvar tabId = window.location.hash;\n// \t// console.log(tabId);\n// \tvar $link = $('a.link[href=\"' + tabId + '\"]')\n// \tvar $tab = $(tabId);\n// \t$link.addClass('is-active').siblings().removeClass('is-active');\n// \t$tab.addClass('is-active').siblings().removeClass('is-active');\n\n// \t};\n// }());\n\n// window.onload = function() {\n// \tvar hash = window.location.hash.substr();\n// \tvar $link = $('.link');\n// \tvar $tabs = $('.tab');\n\n// \tif (hash.length > 1) {\n// \t\tconsole.log(true);\n// \t\tvar tabId = window.location.hash;\n// \t\t// console.log(tabId);\n// \t\tvar $link = $('a.link[href=\"' + tabId + '\"]')\n// \t\tvar $tab = $(tabId);\n// \t\t$link.addClass('is-active').siblings().removeClass('is-active');\n// \t\t$tab.addClass('is-active').siblings().removeClass('is-active');\n// \t}\n// \t// if (history.state.hash) {\n// \t// \thistory.pushState(history.state.hash);\n// \t// }\n\n// \tfunction handlerAnchors() {\n\n// \t\t\tvar state = {\n// \t\t\t\t\ttitle: this.getAttribute( \"title\" ),\n// \t\t\t\t\turl: this.getAttribute( \"href\" )\n// \t\t\t}\n\n// \t\t\thistory.pushState( state, state.title, state.url );\n\n// \t\t\tvar tabId = state.url;\n// \t\t\tvar $tab = $('tabId');\n// \t\t\t// console.log($tab)\n// \t\t\t$tab.addClass('is-active').siblings().removeClass('is-active');\n\n// \t}\n\n// \tvar $anchors = $( 'link' );\n\n\n// \tfor( var i = 0; i < $anchors.length; i++ ) {\n// \t\t\t$anchors[ i ].onclick = handlerAnchors;\n// \t}\n\n// };\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNheUhlbGxvIGZyb20gJy4vbGliL3NheUhlbGxvLmpzJztcblxuc2F5SGVsbG8oKTtcblxuXG52YXIgbGlua3MsIFxuXHRcdHVwZGF0ZXN0YXRlLCBcblx0XHRjb250YWluLCBcblx0XHR0YWJzLCBcblx0XHR0YWJzV3JhcCxcblx0XHRuYXYsXG5cdFx0Y2hhbmdlVGFicyxcblx0XHRjaGFuZ2VMaW5rcztcblxuY29udGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluJyk7XG50YWJzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzJyk7XG50YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuY29uc29sZS5sb2cobmF2KTtcbmNvbnNvbGUubG9nKHRhYnMpO1xuY29uc29sZS5sb2codGFic1dyYXApO1xuY29uc29sZS5sb2coY29udGFpbik7XG5cbmxpbmtzID0ge1xuXHR0YWIxOiBcInRhYiAtMS0gaXMgb3BlblwiLFxuXHR0YWIyOiBcInRhYiAtMi0gaXMgb3BlblwiLFxuXHR0YWIzOiBcInRhYiAtMy0gaXMgb3BlblwiLFxuXHR0YWI0OiBcInRhYiAtNC0gaXMgb3BlblwiXG59O1xuXG4vLyBjaGFuZ2VUYWJzID0gZnVuY3Rpb24oZSl7XG4vLyBcdGlmIChlLnRhcmdldCkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuLy8gfVxuXG51cGRhdGVzdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cdGlmICghc3RhdGUpIHJldHVybjtcblx0Y29udGFpbi5pbm5lckhUTUwgPSBsaW5rc1tzdGF0ZS5wYWdlXSB8fCBcInBhZ2Ugbm90IGZvdW5kXCI7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuXHR1cGRhdGVzdGF0ZShlLnN0YXRlKTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuXHR1cGRhdGVzdGF0ZShlLnN0YXRlKTtcbn0pO1xuXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR2YXIgc3RhdGU7XG5cdGlmKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdBJykgcmV0dXJuO1xuXHRzdGF0ZSA9IHsgcGFnZTogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykgfTtcblx0aGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCBzdGF0ZS5wYWdlKTtcblx0dXBkYXRlc3RhdGUoc3RhdGUpO1xufSk7XG5cblxuXG4vLyA7KGZ1bmN0aW9uICgpIHtcbi8vIFx0d2luZG93Lm9uaGFzaGNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gXHR2YXIgdGFiSWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbi8vIFx0Ly8gY29uc29sZS5sb2codGFiSWQpO1xuLy8gXHR2YXIgJGxpbmsgPSAkKCdhLmxpbmtbaHJlZj1cIicgKyB0YWJJZCArICdcIl0nKVxuLy8gXHR2YXIgJHRhYiA9ICQodGFiSWQpO1xuLy8gXHQkbGluay5hZGRDbGFzcygnaXMtYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4vLyBcdCR0YWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdFxuLy8gXHR9O1xuLy8gfSgpKTtcblxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gXHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigpO1xuLy8gXHR2YXIgJGxpbmsgPSAkKCcubGluaycpO1xuLy8gXHR2YXIgJHRhYnMgPSAkKCcudGFiJyk7XG5cbi8vIFx0aWYgKGhhc2gubGVuZ3RoID4gMSkge1xuLy8gXHRcdGNvbnNvbGUubG9nKHRydWUpO1xuLy8gXHRcdHZhciB0YWJJZCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKHRhYklkKTtcbi8vIFx0XHR2YXIgJGxpbmsgPSAkKCdhLmxpbmtbaHJlZj1cIicgKyB0YWJJZCArICdcIl0nKVxuLy8gXHRcdHZhciAkdGFiID0gJCh0YWJJZCk7XG4vLyBcdFx0JGxpbmsuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuLy8gXHRcdCR0YWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuLy8gXHR9XG4vLyBcdC8vIGlmIChoaXN0b3J5LnN0YXRlLmhhc2gpIHtcbi8vIFx0Ly8gXHRoaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5LnN0YXRlLmhhc2gpO1xuLy8gXHQvLyB9XG5cbi8vIFx0ZnVuY3Rpb24gaGFuZGxlckFuY2hvcnMoKSB7XG5cbi8vIFx0XHRcdHZhciBzdGF0ZSA9IHtcbi8vIFx0XHRcdFx0XHR0aXRsZTogdGhpcy5nZXRBdHRyaWJ1dGUoIFwidGl0bGVcIiApLFxuLy8gXHRcdFx0XHRcdHVybDogdGhpcy5nZXRBdHRyaWJ1dGUoIFwiaHJlZlwiIClcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoIHN0YXRlLCBzdGF0ZS50aXRsZSwgc3RhdGUudXJsICk7XG5cbi8vIFx0XHRcdHZhciB0YWJJZCA9IHN0YXRlLnVybDtcbi8vIFx0XHRcdHZhciAkdGFiID0gJCgndGFiSWQnKTtcbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKCR0YWIpXG4vLyBcdFx0XHQkdGFiLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuLy8gXHR9XG5cbi8vIFx0dmFyICRhbmNob3JzID0gJCggJ2xpbmsnICk7XG5cblxuLy8gXHRmb3IoIHZhciBpID0gMDsgaSA8ICRhbmNob3JzLmxlbmd0aDsgaSsrICkge1xuLy8gXHRcdFx0JGFuY2hvcnNbIGkgXS5vbmNsaWNrID0gaGFuZGxlckFuY2hvcnM7XG4vLyBcdH1cblxuLy8gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NheUhlbGxvLmpzP2E2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F5SGVsbG8oKSB7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAgIHZhciBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBSaXZlcmNvZGUgJWMgaHR0cDovL3d3dy5yaXZlcmNvLmRlLyAlYyAlYyDwn5CzIFxcblxcbicsICdib3JkZXI6IDFweCBzb2xpZCAjMDAwO2NvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kOiAjZmZmMDAxOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzFjMWMxYzsgcGFkZGluZzo1cHggMDtib3JkZXI6IDFweCBzb2xpZCAjMDAwOycsICdiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOjVweCAwOycsICdjb2xvcjogI2IwOTc2ZDsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnXTtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9saWIvc2F5SGVsbG8uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);