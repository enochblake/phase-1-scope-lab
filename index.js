// Declare customerName in global scope
window.customerName = 'bob';

// Modify customerName to uppercase
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Set bestCustomer to 'not bob'
window.bestCustomer;

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Overwrite bestCustomer with a new value
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Attempt to reassign a constant variable (will throw an error)
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

module.exports = {
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};


