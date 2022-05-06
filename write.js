const fs = require('fs');

// STEP 1: Load JSON file
const users = require('./data');

// Defining new user
let user = {
    fname: '',
    lname: ''
//   language: ['French', 'Spanish', 'English'],
};
// STEP 2: Adding new data to users object
users.push(user);

// STEP 3: Writing to a file
fs.writeFile('data.json', JSON.stringify(users), (err) => {
    // Checking for errors
    if (err) throw err;
  
    console.log('Done writing'); // Success
  });