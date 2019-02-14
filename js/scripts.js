function leapyear() {
  var input = parseInt(document.getElementById("year").value);
  if(input % 4 ===0 && input % 100 !== 0){

    alert("True");
  } else if (input % 100 ===0 && input % 400 === 0) {

    alert(" True");
  } else {
    alert("False");
  }
}
