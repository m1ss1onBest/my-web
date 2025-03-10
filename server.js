const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8300;

app.get("/comments.json", (req, res) => {
    const filePath = path.join(__dirname, "public", "comments.json");

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Read file error" });
        } else {
            res.setHeader("Content-Type", "application/json");
            res.send(data);
        }
    });
});

app.use(express.static("public"))
app.use(express.static("src/scripts"))
app.get("*", (req, res) => {
    let filepath = "src/views" + (req.url === "/" ? "/index.html" : req.url + ".html");
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