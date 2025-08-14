const url = "http://localhost:3000/livros"
const container = document.getElementById("container")

async function getLivros(){
    const response = await fetch(url)
    const livros = await response.json()

    livros.map((livro) => {
        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const imagem = document.createElement("img")
        const preco = document.createElement("p")
        const link = document.createElement("a")
    
        nome.innerText = livro.nome
        imagem.src = livro.imagem
        preco.innerText = `R$ ${livro.preco}`
        link.innerText = "Mais informações"
        link.setAttribute("href", `livro.html?id=${livro.id}`)

        div.appendChild(nome)
        div.appendChild(imagem)
        div.appendChild(preco)
        div.appendChild(link)

        container.appendChild(div)
    })
}

getLivros()