// vendor
window.Flickity = require('flickity');

// modules
window.PubSub = require('./scripts/pubsub');

function debounce(fn, wait) {
	let t;
	return (...args) => {
		clearTimeout(t);
		t = setTimeout(() => fn.apply(this, args), wait);
	};
}
