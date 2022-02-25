'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.addConstraint('users',{
  type:'unique',
  name:'email_unico',
  fields:['email']
})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('users', 'email_unico')
    
  }
  
};
