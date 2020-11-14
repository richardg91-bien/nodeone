const express = require('express');
const app = express();
const path = require('path');

// settings

app.set('views', path.join(__dirname, '/public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// routes

//app.get('/', (req, res) => {
 //   res.sendFile(__dirname + '/public/mipagina.html')
//});

app.use(require('./public/routes/index.js'));

//static files

app.use(express.static(path.join(__dirname, 'public'))); 
    

//listerning the server

app.listen(process.env.PORT || 3000)
