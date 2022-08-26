import express from 'express';


const server = express();
server.use(express.json());

const tweets = [];

server.post("/tweets", (req, res) => {
    const novotweet = req.body;
    tweets.push(novotweet);
    res.send("ok");
});

server.get("/tweets", (req , res) => {
    tweets.reverse();
    let tweets10 = [];
    if (tweets.length > 10){
        for (let i = 0; i < 10; i++){
            tweets10.push(tweets[i]);
        };
    } else {
        tweets10 = tweets;
    }
    res.send(tweets10);
    tweets.reverse();
});


server.listen(5000);