const sequelize = require("../config/connection.js");
const Album = require("../models/Album");

const albumData = [
  {
    id: 1,

    artist_name: "Drake",

    artist_id: 1,

    producer_name: "Sam Laxton",

    album_name: "Nothing was the same",
  },
];

const seedAlbums = async () => {
  console.log(albumData);
  const albums = await Album.bulkCreate(albumData);
};

module.exports = seedAlbums;
