import Component from '@ember/component';
import $ from 'jquery';
const Base = 'http://api.openweathermap.org/data/2.5/forecast';
const Token = '6bbbb65f4b2002e81bf3edb31063f04c';

export default Component.extend({
	data: null,
	willRender() {

		if (this.get('data') === null ) {		
			$.getJSON(`${Base}?lat=${this.coordinate.lat}&lon=${this.coordinate.lng}&APPID=${Token}`).then(data => {
				if (data.list.length) {
					console.log(data.list[0]);
					this.set('data', data.list[0]);
				}
			});
		}
	}
});
