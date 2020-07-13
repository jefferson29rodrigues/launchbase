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

server.get("/description/:id", function(req, res) {
    const id = req.params.id;

    const curso = cursos.find(function(curso) {
        return curso.id == id;
    });

    if ( !curso ) {
        return res.send("curso not found!");
    };

    return res.render("description", { item: curso });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Servidor rodando!")
});