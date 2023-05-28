"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AcademicInfos", [
      {
        software_devel_comments: "Sample comment 1",
        degree_level: "highschool",
        informal_education: "Sample informal education 1",
        other_education: "Sample other education 1",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        software_devel_comments: "Sample comment 2",
        degree_level: "bachelor",
        informal_education: "Sample informal education 2",
        other_education: "Sample other education 2",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        software_devel_comments: "Sample comment 3",
        degree_level: "master",
        informal_education: "Sample informal education 3",
        other_education: "Sample other education 3",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AcademicInfos", null, {});
  },
};
