const route = require("express").Router();
const controller = require("../controllers/film");

route.get("/health-check", controller.healthCheck);
route.get("/", controller.index);
route.get("/:id", controller.detail);

module.exports = route;
