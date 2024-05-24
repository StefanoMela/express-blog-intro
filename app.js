// import e inizializzazione di Express
const express = require('express');
const app = express();
const port = 3000;

// import dati e controller
const postsArray = require('./data/post-array.js')
const postsJSON = require('./data/posts.json')
const postController = require('./controllers/posts.js')

let paginaHTML = require('./pagina.js')

// metodi per cartella public e lettura body req
app.use(express.static('public'));
app.use(express.json());

// log controllo ricezione dati da array e JSON
// console.log(postsArray);
// console.log(postsJSON);

// inizializzaione app Express
app.get('/', (req, res) =>{
    if(req.accepts('html')){
        return res.type('html')
        .send('Hello World')
    } else if (req.accepts('json')){
        return res.type('json')
        .send(postsJSON);
    }
});

app.get('/posts', postController.get)


app.post('/posts', postController.post)


app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});