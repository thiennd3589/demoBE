"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("usermeets", "type", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("usermeets", "url", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("usermeets", "content", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("usermeets", "type");
    await queryInterface.removeColumn("usermeets", "url");
    await queryInterface.removeColumn("usermeets", "content");
  },
};
