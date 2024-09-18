const loadPotato = () => {
  let inputText = document.getElementById("search-potato").innerHTML;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  fetch(url).then(res => res.json()).then(data => showMeals(data.meals)).catch(error => console.log("Error: ", error));
};

loadPotato("potato"); //default pototao as a parameter

const loadSoup = () => {
  let inputText = document.getElementById("search-soup").innerHTML;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  fetch(url).then(res => res.json()).then(data => showMeals(data.meals)).catch(error => console.log("Error: ", error));
};
const loadChicken = () => {
  let inputText = document.getElementById("search-chicken").innerHTML;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  fetch(url).then(res => res.json()).then(data => showMeals(data.meals)).catch(error => console.log("Error: ", error));
};
const loadBeef = () => {
  let inputText = document.getElementById("search-beef").innerHTML;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  fetch(url).then(res => res.json()).then(data => showMeals(data.meals)).catch(error => console.log("Error: ", error));
};

const showMeals = meals => {
  // console.log('Data is: ', meals);
  let container = document.getElementById("result-container");
  container.innerHTML = "";
  meals.forEach(meal => {
    let mealCard = document.createElement("div");
    mealCard.classList = "card card-compact bg-base-100 shadow-xl";

    mealCard.innerHTML = `
            <figure">
                <img class="h-96 mx-auto" src=${
    meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${
    meal.strInstructions}" >${meal.strInstructions.slice(0, 200)}...</p>
                <div class="card-actions justify-end">
                    <button onclick="handleShowDetails(${
    meal.idMeal})" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Details</button>
                </div>
            </div>   
        `;
    container.appendChild(mealCard);
  });
};

const handleShowDetails = mealId => {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url).then(res => res.json()).then(data => showMealDetails(data.meals[0])).catch(error => console.log("Error: ", error));
};

const showMealDetails = meal => {
  // console.log('Meal Details: ', meal);

  const showDetailsContainer = document.getElementById("meal-details-cotainer");
  showDetailsContainer.innerHTML = `
      <img class="h-48 mx-auto" src="${meal.strMealThumb}" alt="meal details image">
      <p class="mt-4 text-2xl text-semibild">Name: ${meal.strMeal}</p>
      <p class="mt-4 text-2xl text-semibild">Food Category: ${meal.strCategory}</p>
      <p class="text-semibild">Description: ${meal.strInstructions}</p>
      <p class="text-semibild pt-4 hover:cursor-pointer">More Details: <span class="text-blue-600">
         <a href="${meal.strSource}" target="_blank">${meal.strSource} </a> 
      </span></p>
      <p class="text-semibild pt-4 hover:cursor-pointer"> 
      <i class="fa-brands fa-youtube"></i> Watch Video: <span class="text-blue-600">
         <a href="${meal.strYoutube}" target="_blank">${meal.strYoutube} </a> 
      </span></p>
    `;
  // <button class="btn" onclick="show_meal_details.showModal()">open modal</button>
  show_meal_details.showModal();
};
