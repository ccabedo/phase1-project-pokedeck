document.addEventListener("DOMContentLoaded", () => {
    let title = document.querySelector("#header.row")
    title.innerText = "Pokédeck"
 

const url = "http://localhost:3000/pokemon"

fetch(url)
.then(res => res.json())
.then(data => data.forEach(el => renderData(el)))

const renderData = (pokemon) => {
    const ul = document.querySelector("#pokemon-list")
    const li = document.createElement("li")
    li.innerText = pokemon.name
    ul.append(li)
    li.addEventListener("click", () => {
        showPokemon(pokemon)
    })
}

const imageContainer = document.querySelector(".image-container")
const image = document.createElement("img")
imageContainer.append(image)
const description = document.querySelector("#description")
const commentUl = document.querySelector("#comment-ul")
const form = document.querySelector(".input-group")

function showPokemon(param){
    const name = document.querySelector("#pokemon-name")
    name.innerText = param.name
    image.src = param.img
    description.innerText = param.description
    commentUl.innerHTML = ""; // clearing the UL

    param.comment.forEach(comm => {
        const newComment = document.createElement("li")
        newComment.innerText = comm
        commentUl.append(newComment)
    })
}
    
form.addEventListener("submit", e => {
    e.preventDefault()
    addNewComment(e.target['input-value'].value)
    //const newCommentArray = [...param.comment, e.target['input-value'].value];
    //debugger;
    //postToJSON(newCommentArray, param.id);
})

function addNewComment(newInput) {
    const commentli = document.createElement("li")
    commentli.innerText = newInput
    commentUl.append(commentli)
}

const button = document.querySelector("#click")
button.addEventListener("click", randomPokemon)

function randomPokemon(){
    const index = Math.floor(10*Math.random());
    fetch(url).then(res => res.json())
    .then(data => {

        // const name = document.querySelector("#pokemon-name")
        // name.innerText = data[index].name

        // image.src = data[index].img

        // const description = document.querySelector("#description")
        // description.innerText = data[index].description
        showPokemon(data[index])

        
    })
}

// function postToJSON(commentArr, pokemonID) {
//     const configObj = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             "comment": commentArr
//         })
//     }
//     fetch(`${url}/${pokemonID}`, configObj)
//     .then(res => res.json())
//     .then(console.log)
// }

})