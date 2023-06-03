"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("formalEducationInfos", [
      {
        id: 1,
        university_name: "UAQ",
        state: "Querétaro",
        country: "Mexico",
        career_name: "Computer Science",
        classes_completed: true,
        proof_classes_completed: "ABC123",
        degree_completed: true,
        proof_degree_completed: "XYZ456",
        license_completed: true,
        proof_license_completed: "123ABC",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        university_name: "XYZ University",
        state: "California",
        country: "United States",
        career_name: "Business Administration",
        classes_completed: false,
        proof_classes_completed: "DEF789",
        degree_completed: true,
        proof_degree_completed: "456XYZ",
        license_completed: false,
        proof_license_completed: "789DEF",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        university_name: "ABC University",
        state: "New York",
        country: "United States",
        career_name: "Psychology",
        classes_completed: true,
        proof_classes_completed: "GHI012",
        degree_completed: true,
        proof_degree_completed: "789ABC",
        license_completed: true,
        proof_license_completed: "012GHI",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("formalEducationInfos", null, {});
  },
};
