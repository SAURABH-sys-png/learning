import { response } from "express";
import { rejects } from "node:assert";
import { error } from "node:console";
import { resolve } from "node:dns";

// 1. Create your state updater function
function updateGameState(serverData) {
    console.log("Updating board with server data:", serverData);

    for (const [key, value] of Object.entries(serverData)) {
        const btn = document.getElementById(key);
        if (btn) {
            btn.innerText = value;
        }
    }
}

async function formAndSend(buttonId){

    let myObj = new Object();
    for(let i = 1; i <= 9; i++){
        const key = i.toString();
        const btn = document.getElementById(`${key}`);
        const value = btn.innerText;
        myObj[key] = value;
    }
    
    try {
        const serverInt = await new Promise((resolve, reject) => {
            const ws = new WebSocket('ws://localhost:6969');

            ws.onopen = () => {
                ws.send(JSON.stringify(myObj));
            };

            ws.onmessage = (event) => {
                resolve(event.data);
                ws.close();
            };
            ws.onerror = (error) => {
                reject(error);
            };
        });
        
        
        const parsedData = JSON.parse(serverInt); 

        updateGameState(parsedData);

    } catch (err) {
        console.error("WebSocket Communication Error:", err);
    }
}

const buttons = document.querySelectorAll('div.grid button');

buttons.forEach(button => {
    button.addEventListener('click', async () => {
        await formAndSend(button.id);
    });
});