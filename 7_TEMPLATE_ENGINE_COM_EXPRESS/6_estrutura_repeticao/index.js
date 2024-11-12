const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{

    const items = ['Item a', 'Item b', 'Item c']
    res.render('dashboard', { items })
})

app.get('/', (req, res) => {

    const user ={
        name: "Hélio",
        surname: "Okano",
        age: 37,
    }

    const palavra = "Teste"

    const auth = false

    const aproved = false

    res.render('home', { user: user, palavra, auth, aproved })
})

app.listen(3000, () => {
    console.log('App funcionando')
})