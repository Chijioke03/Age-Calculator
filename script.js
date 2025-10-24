const dateToday = new Date()
const dayInput = document.getElementById("day")
const monthInput = document.getElementById("month")
const yearInput = document.getElementById("year")
const arrowBtn = document.getElementById("arrow-btn")
const errorMessage = document.getElementById("error")
const userYears = document.getElementById("display-years")
const userMonths = document.getElementById("display-months")
const ageStyleOne = document.querySelector(".one")
const ageStyleTwo = document.querySelector(".two")
const ageStyleThree = document.querySelector(".three")
const userDays = document.getElementById("display-days")


const userDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value)


function validateInputs(years, months, days) {
  return !isNaN(years) && years < dateToday.getFullYear() && !isNaN(months) && months <= 12 & months > 0 && !isNaN(days) && days >= 1 && days <= 31
}




function calculateAge() {
let yearValue = yearInput.value
let monthValue = monthInput.value
let dayValue = dayInput.value
let years = dateToday.getFullYear() - userDate.getFullYear()
let months  = dateToday.getMonth() - userDate.getMonth()
let days = dateToday.getDate() - userDate.getDate()


 if (!dayValue || !monthValue || !yearValue) {
    errorMessage.textContent = "This field is required"
    }

 

if (days < 0) {
    months--

}

if(months < 0) {
    years--
    months += 12
}


return {
    years: years,
    months: months,
    days: days
}
}
 




arrowBtn.addEventListener("click", ()=> {
let yearValue = yearInput.value
let monthValue = monthInput.value
let dayValue = dayInput.value
let years = dateToday.getFullYear() - yearValue
let months  = dateToday.getMonth() - monthValue
let days = dateToday.getDate() - dayValue

if (!validateInputs(years, months, days)) {
    yearInput.style.borderColor = "firebrick" 
    monthInput.style.borderColor = "firebrick" 
    dayInput.style.borderColor = "firebrick" 
    return
}

ageStyleOne.style.display = "none"
ageStyleTwo.style.display = "none"
ageStyleThree.style.display = "none"
 calculateAge()
 
 userDays.textContent = days
 userMonths.textContent = months
 userYears.textContent = years
})








