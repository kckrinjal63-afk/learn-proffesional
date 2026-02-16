console.log('Hello, World!')
const express = require('express');
const connectDB = require('./db/db');
const app = express();


connectDB();

const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send(" my name is Krinjal kc");
});
console.log("hello world")








