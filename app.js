const express = require ('express');
const bodyParser = require('body-parser');
const usersRouters = require('./routes/blog-users')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express();
app.use (bodyParser.json());

app.use('/api/users', usersRouters)

//app.listen(5000, () => console.log('server rodando na porta 5000'))
mongoose
.connect(keys.mongoURI)
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err))
app.listen(5000, () => console.log ('server rodando na porta 5000'))