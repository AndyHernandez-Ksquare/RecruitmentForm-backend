"use strict";

/** @type {import('sequelize-cli').Migration} */
function getCurrentDate() {
  return new Date();
}
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Posts", [
      {
        text: "First post",
        userId: 1,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Second post",
        userId: 2,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Third post",
        userId: 1,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Fourth post",
        userId: 3,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Fifth post",
        userId: 2,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Sixth post",
        userId: 4,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Seventh post",
        userId: 3,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Eighth post",
        userId: 1,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Ninth post",
        userId: 4,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Tenth post",
        userId: 2,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
