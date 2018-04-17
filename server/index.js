const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();
const UserSchema = require('./models/UserSchema.js');
const PetSchema = require('./models/PetSchema.js');
const userAuthRouter = express.Router();
const createUserRouter = express.Router();
const petRouter = express.Router();

const db = process.env.MONGODB_URI || 'mongodb://wtfm8bbq:L3q9f33p9@ds147589.mlab.com:47589/pawsareus'
mongoose.connection.openUri(db);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

userAuthRouter.use((req, res, next) => {
  console.log('something is happening');
  return UserSchema.findOne({
    username: req.body.username,
    password: req.body.password
  },
  (userErr, username) => {
    if(userErr || !username) {
      return res.status(401).send('Incorrect Login information')
    }
    return next();
  })
});

createUserRouter.use((req, res, next) => {
    console.log('something is happening');
    return UserSchema.findOne({username: req.body.username}, (userErr, username) => {
      if (userErr || username) {
        return res.status(401).send('Something broke!')
      }
      return next();
    });
  });

createUserRouter.route('/')
  .post((req, res) => {
      const userId = new UserSchema();
      userId.username = req.body.username;
      userId.password = req.body.password;
      userId.save(err => {
        if(err)
          res.send(err);
        res.json({message: 'new secure user!'});
      });
  })

userAuthRouter.route('/')
  .post((req, res) => {
    UserSchema.findOne({username: req.body.username}, (err, userId) => {
      if(err)
        res.send(err);
      res.json(userId.username);
    });
  });

petRouter.route('/')

  .post((req, res) => {
    const petId = new PetSchema.pet();
    petId.shelter = req.body.shelter;
    petId.location = req.body.location;
    petId.petname = req.body.petname;
    petId.species = req.body.species;
    petId.breed = req.body.breed;
    petId.age = req.body.age;
    petId.gender = req.body.gender;
    petId.bio = req.body.bio;
    petId.image = req.body.image;
    petId.save(err => {
      if(err)
        res.send(err);
      res.json({message: 'new pet stored!'})
    })
  })

  .get((req, res) => {
    PetSchema.pet.find((err, pet) => {
      if(err)
        res.send(err);
      res.json(pet);
    });
  })

app.use('/userAuth', userAuthRouter);
app.use('/createUser', createUserRouter);
app.use('/pets', petRouter);

app.listen(port);
console.log(`magic happens on port ${port}`);
