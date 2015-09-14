(function() {
	'use strict';

	var Hapi = require('hapi'),
		HapiRouter = require('hapi-router'),
		HapiSwagger = require('hapi-swagger'),
		GoodConsoleLogger = require('good'),
		Mongoose = require('mongoose'),
		apiVersion = require('./package').version,
		server;

	server = new Hapi.Server();

	server.connection({
		port: process.env.PORT || 3000,
		host: 'localhost'
	});

	server.register({
		register: HapiRouter,
		options: {
			routesDir: __dirname + '/server/routes/'
		},
	}, function(error) {
		if (error) {
			console.trace(error.stack);
			throw error;
		}
	});

	server.register([
		require('inert'),
		require('vision'), {
			register: HapiSwagger,
			options: {
				apiVersion: apiVersion
			}
		}
	], function(error) {
		if (error) {
			console.trace(error.stack);
			throw error;
		}
	});

	server.register({
		register: require('good'),
		options: {
			opsInterval: 1000,
			reporters: [{
				reporter: require('good-console'),
				events: {
					log: '*',
					response: '*'
				}
			}, {
				reporter: 'good-http',
				events: {
					error: '*'
				},
				config: {
					endpoint: 'http://localhost:3000',
					wreck: {
						headers: {
							'x-api-key': 12345
						}
					}
				}
			}]
		}
	}, function(error) {
		if (error) {
			console.trace(error.stack);
			throw error;
		}
		if (!module.parent) {
			server.start(function() {
				console.info('Server running at:', server.info.uri);
			});
		}
	});
})();