'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
    static associate(models) {
     
    }
  }
  Role.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};