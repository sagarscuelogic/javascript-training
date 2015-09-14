(function() {
	var Joi = require('joi'),
		PostController = require('./controller');

	module.exports = [{
		method: 'GET',
		path: '/post',
		handler: PostController.getAll,
		config: {
			auth: false,
			description: 'Gets list of all posts',
			tags: ['api'],
			notes: 'Returns a list of all posts'
		}
	}, {
		method: 'POST',
		path: '/post',
		handler: PostController.add,
		config: {
			auth: false,
			description: 'Create new Post',
			tags: ['api'],
			notes: 'Returns success status and id of new record created',
			validate: {
				payload: {
					title: Joi.string().required(),
					author: Joi.string().required(),
					body: Joi.string().required(),
					status: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'GET',
		path: '/post/{id}',
		handler: PostController.getOne,
		config: {
			auth: false,
			description: 'Gets one specific post',
			tags: ['api'],
			notes: 'Returns requested post object',
			validate: {
				params: {
					id: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'PUT',
		path: '/post/{id}',
		handler: PostController.edit,
		config: {
			auth: false,
			description: 'Update a post',
			tags: ['api'],
			notes: 'Returns a list of all posts',
			validate: {
				params: {
					id: Joi.string().required()
				},
				payload: {
					title: Joi.string().required(),
					author: Joi.string().required(),
					body: Joi.string(),
					status: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'DELETE',
		path: '/post/{id}',
		handler: PostController.delete,
		config: {
			auth: false,
			description: 'Deletes a specific post',
			tags: ['api'],
			notes: 'Deletes a specific post',
			validate: {
				params: {
					id: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}];
})();