import express from 'express';
import cors from 'cors';


const server = express();
server.use(express.json());
server.use(cors());

const tweets = [];
const usuarios = [];

server.post("/sign-up", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("ok");
});

server.post("/tweets", (req, res) => {
    const novotweet = req.body;
    const infousuario = usuarios.find((elemento) => elemento.username === novotweet.username);
    novotweet.avatar = infousuario.avatar;
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