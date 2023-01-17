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
      allowNull: true,
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album_year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    album_review: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_16: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_17: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_18: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_19: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_20: {
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
  }
);

module.exports = Album;
