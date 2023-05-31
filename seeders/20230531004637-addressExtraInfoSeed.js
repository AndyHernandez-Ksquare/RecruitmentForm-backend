"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AddressExtraInfos", [
      {
        type_of_residency: "rented",
        other_residency: "mortgage",
        people: "alone",
        address_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_of_residency: "owned",
        other_residency: null,
        people: "family",
        address_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_of_residency: "rented",
        other_residency: "lease",
        people: "roommates",
        address_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AddressExtraInfos", null, {});
  },
};
