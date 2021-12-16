// Code based on:
/**********************************************************************************
 * Title: How TO - JavaScript Countdown Timer
 * Auther: W3schools
 * Date: unknown
 * Code version: 
 * Availability: https://www.w3schools.com/howto/howto_js_countdown.asp
*
**********************************************************************************/
let eventDate = new Date("Dec 17, 2021 10:00:01").getTime();
let expDate = new Date("Dec 17, 2021 18:30:01").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Calculate the time remaining
  let difference = eventDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  // Output the result
  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "+ minutes + "m "
  + seconds + "s ";
    
  // If the count down is over, write some text 
  if (difference < 0) {
    document.getElementById("countDown").innerHTML = "Santa is Here!";
  }
  if (now >= expDate) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Sorry, Santa has left!";
  }
}, 1000);