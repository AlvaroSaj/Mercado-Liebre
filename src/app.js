const express = require('express');
const app = express();

const path = require('path');
const htmlpath = path.resolve(__dirname, './views')

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(htmlpath, '/index.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(htmlpath,'/login.html'))
})

app.get('/register', (req, res) =>{
    res.sendFile(path.join(htmlpath,'/register.html'))
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${ port }`));