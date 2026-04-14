/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let numDaysSelected = 0;
let dailyRate = 35;
const days = document.querySelectorAll("li");
const totalCost = document.getElementById("calculated-cost");
const clearDays = document.getElementById("clear-button");
const halfDay = document.getElementById("half");
const fullDay = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function clickDay(){
  if (!this.classList.contains("clicked")) {
    numDaysSelected += 1;
    this.classList.add("clicked");
    console.log(numDaysSelected);
    recalculate();
  }
}
days.forEach(day => {
  day.addEventListener("click", clickDay);
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function reset(){
  days.forEach(day => {
    day.classList.remove('clicked');
    totalCost.textContent = 0;
  });
  numDaysSelected = 0;
}
clearDays.addEventListener("click", reset);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function setPriceHalf(){
  dailyRate = 20;
  halfDay.classList.add("clicked");
  fullDay.classList.remove("clicked");
  recalculate();
}
halfDay.addEventListener("click", setPriceHalf);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function setPriceFull(){
  dailyRate = 35;
  fullDay.classList.add("clicked");
  halfDay.classList.remove("clicked");
  recalculate();
}
fullDay.addEventListener("click", setPriceFull);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
  totalCost.innerHTML = dailyRate*numDaysSelected;
}

