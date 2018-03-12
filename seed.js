const { db, Gardener, Plot, Vegetable } = require('./models.js');

db.sync({ force: true }).then(() => {
	const tomato = Vegetable.build({
		name: 'tomato',
		color: 'red',
		planted_on: new Date('2018-03-12')
	});
	tomato.save().catch(error => console.log(error));
});

db
	.sync({ force: true })
	.then(() => {
		return db.drop();
	})
	.then(() => {
		console.log('Database synced!');
		db.close();
	})
	.catch(err => {
		console.log('Disaster! Something went wrong! ');
		console.log(err);
		db.close();
	});
