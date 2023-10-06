

const jogadasDisponiveis = ['pedra','papel','tesoura']

let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

function jogar(jogadaDoUsuario) {
    // 1.saber o que o usuario jogou [x]
    // 2.fazer o computador ter umajogada
    // 3. saber quem ganhou
    // 4.atualizar pontuações

    const jogadaDoComputador = jogadasDisponiveis[Math.floor(Math.random() *3)]

    


    if(jogadaDoComputador === jogadaDoUsuario){
        alert('EMPATE, o computador jogou o mesmo que você!')
    } else if(jogadaDoComputador === 'pedra'){
        if(jogadaDoUsuario === 'papel'){
            alert('GANHOU!!, computador jogou pedra!')
            pontuacaoUsuario++
        } else {
            alert('PERDEU, computador jogou pedra!!')
            pontuacaoComputador++
        }
    } else if(jogadaDoComputador === 'papel'){
        if(jogadaDoUsuario === 'pedra'){
            alert('PERDEU, computador jogou papel!!')
            pontuacaoComputador++
        }else {
            alert('GANHOU!!, computador jogou papel!!')
            pontuacaoUsuario++
        }
    }else{
        if(jogadaDoUsuario === 'pedra'){
            alert('GANHOU!!, computador jogou tesoura!!')
            pontuacaoUsuario++
    } else{
        alert('PERDEU, computador jogou tesoura!!')
        pontuacaoComputador++
    }
}
    document.querySelector('#pontuacaousuario').innerText = pontuacaoUsuario;
    document.querySelector('#pontuacaocomputador').innerText = pontuacaoComputador;

}