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


function validateInputs(yearValue, monthValue, dayValue) {
  return !isNaN(yearValue) && yearValue < 2025 && !isNaN(monthValue) && monthValue < 13 & monthValue > 0 && !isNaN(dayValue) && dayValue > 0 && dayValue < 32
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
    const lastMonth = new Date(dateToday.getFullYear(), dateToday.getMonth(), 0)
    days += lastMonth.getDate()

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


if (!validateInputs(yearValue, monthValue, dayValue)) {
    yearInput.style.borderColor = "firebrick" 
    monthInput.style.borderColor = "firebrick" 
    dayInput.style.borderColor = "firebrick" 
    console.log("date not found")
    return
}
calculateAge()
ageStyleOne.style.display = "none"
ageStyleTwo.style.display = "none"
ageStyleThree.style.display = "none"
 
 
 userDays.textContent = calculateAge().days
 userMonths.textContent = calculateAge().months
 userYears.textContent = calculateAge().years
})








