"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("PersonalInfos", [
      {
        name: "Carlos",
        last_name: "Reyes",
        second_last_name: "Castillo",
        gender: "male",
        gender_other: null,
        date_of_birth: "1994-01-01",
        city_of_birth: "Queretaro",
        state_of_birth: "Queretaro",
        country_of_birth: "Mexico",
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria",
        last_name: "Gonzalez",
        second_last_name: "Lopez",
        gender: "female",
        gender_other: null,
        date_of_birth: "1990-05-15",
        city_of_birth: "Mexico City",
        state_of_birth: "Mexico City",
        country_of_birth: "Mexico",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John",
        last_name: "Doe",
        second_last_name: "",
        gender: "other",
        gender_other: "plane",
        date_of_birth: "1985-09-22",
        city_of_birth: "New York City",
        state_of_birth: "New York",
        country_of_birth: "United States",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PersonalInfos");
  },
};
