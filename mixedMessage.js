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
let tripLocation = 'TBD';
const chooseTrip = input => {
    switch(input) {
        case 'tropical':
            tripLocation = trip.tripLocation.tropical[Math.floor(Math.random() * trip.tripLocation.tropical.length)];
            break;
        case 'mountain':
            tripLocation = trip.tripLocation.mountain[Math.floor(Math.random() * trip.tripLocation.mountain.length)];
            break;
        case 'culture':
            tripLocation = trip.tripLocation.culture[Math.floor(Math.random() * trip.tripLocation.culture.length)];
            break;
        case 'adventure':
            tripLocation = trip.tripLocation.adventure[Math.floor(Math.random() * trip.tripLocation.adventure.length)];
            break;
        default:
            console.log('Please choose a valid input: tropical, mountain, culture or adventure.');
    }
};
const tripSeason = trip.tripSeason[Math.floor(Math.random() * trip.tripSeason.length)];
const tripType = trip.tripType[Math.floor(Math.random() * trip.tripType.length)];

//Create formatted output message 
const message = (name) => {
    return `Hello ${name}! You should go to ${tripLocation} in ${tripSeason} ${tripType}.`;
}

//Select trip type and execute message
chooseTrip('adventure');
console.log(message('Connor'));
