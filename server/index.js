const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();
const UserSchema = require('./models/UserSchema.js');
const userAuthRouter = express.Router();
const createUserRouter = express.Router();


mongoose.connect('mongodb://localhost/user-auth');

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



app.use('/userAuth', userAuthRouter);
app.use('/createUser', createUserRouter);

app.listen(port);
console.log(`magic happens on port ${port}`);
