'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('roles','user_id', {
     type:Sequelize.INTEGER,
     references:{
       model:'users',
       key:'id',

     }
    
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('roles', 'user_id')
  }
};
