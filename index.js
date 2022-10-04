fetch("http://localhost:3000/pokemon")
.then(res => res.json())
.then(data => {
data.forEach(character => {
    renderData(character)
})
})
renderData = (eachPokemon) => {
        const ul = document.querySelector("#pokemon-list")
        const li = document.createElement("li")
        li.innerText = eachPokemon.name
        ul.append(li)

        li.addEventListener("click", e => {
            e.preventDefault()
            const characterName = document.querySelector("#character-name")
            characterName.innerText = eachPokemon.name

            const imageDiv = document.querySelector("#image")
            const image = document.createElement("img")
            image.src = eachPokemon.img
            imageDiv.append(image)

            const descriptionDiv = document.querySelector("#description")
            const pTag = document.createElement("p")
            pTag.innerText = eachPokemon.description
            descriptionDiv.append(pTag)

            const formDiv = document.querySelector("#form")
            const ulComment = document.createElement("ul")
            const liCommentList = document.createElement("li")
            formDiv.append(ulComment, liCommentList)
            liCommentList.innerText = eachPokemon.comment
        })
    }
    haha

