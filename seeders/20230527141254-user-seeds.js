"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "john_doe",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "jane_smith",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "9876543210",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "michael_johnson",
        firstName: "Michael",
        lastName: "Johnson",
        email: "michael.johnson@example.com",
        phone: "4567891230",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
