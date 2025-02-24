let amigos = [] //array que recebe os nomes do usuário. Os nomes são recebidos pela função adicionarAmigo() {linha 4}
nome = "" //variavel que faz a verificação do nome escrito pelo usuario.
let resultado

function adicionarAmigo(){
    let nome = document.querySelector("input").value //nome recebendo o nome colocado pelo usuario
    //verificação do nome:
    if (nome==""){
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(nome)
    //verificação do nome.
    //adicionando um nome na lista de amigos após a verificação e a adição dele na array + quebra de linha
        document.getElementById("listaAmigos","quebra").innerHTML = amigos.join("<br>")
    //limpando a caixa de texto:
        nome = document.querySelector("input")
        nome.value = ""
    } 
}

function sortearAmigo(){
    let geracaoSorteio = parseInt(Math.random()*amigos.length)
    let sorteio = geracaoSorteio
    if (amigos==[]){
        alert("Por favor, insira um nome.")
    } else{
        document.getElementById("resultado").innerHTML = amigos.at(sorteio)
    }
    
}
