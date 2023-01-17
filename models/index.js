const Artist = require("../models/Artist");
const Album = require("../models/Album");
// const User = require("../models/User");

Album.belongsTo(Artist);
Artist.hasMany(Album);

module.exports = { Album, Artist };
