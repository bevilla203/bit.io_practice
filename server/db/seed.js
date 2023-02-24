'use strict'
const {db} = require("./index");
const { User } = require('./index')
const { green, red } = require("chalk");

const users = [
  {
    fName: 'John',
    lName: 'Doe',
    username: 'johndoe',
    bio: 'A software engineer based in San Francisco',
  },
  {
    fName: 'Jane',
    lName: 'Smith',
    username: 'janesmith',
    bio: 'A freelance writer and artist from New York City',
  },
  {
    fName: 'David',
    lName: 'Lee',
    username: 'davidlee',
    bio: 'An entrepreneur and investor in Los Angeles',
  },
  
];


const seed = async () => {
  try {
    await db.sync({ force: true });
    
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    
    console.log(green("Seeding worked!"));
    db.close();
  } catch (err) {
    console.error(red("Seeding failed... :("));
    console.error(err);
    db.close();
  }
};

seed();

