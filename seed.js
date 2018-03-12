const { db, Gardener, Plot, Vegetable } = require('./models.js');

db
	.sync({ force: true })
	.then(() => {
		return Promise.all([
			Vegetable.create({
				name: 'tomato',
				color: 'red',
				planted_on: Date.now()
			})
		]);
	})
	.then(() => {
		console.log('Finished.');
		db.close();
	})
	.catch(err => {
		console.log('Disaster! Something went wrong! ');
		console.log(err);
		db.close();
	});
