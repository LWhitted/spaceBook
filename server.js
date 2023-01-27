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


const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://spacebook_mfcg_user:mhTHro46yZYlr7bZc86UC5Hk1pWcAmRS@dpg-cf9i6tkgqg47p3vb1cmg-a/spacebook_mfcg')



const { Users} = require('./models');
const { Posts} = require('./models');

app.get('/', (req, res) => {
  res.render('profile.ejs');
})

app.get('/posts', (req, res) => {
 res.render('main.ejs')
})


app.post('/add-about', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
 const { name, email, hometown, about } = req.body;
 const newUser = await Users.create({
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

app.post('/add-post', async (req, res) => {
   // req.body contains an Object with firstName, lastName, email
  const { post, favorites } = req.body;
  const newPost = await Posts.create({
      post,
      favorites
  });
  
  // Send back the new user's ID in the response:
  res.json({
      id: newPost.id
})
})

app.delete('/delete-posts/:id', async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Posts.destroy({
      where:
       {
          id
      }
  });
  res.json(deletedPost);
});


app.get('/list-users', async (req, res) => {
  const users = await Users.findAll({
      attributes: ['name','email', 'hometown','about']
  });
  res.json(users);
});

app.get('/list-posts', async (req, res) => {
  const posts = await Posts.findAll({
      attributes: ['id','post', 'favorites']
  });
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})