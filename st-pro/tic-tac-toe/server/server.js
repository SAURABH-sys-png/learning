import express from "express";
import { WebSocketServer } from "ws";
import getNextBestMove from "./logic.js";// Ensure your function is exported correctly in logic.js

const app = express();
const port = 6969;

const server = app.listen(port, () => {
    console.log(`Game Server has been started on port ${port}...`);
});

const wss = new WebSocketServer({ server });

function solve(boardObj) {
  
    return getNextBestMove(boardObj);
}


wss.on("connection", (ws) => {
    console.log("A player connected!");

    ws.on("message", async (rawdata) => {
        try {
            // 3. Convert incoming raw text buffer back into a JavaScript object
            const boardObj = JSON.parse(rawdata.toString());
            console.log("Received board state from client:", boardObj);

            const updatedBoard = solve(boardObj);
            console.log("Sending updated board back:", updatedBoard);

            ws.send(JSON.stringify(updatedBoard));

        } catch (error) {
            console.error("Error processing game data:", error);
            ws.send(JSON.stringify({ error: "Invalid board data received." }));
        }
    });

    ws.on("close", () => {
        console.log("Player disconnected.");
    });
});
