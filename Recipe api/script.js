const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details");
searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe);


function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value;
  fetch(`https://api.edamam.com/search?q=${searchInputTxt}&app_id=a56a38ea&app_key=5e4279147e5b09e1e9470abc0fba0401`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      if (data.hits) {
        data.hits.forEach((meal) => {
          html += `
                    <div class = "meal-item">
                        <div class = "meal-img">
                            <img src = "${meal.recipe.image}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3 value=${meal.recipe.label}>${meal.recipe.label}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
            </div>

                `;
        });
        mealList.classList.remove("notFound");
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add("notFound");
      }

      mealList.innerHTML = html;
    });
}

function getMealRecipe(e) {
  e.preventDefault();
  // let mealItem = e.target.parentElement.children[0].getAttribute("value");
  let mealItem =e.target.parentElement.getElementsByTagName('h3')[0].innerHTML;
  // console.log(mealItem);
  // if (e.target.classList.contains("recipe-btn")) {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${mealItem}&sapp_id=a56a38ea&app_key=5e4279147e5b09e1e9470abc0fba0401	`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        mealRecipeModal(data);
      });
    }
    // }
    
    function mealRecipeModal(meal) 
  {
  let html = `
  <button type = "button" class = "btn recipe-close-btn" onclick=rc() >
          <i class = "fas fa-times"></i>
        </button>
        <div class = "meal-details-content">
    <h2 class = "recipe-title">${meal.hits[0].recipe.label}</h2>
    <p class = "recipe-category">Calories=${meal.hits[0].recipe.calories}</p>
<div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p><span>${meal.hits[0].recipe.ingredientLines.map((ing) => `<li class="ing">${ing}</li>`)
      .join("")}</span></p>
</div>
<div class = "recipe-meal-img">
    <img src = "${meal.hits[0].recipe.image}" alt = "">
</div>
<div class = "recipe-link">
    <a href = "${meal.hits[0].recipe.url}" target = "_blank">Watch Video</a>
</div>
 </div>
    `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.classList.add("showRecipe");
}


function rc()
{
  mealDetailsContent.classList.remove("showRecipe");

}

{/* <div class = "meal-item" data-id = "${meal.idMeal}"></div> */}