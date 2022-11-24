const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const { product } = require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
  });

app.get('/products', async (req,res)=>{
  const returnProducts = await product.findAll();
  res.json(returnProducts)
})

app.post('/products', async (req,res)=>{
    const createProduct = await product.create(req.body)
    res.json(createProduct)
})

app.get('/products/:id', async (req,res)=>{
    const findProduct = await product.findByPk(req.params.id)
    res.json(findProduct)
})

app.delete('/products/:id', async (req,res)=>{
    const deleteProduct = await product.findByPk(req.params.id)
    deleteProduct.destroy()
    res.json('Deleted')
})

app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`)
})