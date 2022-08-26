import express from 'express';


const server = express();
server.use(express.json());

const tweets = [];

server.post("/tweets", (req, res) => {
    const novotweet = req.body;
    tweets.push(novotweet);
    res.send("ok");
});

server.listen(5000);