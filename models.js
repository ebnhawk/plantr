const sequelize = require('sequelize');
const db = new sequelize('postgres://localhost:5432/plantr', {logging: true});

// ----------------------------------------
const Gardener = db.define('Gardener', {
    name: {
        type: sequelize.STRING}, 
    age: {
        type: sequelize.INTEGER}});
// ----------------------------------------

const Plot = db.define('Plot', {
    size: {
        type: sequelize.INTEGER}, 
    shaded: {
        type: sequelize.BOOLEAN}});
// ----------------------------------------
        
const Vegetable = db.define('Vegetable', {
    name: {
        type: sequelize.STRING}, 
    color: {
        type: sequelize.STRING},
    planted_on: {
        type: sequelize.DATEONLY}});
// ----------------------------------------

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

module.exports = db;