import express from 'express';
import WebSocket from "websocket";
import http from 'http';


// rest of the code remains same
const app = express();
const WebSocketServer = WebSocket.server;

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: true
});


wsServer.on('connect', (connection) => {
    connection.on('message', (data) => {
        const message = data.type == "utf8" ? data.utf8Data : "Unknown";
        console.log(data);
        wsServer.connections.forEach((client) => {
            if (client != connection) {
                client.sendUTF(message);
            }
        })
    });
});