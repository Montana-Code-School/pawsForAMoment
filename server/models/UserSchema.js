const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  password: String,
  pets:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pet',
  }]
});

let user = mongoose.model('user', UserSchema);
module.exports = {
  user: user,
  UserSchema: UserSchema
};
