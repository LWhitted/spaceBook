const express = require('express')
const app = express()
const port = 3000


app.use(express.json());
app.use(express.static('public'));

const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static( __dirname + '/public'));

const Sequelize = require('sequelize');
const { Users } = require('./models');
const { Posts } = require('./models');

// let Users = [ 
//   { name:'Kristina',
// email: 'bob@gmail.com',
// hometown: 'Chicago',
// about: 'I like Supernatural'}

// ];

let Posts = [ {
  username: "Knsong",
  userText: "I had a good day"
}]

let Favorites = []

app.get('/', (req, res) => {
  res.render('profile.ejs');
})

app.get('/posts', (req, res) => {
 res.render('main.ejs')
})


app.post('/add-post', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
 const { name, email, hometown, about } = req.body;
 const newUser = await Posts.create({
     name,
     email,
     hometown, 
     about
 });
 
 // Send back the new user's ID in the response:
  res.json({
      id: newUser.id
  })
})

app.post('/add-about', async (req, res) => {
   // req.body contains an Object with firstName, lastName, email
  const { username, post, favorite } = req.body;
  const newUser = await Users.create({
      username,
      post,
      favorites
  });
  
  // Send back the new user's ID in the response:
  res.json({
      id: newUser.id
})
})


app.get('/list-users', (req, res) => {
  res.json(Users)
})

app.get('/list-posts', (req, res) => {
  res.json(Posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})