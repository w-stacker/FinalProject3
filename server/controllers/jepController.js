const db = require("../models/");

module.exports = {
  findAll: function (req, res) {
    db.Jep.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Jep.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createJep: function ({ body }, res) {
    console.log(body);
    db.Jep.create(body).then(() => res.json({ message: "success", body }));
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Jep.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
