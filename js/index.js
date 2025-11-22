
//variables
let navBtn = document.querySelector("#expandNavbar")
let sideHeader = document.querySelector(".side-header")
let menu = document.querySelector(".menu")

let sections = document.querySelectorAll("section")
let searchBtn = document.querySelector("#searchBtn")
let categoriesBtn = document.querySelector("#categoriesBtn")
let areaBtn = document.querySelector("#areaBtn")
let ingredientsBtn = document.querySelector("#ingredientsBtn")
let contactUsBtn = document.querySelector("#contactUsBtn")
let homepageSection = document.querySelector(".homepage")
let searchSection = document.querySelector(".search")
let categoriesSection = document.querySelector(".categories")
let areaSection = document.querySelector(".area")
let ingredientsSection = document.querySelector(".ingredients")
let contactUsSection = document.querySelector(".contact-us")

let loading = document.querySelector(".loading")
let homepageMeals = document.querySelector("#homepageMeals")
let categoriesMeals = document.querySelector("#categoriesMeals")
let areasMeals = document.querySelector("#areasMeals")
let ingredientsMeals = document.querySelector("#ingredientsMeals")

//contact form variables
let userName = document.querySelector("#name")
let userEmail = document.querySelector("#email")
let userPhone = document.querySelector("#phone")
let userAge = document.querySelector("#age")
let userPassword = document.querySelector("#password")
let userRepassword = document.querySelector("#repassword")

let submitBtn = document.querySelector("#submitBtn")

let deatilsSection = document.querySelector("#detailsSection")
let details = document.querySelector("#details")

let displaySection = document.querySelector("#displaySection")
let display = document.querySelector("#display")

let mealName = document.querySelector("#mealName")
let mealFirstLetter = document.querySelector("#mealFirstLetter")

let searchedMeals = document.querySelector("#searchedMeals")

//regex
var regex = {
    name: {
        value: /^[a-zA-Z\s]*$/,
        isValid: false
    },
    email: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        isValid: false
    },
    phone: {
        value: /^(\+\d{1,3}[- ]?)?\d{11}$/i,
        isValid: false
    },
    age: {
        value:/^(1[8-9]|[2-9][0-9])$/,
        isValid: false
    },
    password: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        isValid: false
    },
    repassword: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        isValid: false
    }
}

//side menu
navBtn.addEventListener("click", function () {
    if (sideHeader.style.transform == "translateX(0%)") {
        sideHeader.style.transform = "translateX(-85%)"
        navBtn.classList.add("fa-align-justify")
        navBtn.classList.remove("fa-x")
        menu.style.transform = "translateY(110%)"
    } else {
        sideHeader.style.transform = "translateX(0%)"
        navBtn.classList.remove("fa-align-justify")
        navBtn.classList.add("fa-x")
        menu.style.transform = "translateY(0%)"
    }
})

//navigation

searchBtn.addEventListener("click", function () {
    hideSections()
    searchSection.classList.remove("d-none")
})
categoriesBtn.addEventListener("click", function () {
    hideSections()
    categoriesMealsdisplay()
    categoriesSection.classList.remove("d-none")
})
areaBtn.addEventListener("click", function () {
    hideSections()
    areasdisplay()
    areaSection.classList.remove("d-none")
})
ingredientsBtn.addEventListener("click", function () {
    hideSections()
    ingrediantsdisplay()
    ingredientsSection.classList.remove("d-none")
})
contactUsBtn.addEventListener("click", function () {
    hideSections()
    contactUsSection.classList.remove("d-none")
})

//homepage
async function randomMealsdisplay() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let randomMealsList = await response.json()
    if (randomMealsList.meals.length > 0) {
        loading.classList.add("d-none")
        randomMealsList.meals.map(function (ele) {
            //console.log(ele);
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", ele.strMealThumb)
            img.setAttribute("alt", ele.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = ele.idMeal;

            let name = document.createElement("p")
            name.setAttribute("class", "text-black fs-6 fw-medium")
            name.append(ele.strMeal)

            overlay.append(name)
            item.append(img)
            item.append(overlay)

            col.append(item)

            homepageMeals.append(col)
        })
    } else {

    }
}
randomMealsdisplay()

//category page
async function categoriesMealsdisplay() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let categoriesMealsList = await response.json()
    if (categoriesMealsList.categories.length > 0) {        
        loading.classList.add("d-none")
        categoriesMealsList.categories.map(function (ele) {
            //console.log(ele);
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")

            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", ele.strCategoryThumb)
            img.setAttribute("alt", ele.strCategory)
            img.setAttribute("class", "w-100 rounded")

            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column text-center  overflow-hidden")

            let title = document.createElement("h6")
            title.setAttribute("class","text-center text-black fw-bold ")
            title.append(ele.strCategory)

            let name = document.createElement("p")
            name.setAttribute("class", "text-black  fw-medium")
            name.append(ele.strCategoryDescription)

            

            overlay.append(title)
            overlay.append(name)
            item.append(img)
            item.append(overlay)

            col.append(item)

            categoriesMeals.append(col)
        })
    } else {

    }
}

//area page
async function areasdisplay() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a")
    let categoriesAreasList = await response.json()
    console.log(categoriesAreasList);
    
    if (categoriesAreasList.meals.length > 0) {        
        loading.classList.add("d-none")
        categoriesAreasList.meals.map(function (ele) {
            console.log(ele);
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")
            col.dataset.area = ele.strArea;

            let pic = document.createElement("i")
            pic.setAttribute("class", "fa-solid fa-house-laptop fa-4x text-white")

            let title = document.createElement("h4")
            title.setAttribute("class","text-white")
            title.append(ele.strArea)
            
            col.append(pic)
            col.append(title)

            areasMeals.append(col)
        })
    } else {

    }
}

//ingrediants page
async function ingrediantsdisplay() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let ingrediantsList = await response.json()
    console.log(ingrediantsList);
    
    if (ingrediantsList.meals.length > 0) {        
        loading.classList.add("d-none")
        ingrediantsList.meals.map(function (ele) {
            console.log(ele);
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3  text-center mt-2 mb-2")
            col.dataset.ingrediant = ele.strIngredient;

            let pic = document.createElement("i")
            pic.setAttribute("class", "fa-solid fa-drumstick-bite fa-4x text-white")

            let title = document.createElement("h3")
            title.setAttribute("class","text-white")
            title.append(ele.strIngredient)

            let text = document.createElement("p")
            text.setAttribute("class","text-white")
            text.append(ele.strDescription)
            
            col.append(pic)
            col.append(title)
            col.append(text)

            ingredientsMeals.append(col)
        })
    } else {

    }
}

//contact-us form
userName.addEventListener("input",function(element){
validateForm(element)
})
userEmail.addEventListener("input",function(element){
validateForm(element)
})
userPhone.addEventListener("input",function(element){
validateForm(element)
})
userAge.addEventListener("input",function(element){
validateForm(element)
})
userPassword.addEventListener("input",function(element){
validateForm(element)
})
userRepassword.addEventListener("input",function(element){
validateForm(element)
})

//validation

function validateForm(element) {
    let input = element.target
    console.log(input.value);
 
    if (input.id == "repassword") {
        if (regex[input.id].value.test(input.value) && userRepassword.value == userPassword.value ) {
            input.classList.add("is-valid")
            input.classList.remove("is-invalid")
            regex[input.id].isValid = true
            //make alert class invisible 
            input.nextElementSibling.classList.replace("d-block", "d-none")
        } else {
            input.classList.add("is-invalid")
            input.classList.remove("is-valid")
            regex[input.id].isValid = false

            //input.nextElementSibling: gives us element right after our selected elemnt
            //make alert class visible 
            input.nextElementSibling.classList.replace("d-none", "d-block")
        }
    } else {
        if (regex[input.id].value.test(input.value)) {
            input.classList.add("is-valid")
            input.classList.remove("is-invalid")
            regex[input.id].isValid = true
            //make alert class invisible 
            input.nextElementSibling.classList.replace("d-block", "d-none")
        } else {
            input.classList.add("is-invalid")
            input.classList.remove("is-valid")
            regex[input.id].isValid = false

            //element.nextElementSibling: gives us element right after our selected elemnt
            //make alert class visible 
            input.nextElementSibling.classList.replace("d-none", "d-block")
        }
    }
    if (input.value == '') {
        input.classList.remove("is-invalid")
    }
    toggleSubmitBTn() 
}

function toggleSubmitBTn() {
    if (regex.name.isValid == true && regex.email.isValid == true && regex.phone.isValid == true && regex.age.isValid == true && regex.password.isValid == true && regex.repassword.isValid == true) {
        submitBtn.disabled = false
        submitBtn.addEventListener("mouseenter",function () {
            submitBtn.classList.remove("bg-black")
            submitBtn.classList.add("bg-danger", "text-white")
        })
        submitBtn.addEventListener("mouseleave",function () {
             submitBtn.classList.add("bg-black")
            submitBtn.classList.remove("bg-danger", "text-white")
        })
    } else {
        submitBtn.disabled = true //some attributes when written in JS are treated as boolean values such as diabled
         submitBtn.addEventListener("mouseenter",function () {
            submitBtn.classList.add("bg-black")
            submitBtn.classList.remove("bg-danger", "text-white")
        })
    }
}

//Meal Retirevel

document.addEventListener("click",function (e) {
    let mealCard = e.target.closest("[data-meal-id]");
    console.log(mealCard.dataset.mealId);       
    mealCard? retrieveMeal(mealCard.dataset.mealId) : ""
})

async function retrieveMeal(target) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${target}`)
    let mealsRetrieved = await response.json()
    details.innerHTML=''
     if (mealsRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        deatilsSection.classList.remove("d-none")
        mealsRetrieved.meals.forEach(function(element) {
        
            console.log(element);
            let col1 = document.createElement("div")
            col1.setAttribute("class", "col-md-6 bg-black text-white")

             let col2 = document.createElement("div")
            col2.setAttribute("class", "col-md-6 bg-black text-white")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "img-fluid rounded")

            let title = document.createElement("h2")
            title.setAttribute("class","text-white")
            title.append(element.strMeal)

            let instructions = document.createElement("h3")
            instructions.append("Instructions")

            let instructionsText = document.createElement("p")
            instructionsText.append(element.strInstructions)

            let area = document.createElement("h4")
            area.append(`Area : ${element.strArea}`)

            let category = document.createElement("h4")
            category.append(`Category : ${element.strCategory}`)

            let recipe = document.createElement("h4")
            recipe.append("Recipes : ")

            let list = document.createElement("ul")
            list.setAttribute("class","d-flex flex-wrap list-unstyled")
            
            let i = 1
            while (element[`strIngredient${i}`] ) {
               // console.log(i);
                let item = document.createElement("li")
                item.setAttribute("class","bg-info-subtle text-dark p-1 d-inline m-2 rounded-1")
                item.append(element[`strMeasure${i}`])
                item.append(" " + element[`strIngredient${i}`])
                list.append(item)
                i++;
            }

            let tags = document.createElement("h3")
            tags.setAttribute("class", "text-white")
            tags.append("Tags :")

            let source = document.createElement("a")
            source.setAttribute("href",element.strSource)
            source.setAttribute("class","text-decoration-none text-white")
            source.setAttribute("target","_blank")
            source.append("Source")

            let yt = document.createElement("a")
            yt.setAttribute("href",element.strYoutube)
            yt.setAttribute("class","text-decoration-none text-white")
            yt.setAttribute("target","_blank")
            yt.append("Youtube")

            let sourceBtn = document.createElement("button")
            sourceBtn.setAttribute("class","p-2 rounded-1 m-2 border border-success bg-success")
            sourceBtn.append(source)

             let ytBtn = document.createElement("button")
            ytBtn.setAttribute("class","p-2 rounded-1 m-2 border border-danger bg-danger")
            ytBtn.append(yt)

            let btns = document.createElement("div")
            btns.append(sourceBtn)
            btns.append(ytBtn)

            col1.append(img)
            col1.append(title)

            col2.append(instructions)
            col2.append(instructionsText)
            col2.append(area)
            col2.append(category)
            col2.append(recipe)
            col2.append(list)
            col2.append(tags)
            col2.append(btns)

            details.append(col1)
            details.append(col2)
    });}
    else{
        console.log("No meal found for ID:", target)
    }
    
}

//Category Retrieval

categoriesSection.addEventListener("click",function (e) {
    console.log(e.target.alt);
    let name = ""
    if (e.target.alt) {
        name = e.target.alt
        name = name.toLowerCase()
        retrieveCategories(name)
    }
})

async function retrieveCategories(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    let categoryRetrieved = await response.json()
    //console.log(categoryRetrieved);
    display.innerHTML = ""
    if (categoryRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        displaySection.classList.remove("d-none")

        categoryRetrieved.meals.forEach(function (element) {
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = element.idMeal;

            let text = document.createElement("p")
            text.setAttribute("class", "text-black fs-6 fw-medium")
            text.append(element.strMeal)

            overlay.append(text)
            item.append(img)
            item.append(overlay)

            col.append(item)

           display.append(col)
        })
    }
    else{}
    
}

//Area Retrieval

areaSection.addEventListener("click",function (e) {
    let area = e.target.closest("[data-area]");
    //console.log(area.dataset.area);
    let name = area.dataset.area
    if (name) {
        retrieveAreas(name)
    }
})

async function retrieveAreas(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    let categoryRetrieved = await response.json()
    //console.log(categoryRetrieved);
    display.innerHTML = ""
    if (categoryRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        displaySection.classList.remove("d-none")

        categoryRetrieved.meals.forEach(function (element) {
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = element.idMeal;

            let text = document.createElement("p")
            text.setAttribute("class", "text-black fs-6 fw-medium")
            text.append(element.strMeal)

            overlay.append(text)
            item.append(img)
            item.append(overlay)

            col.append(item)

           display.append(col)
        })
    }
    else{}
    
}

//Ingrediants Retrieval

ingredientsSection.addEventListener("click",function (e) {
    let ingrediant = e.target.closest("[data-ingrediant]");
    //console.log(area.dataset.area);
    let name = ingrediant.dataset.ingrediant
    if (name) {
        retrieveIngrediants(name)
    }
})

async function retrieveIngrediants(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    let categoryRetrieved = await response.json()
    //console.log(categoryRetrieved);
    display.innerHTML = ""
    if (categoryRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        displaySection.classList.remove("d-none")

        categoryRetrieved.meals.forEach(function (element) {
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = element.idMeal;

            let text = document.createElement("p")
            text.setAttribute("class", "text-black fs-6 fw-medium")
            text.append(element.strMeal)

            overlay.append(text)
            item.append(img)
            item.append(overlay)

            col.append(item)

           display.append(col)
        })
    }
    else{}
    
}

//Search Retireval

mealName.addEventListener("input",function (e) {
    let name = e.target.value;
    if (name == "") {
        searchedMeals.innerHTML=''
    }else{
        retrieveMealByName(name)    
    }
})

async function retrieveMealByName(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let categoryRetrieved = await response.json()
    //console.log(categoryRetrieved);
    display.innerHTML = ""
    if (categoryRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        searchSection.classList.remove("d-none")
        displaySection.classList.remove("d-none")

        categoryRetrieved.meals.forEach(function (element) {
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = element.idMeal;

            let text = document.createElement("p")
            text.setAttribute("class", "text-black fs-6 fw-medium")
            text.append(element.strMeal)

            overlay.append(text)
            item.append(img)
            item.append(overlay)

            col.append(item)

           searchedMeals.append(col)
        })
    }
    else{}
    
}

mealFirstLetter.addEventListener("input",function (e) {
    let name = e.target.value;
    if (name == "") {
        searchedMeals.innerHTML=''
    }else{
    retrieveMealFirstLetter(name)
    }
})

async function retrieveMealFirstLetter(name) {
    let response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
    let categoryRetrieved = await response.json()
    //console.log(categoryRetrieved);
    display.innerHTML = ""
    if (categoryRetrieved.meals.length > 0) {        
        loading.classList.add("d-none")
        hideSections()
        searchSection.classList.remove("d-none")
        displaySection.classList.remove("d-none")

        categoryRetrieved.meals.forEach(function (element) {
            let col = document.createElement("div")
            col.setAttribute("class", "col-md-3")


            let item = document.createElement("div")
            item.setAttribute("class", "position-relative p-0 overflow-hidden")

            let img = document.createElement("img")
            img.setAttribute("src", element.strMealThumb)
            img.setAttribute("alt", element.strMeal)
            img.setAttribute("class", "w-100 rounded")


            let overlay = document.createElement("div")
            overlay.setAttribute("class", "overlay p-2 d-flex flex-column justify-content-center")
            item.dataset.mealId = element.idMeal;

            let text = document.createElement("p")
            text.setAttribute("class", "text-black fs-6 fw-medium")
            text.append(element.strMeal)

            overlay.append(text)
            item.append(img)
            item.append(overlay)

            col.append(item)

           searchedMeals.append(col)
        })
    }
    else{}
    
}

function hideSections() {
    sections.forEach(ele => {
        ele.classList.add("d-none")
    });
}