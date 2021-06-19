const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
const config = require('../client/webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

//body parser
app.use(express.json());
app.use(express.urlencoded({
	extended:true
}));

//cors
app.use(cors({
	origin:'http://localhost:3000', //<== location of the react app were connecting to
	credentials: true
}));

//session
app.use(session({
	secret: 'secretcode',
	resave: true,
	saveUninitialized: true
}));

//cookie parser
app.use(cookieParser('secretcode'));






app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});