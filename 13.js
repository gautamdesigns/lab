function Power() {
  var b = parseInt(document.getElementById("base").value);
  var e = parseInt(document.getElementById("expo").value);

  if (isNaN(b) || isNaN(e)) {
    document.getElementById("result").innerHTML =
      "Please enter valid numeric values for base and exponent.";
  } else {
    var ans = 1;
    for (var i = 1; i <= e; i++) {
      ans = b * ans;
    }
    document.getElementById("result").innerHTML =
      "Value of " + b + " to the power " + e + " is " + ans;
  }
}
