"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("formalEducationInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      university_name: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      career_name: {
        type: Sequelize.STRING,
      },
      classes_completed: {
        type: Sequelize.BOOLEAN,
      },
      proof_classes_completed: {
        type: Sequelize.STRING,
      },
      degree_completed: {
        type: Sequelize.BOOLEAN,
      },
      proof_degree_completed: {
        type: Sequelize.STRING,
      },
      license_completed: {
        type: Sequelize.BOOLEAN,
      },
      proof_license_completed: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("formalEducationInfos", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_user_id",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("formalEducationInfos");
  },
};
