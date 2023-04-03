// - **Exercício 3**
    
//     Crie uma aplicação Node que receba uma string representando 
//     **uma tarefa.** O programa deve adicionar a **nova tarefa** em 
//     uma variável que represente uma **lista de tarefas.** A lista de
//      tarefas pode estar criada antes da execução do código. Após 
//      adicionar o item à lista, exiba a lista atualizada.

    
const tarefa = process.argv[2]


const list = ["Tarefa 01",
"Tarefa 02"
]
// let newList=[]

function aleatorio (array,item){
  array.push(item)
  return array

}
//  function addTarefa (tarefa){
//  newList = list

//  return  newList.push(tarefa)
//  }
 
const newList = aleatorio(list,tarefa)
console.log(newList);