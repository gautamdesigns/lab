function Reverse_Num() {
  var inputNumber = document.getElementById("num").value;

  // Check if the input is a valid integer
  if (/^\d+$/.test(inputNumber)) {
    var reversedNumber = parseInt(inputNumber, 10)
      .toString()
      .split("")
      .reverse()
      .join("");

    document.getElementById("result").innerHTML =
      "Digits of the number in reverse order are " + reversedNumber;
  } else {
    document.getElementById("result").innerHTML =
      "Please enter a valid integer.";
  }
}
