const Artist = require("../models/Artist");
const Album = require("../models/Album");
// const User = require("../models/User");

Album.belongsto(Artist,{foreignKey:'artist_id'});
Artist.hasMany(Album, {foreignKey:'artist_id'});

module.exports = { Album, Artist };
