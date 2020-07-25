const db = require("../models/");

module.exports = {
  findAll: function (req, res) {
    db.Roids.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Roids.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createRoids: function ({ body }, res) {
    console.log(body);
    db.Roids.create(body).then(() => res.json({ message: "success", body }));
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Roids.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
