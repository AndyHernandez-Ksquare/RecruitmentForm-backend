"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AddressExtraInfos", [
      {
        CURP: "HEGG560427MVZRRL04",
        identification_number: "string",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CURP: "ABC123456XYZ789",
        identification_number: "abcxyz",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CURP: "PQR987654MNO321",
        identification_number: "pqr123",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AddressExtraInfos", null, {});
  },
};
