'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('users', [{
      email: 'John Doe',
      password: '123',
      username: 'faker1'
    },
    {
      email: 'John Doe',
      password: '123',
      username: 'faker2'
    },
    {
      email: 'John Doe',
      password: '123',
      username: 'faker3'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
