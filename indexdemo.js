/**
 * Require Dependencies
 */
var restify = require('restify')
 , mongoose = require('mongoose')
 , config = require('./config')
 , routes = require('./routes')
/**
 * Create Server & Define Settings
 */
var server = restify.createServer({
 name: config.name,
 version: config.version
});
/**
 * Common Handlers
 */
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.jsonp());
/**
 * Connect to Mongo Database
 */
 mongoose.connect(config.mongo.uri, function(err) {
 // assign connection to var so we can pass it down the chain
 var db = mongoose.connection;
 // handle connection error
 db.on('error', console.error.bind(console, 'connection error:'));
 // handle connection success
 db.once('open', function callback () {
  /**
   * Start Routing API Calls
   */
  routes.route(server, db);
 });
});
/**
 * Start Server & Bind to Port
 */
server.listen(config.port, function () {
 console.log('%s v%s listening on port %s in %s mode.', server.name, server.version,   config.port, config.env);
});