// Call Model from Sequelize to Controller
const { Film } = require("../models");

class FilmController {
  static healthCheck(req, res, next) {
    res.status(200).json({ message: "Hello World" });
  }

  static index(req, res, next) {
    // SELECT * FROM Films;
    Film.findAll()
      .then((data) => {
        res.status(200).json({ data, message: "Success" });
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", error: err });
      });
  }

  static detail(req, res, next) {
    // SELECT * FROM Films WHERE id = :id
    Film.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Movie not found!" });
        } else {
          res.status(200).json({ data });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", error: err });
      });
  }
}

module.exports = FilmController;
