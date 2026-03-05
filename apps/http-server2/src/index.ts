import express from "express"

const app = express();

app.get("/signup", (req, res) => {
    res.send("Hello worlds")
})

app.get("/signin", (req, res) => {
    res.send("Hey there")
})

app.get("/chat", (req, res) => {
    res.send("chat room")
})

app.listen(3000);   