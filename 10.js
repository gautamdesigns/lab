function Sort_String() {
  var inputString = document.getElementById("str").value;
  var sortedString = inputString.toLowerCase().split("").sort().join("");
  document.getElementById("result").innerHTML = sortedString;
}
