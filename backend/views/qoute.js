const Qoute = require("../models/Qoute");
// const id = req.params.id '/:id'

const post_qoute = (req, res) => {
  const user = req.body.user ? req.body.user : null;

  const newQoute = new Qoute({
    text: req.body.text,
    user,
  });
  newQoute.save().then((qoute) => res.json(qoute));
};

const get_all_qoute = (req, res) => {
  Qoute.find()
    .sort({ date: -1 })
    .then((qoutes) => res.json(qoutes));
};

const delete_qoute = (req, res) => {
  Qoute.findById(req.params.id)
    .then((qoute) => qoute.remove())
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false, error: err }));
};

const random_qoute = async (req, res) => {
  const id = req.query
  console.log(id)

  

  if (id && id ==={}) {
    var ObjectID = require("mongodb").ObjectID;

  const Id = new ObjectID(id);
    Qoute.find({ _id: { $ne: Id } })
      .then((qoute) => res.status(200).json({ message: true, qoute }))
      .catch((err) => res.status(404).json({ message: false, error: err }));
  } else {
    const count_max = await Qoute.countDocuments({})
    const num = Math.floor(Math.random() * count_max)
    console.log(num)
    Qoute.find({})
    .then((qoute) => res.status(200).json({ message: true, qoute: qoute[num] }))
    .catch((err) => res.status(404).json({ message: false, error: err }));
  }
};

module.exports = {
  get_all_qoute,
  post_qoute,
  delete_qoute,
  random_qoute,
};
