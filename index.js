window.customerName = 'bob';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

window.bestCustomer;

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

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


