const express = require('express')

const app = express()


app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/mipagina.html')
});

app.get('/muestra-imagen', (req, res) => {
    res.sendFile(__dirname + '/imagenpng.png')

});

app.get('/acerca-de', (req, res,) => {
    res.send("acerca")
    
});

app.get('/habilidades', (req, res) => {
    res.send("habilidades")

});

app.get('/new', (req, res) => {
    res.send("nueva pagina!!!!")

});

app.get('/anyname', (req, res) => {
    res.send("<h1>RICHARD GARCIA</h1>")

});



   
    


app.listen(process.env.PORT || 3000)
