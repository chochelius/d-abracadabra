const express = require('express');
const app = express();

const usuarios = ["juan", "pedro", "maria", "jose"];



app.use(express.json());
app.use(express.static("assets"));



const validarUser = (req, res, next) => {
    const { usuario } = req.params;
    const index = usuarios.findIndex((item) => item === usuario);
    if (index === -1) return res.redirect('/who');
    next();
};


const validarNum = (req, res, next) => {
    function numRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const numAleatorio = numRandom(1, 5);
    const { n } = req.params;
    console.log(n)
    console.log(numAleatorio)
    if (n != numAleatorio) return res.redirect('/voldemot')
    next();
}

app.get("/abracadabra/juego/:usuario", validarUser, (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/abracadabra/conejo/:n', validarNum, (req, res) => {
    res.sendFile(__dirname + '/assets/conejito.jpg');
});

app.get("/abracadabra/usuarios", (req, res) => {
    res.json(nombres);
  });


app.get('/who', (req, res) => {
    res.sendFile(__dirname + '/assets/who.jpeg');
});

app.get('/voldemort', (req, res) => {
    res.sendFile(__dirname + '/assets/voldemort.jpg');
});


app.get("*", (req, res) => {
    res.send("<h1>Esta página no existe</h1>")
});


app.listen(3000, () => {console.log('Servidor ARRIBA')});


// mientras trabajaba algo hice que ya no funciona, lo veré mañana porque son las 2:30am