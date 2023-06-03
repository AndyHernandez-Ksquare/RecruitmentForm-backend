"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Skills", [
      {
        id: 1,
        preferred_programming_language: "JavaScript",
        experience: "less_than_three",
        disability: "motor",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        preferred_programming_language: "Python",
        experience: "three_to_five",
        disability: "visual",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        preferred_programming_language: "Java",
        experience: "more_than_five",
        disability: "hearing",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Skills", null, {});
  },
};
