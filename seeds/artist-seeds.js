const sequelize = require('../config/connection.js');
const Artist = require("../models/Artist.js");

const artistData = [
  {
    id:1,
    artist_name: "Kendrick Lamar",
  },
  {
    id:2,
    artist_name: "Drake",
  },
];

const seedArtists = async () => {
    const artists = await Artist.bulkCreate(artistData)};

module.exports = seedArtists;