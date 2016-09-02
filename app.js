'use strict'

/* Require Dependencies*/
let restify = require('restify')
let mongoose = require('mongoose')
let config 	= require('./config')
let routes = require('./routes')


/* Create Server And Define Settings */
let server = restify.createServer({
  name: config.NAME,
  version: config.VERSION
})

/* Common Handlers */
server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.jsonp())

// server.get('/keep/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });

/* Start Routing API Calls */
routes.route(server)
// server.get('/article', )
// server.get('/article/:id')

/* Start Server & Bind to Port */
server.listen(config.PORT,() => console.log('%s listening at %s', server.name, server.url))