const allInput = document.querySelectorAll(".input");
const submitBtn = document.getElementById("submit")
const cardsBlock = document.getElementById("cards")
const doneList = document.getElementById("doneList")
const title = document.getElementById("title")
const description = document.getElementById("description")
const date = document.getElementById("date")

let error = true
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    verifyContent(title)
    verifyContent(description)
    verifyContent(date)

    if (verifyContent(title) && verifyContent(description) && verifyContent(date)) {
        createTask(title.value, description.value, date.value)
        title.value = ""
        description.value = ""
        date.value = ""
    }
})
function verifyContent(input) {
    if (input.value.trim() == "") {
        input.style.border = "1px solid red"
        input.style.background = "rgba(255,0,0, .2)"
        error = false
    } else {
        input.style.border = "1px solid white"
        input.style.background = "white"
        error = true

    }
    return error
}



function createTask(title, description, date, act = 1) {
    const card = document.createElement('div')
    card.className = "card"
    const action = document.createElement('div')
    action.className = "action"

    const titleTag = document.createElement("p")
    titleTag.className = "titleCard"
    const titleText = document.createTextNode(title)
    titleTag.appendChild(titleText)

    const descriptionTag = document.createElement("p")
    descriptionTag.className = "descriptionCard"
    const descriptionText = document.createTextNode(description)
    descriptionTag.appendChild(descriptionText)

    const dateTag = document.createElement("p")
    dateTag.className = "dateCard"
    const dateText = document.createTextNode(date)
    dateTag.appendChild(dateText)

    const removeBtn = document.createElement("button")
    removeBtn.className = "remove"
    removeBtn.innerText = "Remove"

    removeBtn.addEventListener("click", () => {

        card.remove()
    })
    action.appendChild(removeBtn)

    card.appendChild(titleTag)
    card.appendChild(descriptionTag)
    card.appendChild(dateTag)
    card.appendChild(action)
    if (act == 1) {
        const finishBtn = document.createElement("button")
        finishBtn.className = "finish"
        finishBtn.innerText = "Done"

        finishBtn.addEventListener("click", () => {
            createTask(title, description, date, 0)
            card.remove()
        })
        action.appendChild(finishBtn)
        cardsBlock.appendChild(card)
    } else {
        doneList.appendChild(card)

    }






}




