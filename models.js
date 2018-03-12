const sequelize = require('sequelize');
const db = new sequelize('postgres://localhost:5432/plantr', {
	logging: false
});

// ----------------------------------------
const Gardener = db.define('gardeners', {
	name: {
		type: sequelize.STRING
	},
	age: {
		type: sequelize.INTEGER
	}
});
// ----------------------------------------

const Plot = db.define('plots', {
	size: {
		type: sequelize.INTEGER
	},
	shaded: {
		type: sequelize.BOOLEAN
	}
});
// ----------------------------------------

const Vegetable = db.define('vegetables', {
	name: {
		type: sequelize.STRING
	},
	color: {
		type: sequelize.STRING
	},
	planted_on: {
		type: sequelize.DATEONLY
	}
});
// ----------------------------------------

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });
Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = { db, Gardener, Plot, Vegetable };
