// APROVAÇÃO

// Verificar a aprovação do aluno

// Aprovado media maior ou igual a 7
// Recuperação media entre 5 e 7
// Reprovado media menor que 5

const media = 4

if (media >= 7) {
    console.log("Aprovado!")
} else if (media >= 5 && media < 7) {
    console.log("Em recuperação!")
} else {
    console.log("Reprovado!")
}