// const url = "http://localhost:3000/pokemon"

// fetch(url)
// .then(res => res.json())
// .then(data => data.forEach(el => renderData(el)))

// function renderData (pokemon) {
//     const ul = document.querySelector("#pokemon-list")
//     const li = document.createElement("li")
//     li.innerText = pokemon.name
//     ul.append(li)
//     li.addEventListener("click", () => displayPokemon())
// }

// function displayPokemon(details){
//     const characterName = document.querySelector("#character-name")
//     characterName.innerText = details.name

//     const imageDiv = document.querySelector("#image")
//     const image = document.createElement("img")
//     image.src = details.img
//     imageDiv.append(image)

//     const descriptionDiv = document.querySelector("#description")
//     const pTag = document.createElement("p")
//     pTag.innerText = details.description
//     descriptionDiv.append(pTag)

//     const formDiv = document.querySelector("#form")
//     const ulComment = document.createElement("ul")
//     const liCommentList = document.createElement("li")
//     formDiv.append(ulComment, liCommentList)
//     liCommentList.innerText = details.comment
// }

// displayPokemon()