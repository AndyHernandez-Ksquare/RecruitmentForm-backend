"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("BankAccountInfos", [
      {
        id: 1,
        acc_number: "12912819281",
        clabe: "1923012930129301200",
        bank: "BBVA",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        acc_number: "987654321",
        clabe: "555555552355555555",
        bank: "HSBC",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        acc_number: "543210987",
        clabe: "99992349999999999",
        bank: "Citibank",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
