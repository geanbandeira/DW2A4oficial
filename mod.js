import { adicionarTarefa, listarTarefas, limparTarefas } from "./tarefas.js";
adicionarTarefa('Estudar JS');
adicionarTarefa('Correr');
adicionarTarefa('Beber 2L de água');

console.log('Tarefas Pendentes');
console.log(listarTarefas());


limparTarefas();
console.log('tarefas apos a limpeza');
console.log(listarTarefas());
