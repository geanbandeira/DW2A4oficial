let tarefas = [];

function adicionarTarefa(tarefa){
    tarefas.push(tarefa);
}

function listarTarefas(){
    return tarefas;

}

function limparTarefas(){
    tarefas = [];
}
export{
    adicionarTarefa, listarTarefas, limparTarefas
};