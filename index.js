// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

setBestCustomer()
console.log(bestCustomer)

overwriteBestCustomer()
console.log(bestCustomer)

const leastFavoriteCustomer = 'someone'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else' 
}

changeLeastFavoriteCustomer()
