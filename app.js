const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true })); 
const Mydata = require('./models/mydataschema');
app.get('/', (req, res) => {
    res.sendFile( '/views/home.html', { root: __dirname })
  })
  app.post('/Submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mydata = new Mydata({ name, email });
    mydata.save().then(() => {
        res.send('Data saved successfully');
    }).catch((err) => {
        console.error('Error saving data:', err);
        res.status(500).send('Error saving data');
    }) ;
  })

mongoose.connect('mongodb+srv://ahmedjomma18:jX11C4KDhXHvlR6w@cluster0.1xatthb.mongodb.net/?appName=Cluster0').then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      })
}).catch((err) => {
  console.error('Connection error:', err)
}) ;