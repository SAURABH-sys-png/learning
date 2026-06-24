const express = require('express');
// 1. Correctly require and execute dotenv
require('dotenv').config(); 

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api' , require('./routes/taskRoutes'));

// 2. Actually start the server using app.listen()
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});