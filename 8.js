// Get a random integer from 1 to 10 inclusive
var num = Math.ceil(Math.random() * 10);
var gnum = prompt("Guess the number between 1 and 10 inclusive");
if (!isNaN(gnum)) {
  if (gnum == num) {
    alert("Good Job!!! You guessed the correct number.");
  } else {
    alert("Sorry, not matched. The number was " + num);
  }
} else {
  alert("Invalid input. Please enter a valid number between 1 and 10.");
}
