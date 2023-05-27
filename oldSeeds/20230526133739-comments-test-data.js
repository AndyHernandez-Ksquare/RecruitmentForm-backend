"use strict";

/** @type {import('sequelize-cli').Migration} */
function getCurrentDate() {
  return new Date();
}
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Comments", [
      {
        text: "Great post!",
        userId: 1,
        postId: 1,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Nice job!",
        userId: 2,
        postId: 1,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Interesting read",
        userId: 3,
        postId: 2,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Thanks for sharing",
        userId: 1,
        postId: 2,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Well written!",
        userId: 4,
        postId: 3,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "I agree with your points",
        userId: 2,
        postId: 3,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Good insights",
        userId: 3,
        postId: 4,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Enjoyed the article",
        userId: 1,
        postId: 4,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Nice work!",
        userId: 4,
        postId: 5,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
      {
        text: "Keep it up!",
        userId: 2,
        postId: 5,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
