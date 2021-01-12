const express = require("express");
const app = express();

const fs = require('fs');
let scenariosData;
fs.readFile("./src/scenariosData.json", (err, data) => {
	if (err) throw err;
	scenariosData = data
})

app.get("/", (req, res) => {
	res.set("Access-Control-Allow-Origin", "http://localhost:3000");
	res.set('Content-Type', 'application/json')
    res.send(scenariosData);
});

app.listen(process.env.PORT);