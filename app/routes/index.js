import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		const randomCoordinates = [];

		/**
		* generate 10 random geographic coordinates
		*/
		for (var i = 0; i < 10; i++) {
			randomCoordinates.push({
				lon: (Math.random()*360-180).toFixed(8),
				lat: (Math.random()*180-90).toFixed(8)
			});
		}

		return randomCoordinates;
	}
});
