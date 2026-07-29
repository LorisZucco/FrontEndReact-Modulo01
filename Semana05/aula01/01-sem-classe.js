const player1 = {
    name: "Larry James",
    score: 0,
    showScore(){
        console.log(`O jogador ${this.name} tem ${this.score} pontos.`)
    }
}

const player2 = {
    name: "Jeremy Jeremia",
    score: 0,
    showScore(){
        console.log(`O jogador ${this.name} tem ${this.score} pontos.`)
    }
}
player1.showScore();
player2.showScore(); 