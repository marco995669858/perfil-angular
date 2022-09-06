const express = require('express');

const app = require();

app.use(express.static(__dirname+'/dist/perfil-angular'));
 
app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/perfil-angular/index.html');
});

app.listen(process.env.PORT || 8080);
