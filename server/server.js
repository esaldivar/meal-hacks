const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/routes');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const session = require('express-session');
const mongoStore = require('connect-mongodb-session')(session);
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schemas/typeDefs/testType');
const resolvers = require('./schemas/resolvers/resolvers');
const PORT = process.env.PORT;

// const cors = require('cors')
app.use(express.json());

//graphql server
const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
  console.log(`Server is running!
  Listening on ${url}`);
})

//session storage for mongoDB
app.use(session({
  key: process.env.COOKIE_KEY,
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new mongoStore({
    uri: `${process.env.URI}`,
    databaseName: 'mealHusers',
    collection: 'sessions',
    expires: 60 * 60
  }),
  cookie: {
    maxAge: 900000
  }
}))


//mongoDB
mongoose.connect(`${process.env.URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mealHusers'
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.urlencoded({extended:true}));

// Route Handlers
app.use('/api', apiRouter);

//Default Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

// Catch-all to unknown routes (404)
app.use((req,res) => res.status(404).send('not found'))
//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
