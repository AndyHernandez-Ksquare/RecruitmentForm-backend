"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Profiles", [
      {
        phone: "123456789",
        country_code: "52",
        email: "test@test.org",
        alt_email: "user@example.com",
        reference: "google",
        other_reference: "TikTok",
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: "987654321",
        country_code: "1",
        email: "example@example.com",
        alt_email: "user@example.org",
        reference: "facebook",
        other_reference: "Instagram",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: "555555555",
        country_code: "44",
        email: "user@example.org",
        alt_email: "example@example.org",
        reference: "twitter",
        other_reference: "LinkedIn",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
