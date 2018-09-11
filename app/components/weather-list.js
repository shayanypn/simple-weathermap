import Component from '@ember/component';
import ArrayProxy from '@ember/array/proxy';

export default Component.extend({

	cities: null,

	init() {
		this._super(...arguments);

		this.set('cities', ArrayProxy.create({ content: this.get('coordinates') }));
	},

	actions: {
		onAdd(city){

			this.cities.addObject(city.coord);
		}
	}
});
