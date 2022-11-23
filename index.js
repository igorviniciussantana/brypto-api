const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

const { product } = require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', async (req,res)=>{
  const returnProducts = await product.findAll();
  res.json(returnProducts)
})

app.post('/', async (req,res)=>{
    const createProduct = product.create(req.body)
    res.json(createProduct)
})

app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`)
})