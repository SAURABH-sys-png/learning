const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Welcome to express');
})

app.listen(8000, () => {
    console.log(`The server started on port number 8000...`);
})