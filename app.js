const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true })); 
const Mydata = require('./models/mydataschema');
app.set('view engine', 'ejs'); 
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    Mydata.find().then((result) => {
        res.render("index",{});
    }).catch((err) => {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
    }) ;
  })
  app.get('/user/add.html', (req, res) => {
    res.render("user/add",{});
  })
  app.get('/user/view.html', (req, res) => {
    res.render("user/view",{});
  })
  app.get('/user/edit.html', (req, res) => {
    res.render("user/edit",{});
  })
  app.get('/user/search.html', (req, res) => {
    res.render("user/search",{});
  })
  app.get('/user/view.html', (req, res) => {
    res.render("user/view",{});
  })


  //connect to database

mongoose.connect('mongodb+srv://ahmedjomma18:jX11C4KDhXHvlR6w@cluster0.1xatthb.mongodb.net/?appName=Cluster0').then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      })
}).catch((err) => {
  console.error('Connection error:', err)
}) ;