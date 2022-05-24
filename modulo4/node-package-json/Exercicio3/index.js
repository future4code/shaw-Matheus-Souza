const tarefa = process.argv[2]
let tarefas = ["Limpar caixa de areia"]
const novaLista = [...tarefas, tarefa]
tarefas = novaLista

console.log("Nova tarefa adicionada");
console.table(tarefas)