const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const cursos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure('views', {
    express: server
});

server.get("/", function(req, res) {
    return res.render('about');
});

server.get("/courses", function(req, res) {
    return res.render('courses', { items: cursos });
});

server.get("/description", function(req, res) {
    return res.send("Hello página de descrição!");
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Servidor rodando!")
});