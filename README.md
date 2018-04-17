 # Paws For A Moment (arms of an angle)

## Paws For A Moment is a mobile application that aggregates animal shelters across the state of Montana.

______

#### If you're new to PawsForAMoment...
- Clone the repo
- npm install on both the front and back ends.
  - front-end is in the main pawsForAMoment folder
  - back-end is in the server folder
- in order to run the app on your local server, you will need to simultaneously run 2 terminals (one for both the front and back ends)
  - on the front-end: run
    `npm start`
  - on the back-end: cd into server and run
    `npm run devstart`
- app is served on a simulator or through expo on your device

#### PawsForAMoment Features...

#### Known bugs...

_______

## Daily Workflow Logs
### 04/05/18:
- Implemented Travis CI testing
- Installed Create-React-Native-App

### 04/06/18
- Created side project for testing
- Implemented create-react-native-app and react-navigation
- Able to pass props from page to another

### 04/09/18
##### Side project for user-auth build out
- built mongodb and initial user routes, built userSchema
- got username/password checking on login page with database
- fixed async issues with login pack
- started building createUser file

### 04/10/2018
##### Side project for user-auth build out
- built POST function for new users on front end
- built password check to make sure password and confirm password match
- started building check on front-end to make sure new user's username doesn't already exist
- decided to refactor and build username check on the back end
- started building middleware for check, but encountering blob errors

### 04/11/2018
- Ian fixed blob errors on user auth side project, create user works and is all handles through back end
- Build back-end routes for login page
- refactored login.js so checks are happening on back-end
- Integrated side project into main project with successful user auth
- Installed sinon, chai, enzyme, and enzyme-adapter-react for testing suite
- Refactored testing suite into individual pages for each Component
- Created and tested landing page

### 04/12/2018
- Created NavBar.js
- Added navbar to stack and implemented on all pages
- Added Login and Home buttons to navbar with working functionality that takes you to login page and landing page respectively
- Currently struggling with flex styling of navbar

### 04/13/2018
- Figured out how to target Header for our navbar purposes
- Created functioning buttons for Home and Login on the landing page, need to implement in other components
- Deleted Navbar file and imports
- Implemented header in all components
- Working on auth check for header variability

### 04/16/2018
- Refactored code without react-navigation to handle state on a higher level
- Added petSchema and pet routes to back-end
- Added pets to our database
- Created Pets page that gets data from database
- Currently displaying names, but not images
