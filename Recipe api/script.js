const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.classList.add('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value;
    fetch(`https://api.edamam.com/search?q=${searchInputTxt}&app_id=a56a38ea&app_key=5e4279147e5b09e1e9470abc0fba0401`)
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pizza&sapp_id=a56a38ea&app_key=5e4279147e5b09e1e9470abc0fba0401	`)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            mealRecipeModal(data)
        });
    }
    }

// create a modal
function mealRecipeModal(meal){
    // meal = meal.hits[0].recipe;
    let html = `
        <h2 class = "recipe-title">${meal.recipe.labeli}</h2>
       
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.classList.add('showRecipe');
}

{/* <p class = "recipe-category">${calories}</p>
<div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
</div>
<div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "">
</div>
<div class = "recipe-link">
    <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
</div> */}