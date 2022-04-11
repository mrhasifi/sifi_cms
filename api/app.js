const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const handlers = require('./model/handlers');


const app = express();
const port = 3000;

app.use(bodyParser.json()); // application/json


app.use(express.json());
app.use(cors({origin:true}));

app.get('/',(req,res) => res.send('Hello World'));

app.get('/posts',postsRoutes);

app.get('/comments',commentsRoutes);

app.listen( port, () => console.log('listening at port : ',port));