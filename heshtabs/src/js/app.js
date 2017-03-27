import sayHello from './lib/sayHello.js';

sayHello();


var links, 
		updatestate, 
		contain, 
		tabs, 
		tabsWrap,
		nav,
		changeTabs,
		changeLinks;

contain = document.querySelector('#contain');
tabsWrap = document.querySelector('.tabs');
tabs = document.querySelectorAll('.tab');
nav = document.querySelector('.nav');
console.log(nav);
console.log(tabs);
console.log(tabsWrap);
console.log(contain);

links = {
	tab1: "tab -1- is open",
	tab2: "tab -2- is open",
	tab3: "tab -3- is open",
	tab4: "tab -4- is open"
};

// changeTabs = function(e){
// 	if (e.target) {
// 		return;
// 	}
// }

updatestate = function(state) {
	if (!state) return;
	contain.innerHTML = links[state.page] || "page not found";
};

window.addEventListener('popstate', function (e) {
	updatestate(e.state);
});
window.addEventListener('load', function (e) {
	updatestate(e.state);
});

nav.addEventListener('click', function(e){
	e.preventDefault();
	var state;
	if(e.target.tagName !== 'A') return;
	state = { page: e.target.getAttribute('href') };
	history.pushState(state, '', state.page);
	updatestate(state);
});



// ;(function () {
// 	window.onhashchange = function () {

// 	var tabId = window.location.hash;
// 	// console.log(tabId);
// 	var $link = $('a.link[href="' + tabId + '"]')
// 	var $tab = $(tabId);
// 	$link.addClass('is-active').siblings().removeClass('is-active');
// 	$tab.addClass('is-active').siblings().removeClass('is-active');
		
// 	};
// }());

// window.onload = function() {
// 	var hash = window.location.hash.substr();
// 	var $link = $('.link');
// 	var $tabs = $('.tab');

// 	if (hash.length > 1) {
// 		console.log(true);
// 		var tabId = window.location.hash;
// 		// console.log(tabId);
// 		var $link = $('a.link[href="' + tabId + '"]')
// 		var $tab = $(tabId);
// 		$link.addClass('is-active').siblings().removeClass('is-active');
// 		$tab.addClass('is-active').siblings().removeClass('is-active');
// 	}
// 	// if (history.state.hash) {
// 	// 	history.pushState(history.state.hash);
// 	// }

// 	function handlerAnchors() {

// 			var state = {
// 					title: this.getAttribute( "title" ),
// 					url: this.getAttribute( "href" )
// 			}

// 			history.pushState( state, state.title, state.url );

// 			var tabId = state.url;
// 			var $tab = $('tabId');
// 			// console.log($tab)
// 			$tab.addClass('is-active').siblings().removeClass('is-active');

// 	}

// 	var $anchors = $( 'link' );


// 	for( var i = 0; i < $anchors.length; i++ ) {
// 			$anchors[ i ].onclick = handlerAnchors;
// 	}

// };