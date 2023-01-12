const sequelize = require('../config/connection.js');
const artistSeed = require('./artist-seeds')
const albumSeed = require('./album-seeds');

(async function() {
  await sequelize.sync({ force: true })
  await artistSeed()
  await albumSeed()
  await sequelize.close()
})()