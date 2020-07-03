const express = require('express');

const server = express();


server.get("/", function(req, res) {
    return res.send('desafio2-3');
});

server.listen(5000, function() {
    console.log("Servidor rodando!")
});