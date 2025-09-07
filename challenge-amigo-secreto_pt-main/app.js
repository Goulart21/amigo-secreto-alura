
let listaAmigos = document.getElementById("listaAmigos")


let guardarAmigo = []
function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value

    if(amigo.trim === ""){
        alert("Digite um nome")
        return
    }

    guardarAmigo.push(amigo)
    listaAmigos.innerHTML = `${guardarAmigo}`
    document.getElementById("amigo").value = ""
 
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado")
    let sorteado = guardarAmigo[Math.floor(Math.random() * guardarAmigo.length)]
    resultado.innerHTML = `${sorteado}`


}


