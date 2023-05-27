"use strict";

/** @type {import('sequelize-cli').Migration} */
function getCurrentDate() {
  return new Date();
}
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        username: "johndoe",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Jane Smith",
        username: "janesmith",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Michael Johnson",
        username: "mjohnson",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Emily Davis",
        username: "edavis",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "David Wilson",
        username: "dwilson",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Olivia Brown",
        username: "obrown",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "William Taylor",
        username: "wtaylor",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Sophia Clark",
        username: "sclark",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "James Anderson",
        username: "janderson",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        name: "Abigail Thomas",
        username: "athomas",
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
