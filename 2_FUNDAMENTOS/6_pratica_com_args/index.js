// Módulo Externo
const minimist = require('minimist')


// Mádulo Interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //parseInt (converte todo número em número inteiro)
const b = parseInt(args['b']) //parseInt (converte todo número em número inteiro)

soma(a, b)