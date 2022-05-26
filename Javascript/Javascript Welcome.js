// JavaScript For Welcome

//var today = new Date( );
//var hourNow = today.getHours();
//var greeting;
//
//
//if (hourNow > 18) {
//	greeting = 'Good Evening Welcome to the Cinema House';
//}	else if (hourNow >12) {
//	greeting = 'Good Afternon Welcome to the Cinema House';
//}	else if (hourNow > 0) {
//	greeting = 'Good Morning Welcome to the Cinema House';
//}	else {
//	greeting = 'Welcome';
//}
//document.write('<h2>' + greeting + '</h2>');
//
//// Offer Expires
//var hotel = {
//	name: 'Parking',
//	roomRate: 240,
//	discount: 15,
//	offerPrice: function() {
//		var offerRate = this.roomRate * ((100 - this.discount) / 100);
//		return offerRate;
//	}
//};
// 
//var hotelName, roomRate, specialRate;
//
//hotelName = document.getElementId('hotelName');
//roomRate = document.getElementId('roomRate');
//specialRate = document.getElementId('specialRate');
//
//hotelName.textContent = hotel.name;
//roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
//specialRate.textContent = '$' + hotel.offerPrice();
//
//var expiryMsg; // Message displyed to users
//var today; // Todays date
//var elEnds; // The element that shows the message about the offer ending
//
//function offerExpires(today) {
//	var weekFromToday, day, date, month, year, dayNames, monthNames;
//	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
//	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//	monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//	day = dayNams[weekFromToday.getDay()];
//	date = weekFromToday.getDate();
//	month = monthNames[weekfromToday.getMonth()];
//	year = weekFromToday.getFullYear();
//	
//	expiryMsg = 'Offer expires next ';
//	expiryMsg += day + ' <br />'( + date + ' ' + month + ' ' + year + '.');
//	return expiryMsg;
//}
// 
//today = new Date();
//elEnds = document.getElementById('offerEnds');
//elEnds.innerHTML = offerExpires(today);
//
//}());


(function() {

  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a hotel object using object literal syntax
  var hotel = {
    name: 'Special Deal for Cinema House Customers',
    roomRate: 2500, // Amount in dollars
    discount: 20,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  // Write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate;                    // Declare variables

  hotelName = document.getElementById('hotelName');        // Get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;                      // Write hotel name
  roomRate.textContent =  '$' + hotel.roomRate.toFixed(2); // Write room rate
  specialRate.textContent = '$' + hotel.offerPrice();      // Write offer price


  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['April', 'May', 'June'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires at the end of June ';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
}());