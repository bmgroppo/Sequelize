const url = "http://localhost:3000/livros"

const nome = document.getElementById("nome")
const descricao = document.getElementById("descricao")
const imagem = document.getElementById("imagem")
const preco = document.getElementById("preco")
const btnCriar = document.getElementById("btnCriar")

btnCriar.addEventListener("click", (e) => {
    e.preventDefault()
    
    const data = {
        nome: nome.value,
        descricao: descricao.value,
        imagem: imagem.value,
        preco: preco.value
    }   

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(response => alert (`Livro ${response.nome} adicionado com sucesso`))
    .catch(error => console.log(error))
})