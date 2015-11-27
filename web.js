var express = require('express'),
	mongoose = require('mongoose'),
	app = express(),
	keystone = require('keystone');
	
	// register HTML engine to ExpressJS
	app.engine('html', require('ejs').renderFile);
	
	keystone.set('app', app);
	keystone.set('mongoose', mongoose);

keystone.init({
	'name': 'Website CMS',
	
	'less': 'public',
	'static': ['public'],
	
	'port': 3002,
	
	'views': 'templates/views',
	'view engine': 'html',
	
	'auto update': true,
	'mongo': 'mongodb://localhost/website-cms',
	
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'trtmrtTheBest0123456789'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();