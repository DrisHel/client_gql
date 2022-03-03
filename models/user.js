'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
     User.hasMany(models.Role,{
       foreignKey:'user_id', as:'roles'
     });
     return User;
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};