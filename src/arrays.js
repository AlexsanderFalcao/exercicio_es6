const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Maria", nota: 7 },
  { nome: "João", nota: 4 },
  { nome: "Pedro", nota: 9 },
  { nome: "Luana", nota: 6 },
];

function classificarDesempenho(nota) {
  if (nota >= 9) return 'Excelente';
  if (nota >= 7) return 'Bom';
  if (nota >= 6) return 'Satisfatório';
  return 'Insuficiente';
}

function filtrarAlunosAprovados(alunos, notaMinima = 6) {
  return alunos
    .filter(aluno => aluno.nota >= notaMinima)
    .map(aluno => ({
      ...aluno,
      status: classificarDesempenho(aluno.nota),
    }))
    .sort((a, b) => b.nota - a.nota);}

const alunosAprovados = filtrarAlunosAprovados(alunos, 6);
console.log("Alunos Aprovados (Classificados e Ordenados):");
alunosAprovados.forEach(aluno => {
  console.log(`${aluno.nome}: Nota ${aluno.nota} - ${aluno.status}`);
});
