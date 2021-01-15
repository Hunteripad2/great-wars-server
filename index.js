const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const fs = require("fs");
let scenariosData;
let resourcesData;
let countriesData;
fs.readFile("./src/scenariosData.json", (err, data) => {
    if (err) throw err;
    scenariosData = data;
});
fs.readFile("./src/resourcesData.json", (err, data) => {
    if (err) throw err;
    resourcesData = data;
});
fs.readFile("./src/countriesData.json", (err, data) => {
    if (err) throw err;
    countriesData = data;
});

const localClient = "http://localhost:3000";
const vercelClient = "https://great-wars-react.vercel.app";
const clientUrl = process.env.NODE_ENV === "production" ? vercelClient : localClient;

app.get("/scenariosData", (req, res) => {
    res.set("Access-Control-Allow-Origin", clientUrl);
    res.set("Content-Type", "application/json");
    res.send(scenariosData);
});
app.get("/resourcesData", (req, res) => {
    res.set("Access-Control-Allow-Origin", clientUrl);
    res.set("Content-Type", "application/json");
    res.send(resourcesData);
});
app.get("/countriesData", (req, res) => {
    res.set("Access-Control-Allow-Origin", clientUrl);
    res.set("Content-Type", "application/json");
    res.send(countriesData);
});

app.listen(port);
