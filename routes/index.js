const route = require("express").Router();
const filmRoute = require("./film");

route.use("/films", filmRoute);

module.exports = route;
