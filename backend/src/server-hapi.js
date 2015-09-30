var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../../frontend/src')
            }
        }
    }
});

server.register(require('inert'), function (err) {

    if (err) {
        throw err;
    }
/*
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('/index.html');
        }
    });
*/
    server.route({
        method: 'GET',
        path: '/{filename}',
        handler: {
            file: function (request) {
                return request.params.filename;
            }
        }
    });

    server.start(function (err) {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});