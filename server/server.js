const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../client/webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

//body parser
app.use(bodyParser.json());



//login request
app.get('/Recipe', (req,res) => {
  res.status(200).sendFile(path.resolve(_dirname,'../client/src/Recipe.jsx'))
})



app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});