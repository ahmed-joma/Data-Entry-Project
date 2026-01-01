const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

 
 

mongoose.connect('mongodb+srv://ahmedjomma18:jX11C4KDhXHvlR6w@cluster0.1xatthb.mongodb.net/?appName=Cluster0').then(() => {
    app.get('/', (req, res) => {
        res.sendFile( '/views/home.html', { root: __dirname })
      })
}).catch((err) => {
  console.error('Connection error:', err)
}) ;