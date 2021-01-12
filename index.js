const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const fs = require("fs");
let scenariosData;
fs.readFile("./src/scenariosData.json", (err, data) => {
    if (err) throw err;
    scenariosData = data;
});

const localClient = "http://localhost:3000";
const vercelClient = "https://great-wars-react.vercel.app/";
const clientUrl = process.env.dev ? localClient : vercelClient;

app.get("/", (req, res) => {
    res.set("Access-Control-Allow-Origin", clientUrl);
    res.set("Content-Type", "application/json");
    res.send(scenariosData);
});

app.listen(port);
