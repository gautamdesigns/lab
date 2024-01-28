function CountVowel() {
  var string = document.getElementById("str").value;
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var x = 0; x < string.length; x++) {
    if (vowel_list.indexOf(string[x]) !== -1) {
      vcount += 1;
    }
  }
  document.getElementById("result").innerHTML = vcount;
}
