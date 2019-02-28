

const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Esta linea indica que regresara el contenido de la carpeta public al hacer una peticion al servidor
app.use( express.static( __dirname+ '/public') );

//Expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'raul martinez'        
    });

});

app.get('/about', (req, res) => {
    
    res.render('about');

});


 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});