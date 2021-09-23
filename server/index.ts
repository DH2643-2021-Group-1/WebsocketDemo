import WebSocket from 'ws';

console.log("Websocket server started! ");
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
     console.log("New connection to the websocket!");
     ws.on('message', (data: any, isBinary: boolean) => {
        console.log("New incoming message");
        for (const client of wss.clients) {
            const clientIsSender = ws == client;
            if (clientIsSender) continue;
            client.send(data, { binary: isBinary });
        }
     });
});