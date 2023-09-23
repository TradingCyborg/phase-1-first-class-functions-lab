// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  // createFareMultiplier() - Higher-order function
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // fareDoubler() - Doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler() - Triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers() - Selects drivers based on the provided function
  function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
  }
  
  // Example functions for selecting drivers
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Example usage:
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  const firstTwoDrivers = selectDifferentDrivers(driversArray, returnFirstTwoDrivers);
  const lastTwoDrivers = selectDifferentDrivers(driversArray, returnLastTwoDrivers);
  
  console.log(firstTwoDrivers); // Output: ['Driver1', 'Driver2']
  console.log(lastTwoDrivers);  // Output:
  