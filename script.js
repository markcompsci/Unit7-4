const AGE = document.getElementById('age-input')
const DAY = document.getElementById('day-of-week')
const CALC = document.getElementById('calc-btn')
const MSG = document.createElement('p')
document.body.appendChild(MSG)

CALC.addEventListener('click', () => {
  if ((DAY.value === 'Tuesday' || DAY.value === 'Thursday') || (AGE.value > 12 && AGE.value < 21)) {
    MSG.textContent = 'You qualify for a discount!'
  } else {
    MSG.textContent = 'There aren\'t any discounts.'
  }
})
