import type { Server } from "http";
import { WebSocket, WebSocketServer } from "ws";

type SocketEvent = {
  type: string;
  payload?: unknown;
};

let wss: WebSocketServer | null = null;

export function initWebSocket(server: Server) {
  wss = new WebSocketServer({ server });
    wss.on("connection", (socket)=>{

        console.log("WebSocket connection established");

        socket.send(JSON.stringify(
            {
                type: "connected",
                payload: {
                    message: "Welcome to the WebSocket server!"
                }
            }
        ))

        socket.on('close', ()=>{
            console.log("WebSocket connection closed");
        })
    })
}

export function broadcastEvent(event: SocketEvent)
{
    if (!wss) {
        console.error("WebSocket server not initialized. Cannot broadcast event.");
        return
    }

    const message = JSON.stringify(event);

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });



}
