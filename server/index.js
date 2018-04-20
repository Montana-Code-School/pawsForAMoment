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
const savePetsRouter = express.Router();
const displayPetsRouter = express.Router();

const db = process.env.MONGODB_URI || 'mongodb://wtfm8bbq:L3q9f33p9@ds147589.mlab.com:47589/pawsareus'
mongoose.connection.openUri(db);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//____________________________________________________CREATE_USER_MIDDLEWARE__

createUserRouter.use((req, res, next) => {
  console.log('something is happening');
  return UserSchema.findOne({username: req.body.username}, (userErr, username) => {
    if (userErr || username) {
      return res.status(401).send('Something is broken!')
    }
    return next();
  });
});

//_________________________________________________________CREATE_USER_ROUTE__

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

//______________________________________________________USER_AUTH_MIDDLEWARE__

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

//___________________________________________________________USER_AUTH_ROUTE__

userAuthRouter.route('/')
  .post((req, res) => {
    UserSchema.findOne({username: req.body.username}, (err, userId) => {
      if(err)
        res.send(err);
      res.json(userId.username);
    });
  });

//________________________________________________________________PETS_ROUTE__

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

//___________________________________________________________SAVE_PETS_ROUTE__

savePetsRouter.route('/')
  .post((req, res) => {
    PetSchema.pet.findById(req.body._id, (err, pet) => {
      if(err)
        res.send(err);
      UserSchema.findOne({username: req.body.username}, (err, user) => {
        user.pets.push(pet);
        user.save();
        res.send(user);
      })
    })
  })

//________________________________________________________DISPLAY_PETS_ROUTE__

displayPetsRouter.route('/:username')
  .get((req, res) => {
    console.log(req.params.username);
    // UserSchema.userId.findOne({username: req.params.username}).populate({
    //   path: 'pets'
    // }).exec((err, user) => {
    //   console.log(user);
    //   if(err)
    //     res.send(err);
    //   res.json(user);
    // })
    UserSchema.userId.findOne({'username': req.params.username}, (err, user) => {
      console.log(user);
      if(err)
        res.send(err);
      res.json(user);
    })
  })


//____________________________________________________________________________

app.use('/userAuth', userAuthRouter);
app.use('/createUser', createUserRouter);
app.use('/pets', petRouter);
app.use('/savePets', savePetsRouter);
app.use('/displayPets', displayPetsRouter);

app.listen(port);
console.log(`magic happens on port ${port}`);
