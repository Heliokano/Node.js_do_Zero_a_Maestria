const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware para servir arquivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Array de produtos
const products = [
  { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100 },
  { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200 },
  { id: 3, name: 'Produto 3', description: 'Descrição do produto 3', price: 300 },
];

// Rota da Home
app.get('/', (req, res) => {
  res.render('home', { products, title: 'Home' });
});

// Rota dinâmica para cada produto
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(p => p.id == productId);

  if (product) {
    res.render('product', { product, title: product.name });
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});