let express = require('express');
const PORT = 80;
let app = express();
app.listen(PORT, ()=>{
    console.log("Mi servidor http escuchando el puerto " + PORT + "...");
});
app.get('/foo', (req, res)=>{
    console.log('Hola, Soy Jonathan Flores.');
});