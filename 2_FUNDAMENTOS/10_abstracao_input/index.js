const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota? ',
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota? ',
        },
    ])
    .then((answens) => {
        console.log(answens)
        const media = ((parseInt(answens.p1)+ parseInt(answens.p2))/2)

        console.log(`A média é: ${media}`)
    })
    .catch(err => console.log(err))