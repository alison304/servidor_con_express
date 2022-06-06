const express = require('express');
const Contenedor = require('./contenedor');

const app = express();
let contenedor = new Contenedor('productos');

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/productos', async function (req, res) {
    let list = await contenedor.getAll();
    res.send(list);
});

app.get('/productoRandom', async function (req, res) {
    let list = await contenedor.getAll();
    let randomIndex = Math.floor(Math.random() * list.length);
    let product = list[randomIndex];
    res.send(product);
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${port}`);
});


