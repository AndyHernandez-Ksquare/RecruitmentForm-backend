"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ScholarshipInfos", [
      {
        id: 1,
        level: "highschool",
        kind: "academics",
        period: 5,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        level: "college",
        kind: "academics",
        period: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        level: "university",
        kind: "academics",
        period: 6,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ScholarshipInfos", null, {});
  },
};
