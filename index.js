const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
let thumbnail = document.getElementById("thumbnail")
let recipe = document.getElementById("recipe")
let ingredients = document.getElementById("ingredients")
let commentSection = document.getElementById("comments-section")




document.addEventListener("DOMContenLoaded", (param) => {
    renderDrinks(param);
})

function renderDrinks(input) {
    fetch(url + `${input}`)
        .then(resp1 => resp1.json())
        .then(resp2 => {
            renderDrink(resp2)
        })
}

function renderDrink(array) {
    let thumbnailImg = thumbnail
    thumbnailImg.src = array.drinks[0].strDrinkThumb + "/preview"

    let newRecipe = recipe
    newRecipe.innerText = array.drinks[0].strInstructions


    function renderIngredients(array) {
        if (array.drinks[0].strIngredient1 != null && array.drinks[0].strMeasure1 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.className = "list-item"
            ingredientsList.innerText = array.drinks[0].strMeasure1 + " " + array.drinks[0].strIngredient1
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient1) {
            let ingredientsList = document.createElement("li")
            ingredientsList.className = "list-item"
            ingredientsList.innerText = array.drinks[0].strIngredient1
            ingredients.appendChild(ingredientsList)
        }

        if (array.drinks[0].strIngredient2 != null && array.drinks[0].strMeasure2 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strMeasure2 + " " + array.drinks[0].strIngredient2
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient2) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strIngredient2
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        }

        if (array.drinks[0].strIngredient3 != null && array.drinks[0].strMeasure3 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strMeasure3 + " " + array.drinks[0].strIngredient3
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient3 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strIngredient3
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        }

        if (array.drinks[0].strIngredient4 != null && array.drinks[0].strMeasure4 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strMeasure4 + " " + array.drinks[0].strIngredient4
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient4 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strIngredient4
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        }

        if (array.drinks[0].strIngredient5 != null && array.drinks[0].strMeasure != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strMeasure5 + " " + array.drinks[0].strIngredient5
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient5 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strIngredient5
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        }


        if (array.drinks[0].strIngredient6 != null && array.drinks[0].strMeasure != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strMeasure6 + " " + array.drinks[0].strIngredient6
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        } else if (array.drinks[0].strIngredient6 != null) {
            let ingredientsList = document.createElement("li")
            ingredientsList.innerText = array.drinks[0].strIngredient6
            ingredientsList.className = "list-item"
            ingredients.appendChild(ingredientsList)
        }

    }

    renderIngredients(array)




}

let likeBttn = document.getElementById('like-button')

likeBttn.addEventListener("click", function() {
    let numLikes = document.getElementById("like-count")
    console.log(numLikes)
    num = parseInt(numLikes.textContent)
    ++num
    numLikes.textContent = num
})



let dropdown = document.getElementById("drinks")
dropdown.addEventListener("change", (param) => {
    while (ingredients.firstChild) {
        ingredients.removeChild(ingredients.firstChild);
    }
    renderDrinks(param.target.value)
})


const commentsSeciton = document.getElementById("comments-section")
const commentForm = document.getElementById("comment-form")
const placeholder = document.getElementById("placeholder")

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newComment = document.createElement("li")
    newComment.innerText = placeholder.value
    newComment.className = "comment"
    commentsSeciton.append(newComment)
    commentForm.reset();

})

