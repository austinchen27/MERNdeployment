const PetController = require('../controllers/pet.controller');

module.exports = function(app){
  app.get('/api/allPets', PetController.findAll)
  app.put('/api/editPet/:id', PetController.editPet)
  app.post('/api/createPet', PetController.createPet)
  app.get('/api/onePet/:id', PetController.onePet)
  app.delete('/api/pet/delete/:id', PetController.deletePet)
}