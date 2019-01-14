import "core-js/fn/object/assign";
import Vue from 'vue';
// import sample from './data.js';

let model = JSON.parse(window.vuebnb_listing_model);

var app = new Vue({
	el: '#app',
	data: Object.assign(model, {
		headerImageStyle: {
			'background-image': 'url(/images/header.jpg)' 
		}
	})
});
