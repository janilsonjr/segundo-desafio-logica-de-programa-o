

function mainRankCalculator(victories = 0, defeats = 0){
    function vicDiffCalculator(victories = 0, defeats = 0) {
        vicDiff = victories - defeats
        return vicDiff
    }
    
    let diff = vicDiffCalculator(victories, defeats)
    
    
    function rankPosition (netVictories){
        if(netVictories<=10){
            level = "Ferro"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else if (netVictories>10 && netVictories<=20){
            level = "Bronze"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else if (netVictories>20 && netVictories <= 50){
            level = "Prata"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else if (netVictories>50 && netVictories<=80){
            level = "Ouro"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else if (netVictories>80 && netVictories<=90){
            level = "Diamante"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else if (netVictories > 90 && netVictories <=100){
            level = "Lendário"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } else {
            level = "Imortal"
            console.log(`O Player tem ${netVictories} de saldo de vitórias e está no nível ${level}!`)
        } 
        return 
    }
    
    
    
    
    return rankPosition(diff)
}

mainRankCalculator(99,9)

mainRankCalculator(20,30)

mainRankCalculator(500,450)

mainRankCalculator(1500,1112)