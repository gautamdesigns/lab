function Convert_Upper() {
  var str = document.getElementById("line").value;
  var array1 = str.split(" ");
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  document.getElementById("result").innerHTML =
    "The sentence after conversion is: " + newarray1.join(" ");
}
