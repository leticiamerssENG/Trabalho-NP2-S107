const professores = require('./professoresConst');

class MockHorarioAtendimento {
    busca(id){
        if(id==10){
            
            return professores.CHRIS
        }else if(id ==20){
            return professores.KARINA

        }else if(id == 30){
            return professores.VITORIA
        }else{
            throw new Error("ID inválido: " + id);
        }
    }
    professorExists(id) {
        const list = []
        list.push(10)
        list.push(20)
        list.push(30)
        list[10] = professores.CHRIS
        list[20] = professores.KARINA
        list[30] = professores.VITORIA
        return list.includes(id);
    }

    determinarPredio(sala) {
        const salaNum = parseInt(sala);
        if (salaNum >= 1 && salaNum <= 5) {
            return "1";
        } else if (salaNum >= 6 && salaNum <= 10) {
            return "2";
        } else if (salaNum >= 11 && salaNum <= 15) {
            return "3";
        } else if (salaNum >= 16 && salaNum <= 20) {
            return "4";
        } else if (salaNum >= 21 && salaNum <= 25) {
            return "5";
        } else {
            return "6";
        }
    }
    
} module.exports = MockHorarioAtendimento