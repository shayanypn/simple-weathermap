import Component from '@ember/component';
import $ from 'jquery';
const Base = 'http://api.openweathermap.org/data/2.5/weather';
const Token = '6bbbb65f4b2002e81bf3edb31063f04c';

export default Component.extend({
	city: null,
	error: null,
	actions: {
		onSubmit(){
			const city = this.get('city');

			if (city) {
				$.getJSON(`${Base}?q=${city}&APPID=${Token}`)
				.then(data => {
					this.sendAction('onAddCity', data);
					this.set('city', '');
				})
				.fail( (xhr, status) => {
					const result = xhr.responseJSON;
					if (status === 'error') {
						this.set('error', result.message);
					}
				});
			}
		}
	}
});
