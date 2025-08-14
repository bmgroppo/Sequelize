const container = document.getElementById("container");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


fetch("http://localhost:3000/livros/" + id)
  .then((response) => response.json())
  .then(response => {
    if (!response || !response.nome) {
      container.innerHTML = "<p>Livro não encontrado.</p>";
      return;
    }
    document.title = response.nome

function fetchExcluir(){
    fetch("http://localhost:3000/livros/"+id, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then(response => alert(response.message))
}
        const div = document.createElement("div")
        const div2 = document.createElement("div")

        const nome = document.createElement("h2")
        const imagem = document.createElement("img")
        const preco = document.createElement("p")
        const descricao = document.createElement("p")

        const btnExcluir = document.createElement("button")
        btnExcluir.setAttribute("id", "btnExcluir")
        btnExcluir.innerText = "Excluir"
        btnExcluir.addEventListener("click", () => {
            fetchExcluir()
        })

        nome.innerText = response.nome
        preco.innerText = `R$ ${response.preco}`
        imagem.src = response.imagem
        descricao.innerText = response.descricao


        div.appendChild(imagem)
        div.appendChild(nome)
        div.appendChild(preco)
        div.appendChild(descricao)
        div.appendChild(btnExcluir)

        container.appendChild(div)
        container.appendChild(div2)
    })
