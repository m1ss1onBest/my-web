const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const IP    = "192.168.43.197";
const PORT  = 8300;

app.post("/add-comment", (req, res) => {
    // const filPath = path.join(__dirname, "public", "comments.json");

    // const { username, message, email } = req.body;
    // // TODO: should I check it twice?
    // if (!username || !message) {
    //     return res.status(400).json({ error: "Username and message are required" });
    // }

    // fs.readFile(filePath, "utf-8", (err, data) => {
    //     if (err) {
    //         return res.status(500).json({ error: "Failed to read comments file" });
    //     }

    //     let comments = [];
    //     try {
    //         comments = JSON.parse(data);
    //     } catch (e) {
    //         console.error("Error parsing comments file:", e);
    //         return res.status(500).json({ error: "Failed to parse comments file"});
    //     }

    //     comments.push({ username, message });
    //     fs.writeFile(filPath, JSON.stringify(comments, null, 4), (err) => {
    //         if (err) {
    //             return res.status(500).json({ error: "Failed to write comments fifle" });
    //         }
    //     });
    // });
});

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

app.get("/funnypics", (req, res) => {
    res.redirect("https://http.cat");
})

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

app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}`);
});