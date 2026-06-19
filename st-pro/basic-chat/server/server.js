import express from "express";
import { WebSocketServer } from "ws";

const app = express();

const posts = [
    {
        username: 'kyle',
        title: 'Post 1'
    }
]

app.listen('/posts', (req,res) => {
    res.json(posts)
})


app.listen(3000);