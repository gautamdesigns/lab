function Area_Triangle() {
  var s1 = parseInt(document.getElementById("side1").value);
  var s2 = parseInt(document.getElementById("side2").value);
  var s3 = parseInt(document.getElementById("side3").value);
  var perimeter = (s1 + s2 + s3) / 2;
  var area = Math.sqrt(
    perimeter *
      (Math.abs(perimeter - s1) *
        Math.abs(perimeter - s2) *
        Math.abs(perimeter - s3))
  );
  document.getElementById("a").innerHTML = area;
}
