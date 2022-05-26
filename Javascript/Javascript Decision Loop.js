// JavaScript Do While Loop

var i = 2000;       // Set counter to 1
var msg = '';    // Message

// Store 10 times table in a variable
do {
  msg += i + ' x 0.25 = ' + (i * 0.25) + '<br />';
  i++;
} while (i < 0.25); 
// Note how this is already 1 and it still runs

document.getElementById('answer').innerHTML = msg;