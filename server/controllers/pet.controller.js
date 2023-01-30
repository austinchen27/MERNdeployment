const { Pet } = require('../models/pet.models');

module.exports.findAll = (req, res) => {
  Pet.find()
    .then(pets => res.json(pets))
    .catch(err => res.json(err))
}

module.exports.createPet = (req, res) => {
  const { name } = req.body;
  console.log(req.body)
  Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}

module.exports.onePet = (req, res) => {
  console.log(req.params.id)
  Pet.findById({ _id: req.params.id })
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}

module.exports.editPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(deleted => res.json(deleted))
    .catch(err => res.json(err))
}