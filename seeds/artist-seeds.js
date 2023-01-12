const sequelize = require('../config/connection.js');
const Artist = require("../models/Artist.js");

const artistData = [
  {
    artist_name: "Kendrick Lamar",
  },
  {
    artist_name: "Drake",
  },
];

const seedArtists = async () => {
    await sequelize.sync({ force: false })
    const artists = await Artist.bulkCreate(artistData)};

seedArtists();

module.exports = seedArtists;