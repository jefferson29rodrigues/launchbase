const express = require('express');

const server = express();


server.get("/", function(req, res) {
    return res.send('Primeira rota criada');
});

server.listen(5000, function() {
    console.log("Servidor rodando!")
});