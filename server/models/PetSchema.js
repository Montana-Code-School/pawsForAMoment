const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetSchema = new Schema({
  shelter: String,
  location: String,
  petname: String,
  species: String,
  breed: String,
  age: Number,
  gender: String,
  bio: String,
  image: String
});

let pet = mongoose.model('pet', PetSchema);
module.exports = {
  pet: pet,
  PetSchema: PetSchema
};
