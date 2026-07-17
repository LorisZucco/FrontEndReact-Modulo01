// Nível da bateria
// 100% - Bateria Cheia
// 70% - Bateria Alta
// 30% - Bateria Média
// 15% - Bateria Baixa
// 5% - Bateria Crítica
// 0% - Bateria Descarregada

const nivelBateria = 22

if (nivelBateria === 100) {
    console.log("Bateria Cheia");
} else if (nivelBateria < 100 && nivelBateria >=70) {
    console.log("Bateria Alta");
} else if (nivelBateria < 70 && nivelBateria >= 30) {
    console.log("Bateria Média");
} else if (nivelBateria < 30 && nivelBateria >= 15){
    console.log("Bateria Baixa");
} else if (nivelBateria < 15 && nivelBateria >= 5) {
    console.log("Bateria Crítica");
} else if (nivelBateria < 5 && nivelBateria >= 0) {
    console.log("Bateria Descarregada");
} else {
    console.log("Valor inválido");
}