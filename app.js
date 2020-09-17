const express = require ('express');
const bodyParser = require('body-parser');
const usersRouters = require('./routes/blog-users')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const HttpError = require('./models/http-error')
const postRoutes = require('./routes/blog-post')

const app = express();
app.use (bodyParser.json());

app.use('/api/post', postRoutes)
app.use('/api/users', usersRouters)


app.use((req, res, next) =>{
  const error = new HttpError('Rota invalida', 404)
  return next(error)
});

//app.listen(5000, () => console.log('server rodando na porta 5000'))
mongoose
.connect(keys.mongoURI)
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err))
app.listen(5000, () => console.log ('server rodando na porta 5000'))