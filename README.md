# Paws For A Moment (arms of an angle)

Paws For A Moment is a mobile application that aggregates animal shelters across the state of Montana.

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
