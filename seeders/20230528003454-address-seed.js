"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Addresses", [
      {
        id: 1,
        street: "437 Lytton",
        in_between_street_a: "437 Lytton",
        in_between_street_b: "437 Lytton",
        city: "Palo Alto",
        state: "CA",
        country: "US",
        zip: "94301",
        proof_of_address: "string",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        street: "123 Main St",
        in_between_street_a: "First Ave",
        in_between_street_b: "Second Ave",
        city: "Anytown",
        state: "NY",
        country: "US",
        zip: "12345",
        proof_of_address: "string",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        street: "789 Elm St",
        in_between_street_a: "Third Ave",
        in_between_street_b: "Fourth Ave",
        city: "Another City",
        state: "CA",
        country: "US",
        zip: "98765",
        proof_of_address: "string",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};
