const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
};
function returnLastTwoDrivers() {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}
function fareDoubler(fare){
   return createFareMultiplier(2)(fare);
}
function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
}
// Code your solution in this file!
