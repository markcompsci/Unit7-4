const AGE = document.getElementById('age-input')
const DAY = document.getElementById('day-of-week')
const MSG = document.createElement('p')
document.body.appendChild(MSG)


// function that is called when you click out of the div that holds the two fields. 
// It will check if the day is Tuesday or Thursday, if so, you get a discount
// Or, if your age is in between 12 and 21 you will also get a discount
// Otherwise, no discount
function calculateDiscount () {
  if ((DAY.value === 'Tuesday' || DAY.value === 'Thursday') || (AGE.value > 12 && AGE.value < 21)) {
    MSG.textContent = 'You qualify for a discount!'
  } else {
    MSG.textContent = 'There aren\'t any discounts.'
  }
}

if (null) {
  calculateDiscount()
}