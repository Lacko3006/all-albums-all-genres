const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Album extends Model {}

Album.init(
    {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  artist_name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  artist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "Artist",
        key: "id",
      },
  },
  producer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album_review: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Album",
  },
);

module.exports = Album