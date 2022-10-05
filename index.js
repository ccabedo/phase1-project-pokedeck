const url = "http://localhost:3000/pokemon"

fetch(url)
.then(res => res.json())
.then(data => data.forEach(el => renderData(el)))

const renderData = (pokemon) => {
    const ul = document.querySelector("#pokemon-list")
    const li = document.createElement("li")
    li.innerText = pokemon.name
    ul.append(li)
    li.addEventListener("click", () => showPokemon(pokemon))
}


function showPokemon(param){
    const name = document.querySelector("#pokemon-name")
    name.innerText = param.name

    const imageContainer = document.querySelector(".image-container")
    const image = document.createElement("img")
    imageContainer.append(image)
    image.src = param.img

    const description = document.querySelector("#description")
    description.innerText = param.description

    const comment = document.querySelector("#comment-list")
    comment.innerText = param.comment

    const form = document.querySelector(".input-group")
    form.addEventListener("submit", () => addComment())
}

function addComment(comment) {
    const inputValue = document.querySelector("#input-value")
    comment.innerText = inputValue.value
}


