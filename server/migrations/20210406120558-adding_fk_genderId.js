"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint("Users", {
      fields: ["genderId"],
      type: "foreign key",
      name: "fk_genderId",
      references: {
        //Required field
        table: "Genders",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint("Users", "fk_genderId")
  }
}
