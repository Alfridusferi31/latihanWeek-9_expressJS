"use strict";

const { QueryInterface } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addFilms = [
      {
        title: "Film 1",
        name: "Guiness",
        description:
          "A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Film 2",
        name: "Wahlberg",
        description:
          "A Epic Drama of a Cat And a Explorer who must Redeem a Moose in Australia",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Film 3",
        name: "Chase",
        description:
          "A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Films", addFilms, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Films", null, {});
  },
};
