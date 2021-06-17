const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../client/webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.get('/api/customers', (req,res) => {
	const customers = [
		{
			id:1,
			firstName: 'John',
			lastName: 'Doe'
		},	{
			id:2,
			firstName: 'Eric',
			lastName: 'Lacky'
		},	
		{
			id:3,
			firstName: 'Sam',
			lastName: 'Baker'
		}
	];
  res.json(customers);
});

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});