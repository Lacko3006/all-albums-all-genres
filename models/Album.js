const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Album extends Model {}

Album.init({
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
    
  }
});
