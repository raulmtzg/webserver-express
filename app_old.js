
const http = require('http');

http.createServer ( (req, res) =>{

    res.writeHead(200, { 'Content-Type': 'application/json'});
        let salida = {
            nombre: 'Raul',
            edad: 37,
            url: req.url
        }
    res.write( JSON.stringify( salida ) );
    // res.write('Hola Mundo');
    res.end();

})
.listen(3000);
console.log('Escuchando el puerto 3000');