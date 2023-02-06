'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        FirstName:"Dustin",
        LastName: "Joe",
        Street: "Jl Mabes IV R",
        City: "Jakarta",
        Zip: 11160,
        Phone: "089668929888",
        Email: "dustinjoe88@gmail.com",
        Password: "$2a$05$V8EIwcYgFXRIiHa3ez6cKuVErSxkseHVJiP9zZqJyj8BvdNG6T3MS",
      },

      {
        FirstName:"Derick",
        LastName: "Joe",
        Street: "Jl Mabes IV R",
        City: "Jakarta",
        Zip: 11160,
        Phone: "089738373372",
        Email: "derickjoe88@gmail.com",
        Password: "$2a$05$YbeCJg6VZG1Js6GHIqLe8O4IuVlWrhk9chTjvrSGU5EzqYxiEzVSG",
      },

      {
        FirstName:"Dennis",
        LastName: "Joe",
        Street: "Jl Mabes IV R",
        City: "Jakarta",
        Zip: 11160,
        Phone: "089374474738",
        Email: "dennisjoe99@gmail.com",
        Password: "$2a$05$jm4vKOT.oXqljws6Gv4NpOnLCsPhpvceZM53XfwvHxZUKxsmZqZGW",
      },
      {
        FirstName:"Jack",
        LastName: "Joe",
        Street: "Jl Mabes IV R",
        City: "Jakarta",
        Zip: 11160,
        Phone: "089374474738",
        Email: "dennisjoe99@gmail.com",
        Password: "$2a$08$sptfNVLU9Ys5IHycWaSTDec3mA1tVubwxOmGg0jU/ELCxsaYnQpm.",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
