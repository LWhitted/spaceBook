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

let Users = [ 
  { name:'Kristina',
email: 'bob@gmail.com',
hometown: 'Chicago',
about: 'I like Supernatural'}

];

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

app.get('/favorites', (req, res) => {
  res.render('favorites.ejs')
 })

 app.post('/add-about', (req, res) => {
  console.log(req.body);
  Users.push(req.body);
  res.send({
    message: 'About added!',
    user: req.body
  })
})

app.post('/add-post', (req, res) => {
  console.log(req.body);
  Posts.push(req.body);
  res.send({
    message: 'New Post added!',
    user: req.body
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