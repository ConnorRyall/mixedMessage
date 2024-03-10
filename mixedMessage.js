//Create arrays for trip location, season and type
const trip = {
tripLocation: {
    tropical: ['Brazil', 'Bali', 'Thailand', 'Bermuda', 'Canary Islands'],
    mountain: ['Norway', 'Austria', 'Switzerland', 'Chile', 'Nepal'],
    culture: ['Japan', 'Spain', 'Morocco', 'India', 'South Korea'],
    adventure: ['Antartica', 'Australia', 'Zimbabwe', 'New Zealand', 'Iceland']
},
tripSeason: ['summer', 'fall', 'winter', 'spring'],
tripType: ['solo', 'with friends', 'with family'],
};

//Create trip variables to hold random elements from arrays
const tripLocation = trip.tripLocation[Math.floor(Math.random() * trip.tripLocation.length)];
const tripSeason = trip.tripSeason[Math.floor(Math.random() * trip.tripSeason.length)];
const tripType = trip.tripType[Math.floor(Math.random() * trip.tripType.length)];

//Create variable to hold trip variables
const tripData = [tripLocation, tripSeason, tripType];

//Create formatted output message 
const message = name => {
    return `Hello ${name}! You should go to ${tripLocation} in ${tripSeason} ${tripType}.`;
}
//Execute message
console.log(message('Connor'));