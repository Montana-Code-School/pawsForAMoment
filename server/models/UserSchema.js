const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  password: String,
  pets:[{type: Schema.Types.ObjectId, ref: 'pet'}]
});

module.exports = mongoose.model('user', UserSchema);
