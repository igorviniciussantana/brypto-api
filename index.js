const express = require('express')
const app = express();
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

app.get('/', async (req,res)=>{
 res.json('Página Inicial');
})

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

app.listen(3000, ()=>{
    console.log(`O servidor está rodando na porta 3000`)
})
