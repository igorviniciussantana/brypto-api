const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.json('Página Inicial')
})


app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`)
})