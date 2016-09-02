'use strict'

let restify = require('restify')

let server = restify.createServer({
  name: 'xxjz-restful',
  version: '1.0.0'
})

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/keep/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});


server.listen(3000,() => console.log('%s listening at %s', server.name, server.url))