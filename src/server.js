// Importar dependências
const express = require('express'); // Variável que se tornou uma função.
const path = require('path');
const pages = require('./pages.js')

//Iniciando o express
const server = express() // Será um objeto dentro do servidor

server
    //Utilizando arquivos estáticos (css, html, js)
    .use(express.static('public')) 

    //Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//Ligar o servidor
server.listen(5500)