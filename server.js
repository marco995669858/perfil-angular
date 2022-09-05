const express = require('express');
const path = require('path');

const app = require();

app.use(express.static('./dist/perfil-angular'));
 
app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/perfil-angular/'}),
)
