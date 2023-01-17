const Artist = require("../models/Artist");
const Album = require("../models/Album");
// const User = require("../models/User");

Album.hasOne(Artist);
Artist.belongsToMany(Album);

module.exports = { Album, Artist };
