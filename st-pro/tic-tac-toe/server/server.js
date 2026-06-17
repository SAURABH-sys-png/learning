import express from "express";
import { WebSocketServer } from "ws";
import getNextBestMove from "./logic.js";

const app = express();
const port = 6969;

const server = app.listen(port, () =>{
    console.log("Game Server has been started...");
})


const wss = new WebSocketServer({ server});

function solve(myObj){

}

wss.on("connection",(ws)=>{
    wss.on("message",async (rawdata) => {
        const myObj = JSON.stringify(rawdata);
        
    })
})
