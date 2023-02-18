function convertToTheNearestNaira(amount) {
  amount = Math.round(amount);
  amount = amount.toString();
  if (parseInt(amount.slice(-1)) < 5) {
    return parseInt(amount.slice(0, -1) + "0");
  }
  return parseInt(amount.slice(0, -1) + "0") + 10;
}

// make it work
convertToTheNearestNaira(10708)