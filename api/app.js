const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hasifi:db5fnL2LJpXfIYuA@cluster0.rymzy.mongodb.net/sif_cms?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const cors = require('cors');


const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');


const app = express();
const port = 3000;

app.use(bodyParser.json()); // application/json


app.use(express.json());
app.use(cors({origin:true}));

app.get('/',(req,res) => res.send('Hello World'));

app.use('/posts',postsRoutes);

app.use('/comments',commentsRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
  });


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   app.listen(port, ()=> console.log('listening on port: ', port));
//   client.close();
// });

mongoose
.connect(
  uri
)
.then(result => {
  app.listen(port, ()=> console.log('listening on port: ', port));
})
.catch(err => console.log(err));
