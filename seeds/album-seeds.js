const sequelize = require("../config/connection.js");
const Album = require("../models/Album");

const albumData = [
  {
    id: 1,

    artist_name: "Drake",

    artist_id: 1,

    producer_name: "40 Boi-1da",

    album_name: "Nothing was the same",
  },
];

const seedAlbums = async () => {
  console.log(albumData);
  const albums = await Album.bulkCreate(albumData);
};

module.exports = seedAlbums;
