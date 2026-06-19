import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 6969;

const server = app.listen(port, () => {
  console.log("Server room started on port number 6969 ...");
});

const socket = new WebSocketServer({ server });

socket.on("connection", (ws) => {
  console.log("Acommand has been recieved");
  ws.on("message", (data) => {
    const Data = data.toString().trim();

    if (Data === "W" || Data === "w") {
      ws.send("Forward_Server");
    } else if (Data === "S" || Data === "s") {
      ws.send("Backward_Server");
    } else if (Data === "A" || Data === "a") {
      ws.send("Left_Server");
    } else if (Data === "D" || Data === "d") {
      ws.send("Right_Server");
    } else if (Data === "X" || Data === "x") {
      ws.send("Stop_Server");
    } else {
      ws.send(Data);
    }
  });
  socket.on("close", () => {
    console.log("Player has been disconnected");
  });
});
