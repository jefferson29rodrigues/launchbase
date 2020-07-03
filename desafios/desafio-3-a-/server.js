const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set("view engine", "html");

nunjucks.configure('views', {
    express: server
});

server.get("/", function(req, res) {
    return res.render('desafio2-3');
});

server.listen(5000, function() {
    console.log("Servidor rodando!")
});