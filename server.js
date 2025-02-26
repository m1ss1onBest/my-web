const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8300;

app.use(express.static("public"))
app.get("*", (req, res) => {
    let filepath = "src/views" + (req.url === "/" ? "/index.html" : req.url);
    fs.readFile(filepath, 'utf-8', (err, content) => {
        if(err) {
            res.status(404).send("Webpage not found.");
        } else {
            res.send(content);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});