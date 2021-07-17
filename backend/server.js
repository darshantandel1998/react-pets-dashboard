const express = require("express");

const data = require("./data.json");

const app = express();
const port = 4000;

app.use(express.json());

app.get('/pets', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
