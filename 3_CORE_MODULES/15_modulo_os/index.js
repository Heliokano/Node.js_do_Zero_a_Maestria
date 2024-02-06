const os = require('os')

//quantos cpus tem o servidor
console.log(os.cpus())

//quanto de memoria livre tem na máquina
console.log(os.freemem())

//qual o diretório dessa máquina
console.log(os.homedir())

//qual o sistema operacional que está rodando nessa máquina
console.log(os.type())