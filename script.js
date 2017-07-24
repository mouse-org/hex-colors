$( document ).ready(function() {
  document.getElementById("red-dec").disabled = true;
  document.getElementById("green-dec").disabled = true;
  document.getElementById("blue-dec").disabled = true;

  $( "input" ).keyup(function() {
    update();
  })
  $( "#change" ).click(function() {
    update();
  });
});

var digits = "0123456789abcdefABCDEF"

function update() {

  function badInput(input) {
    $( input ).val("");
    alert("Use only Hex digits: 0123456789ABCDEF")
  }

  function updateDecimal(hexId, hexNum) {
    var id = hexId + "-dec";
    var digit16 = {
      hex: 0
    };
    var digit1 = {}
    if (hexNum.length === 2) {
      digit16["hex"] = hexNum[0];
      digit1["hex"] = hexNum[1];
    } else {
      digit1["hex"] = hexNum[0];
    }

    function hexToDec(digit) {
      var nonDec = "abcdef";
      var index = nonDec.indexOf(digit.toLowerCase());
      if (index > -1) {
        return (index + 10);
      } else {
        return digit;
      }
    }

    digit1["dec"] = hexToDec(digit1.hex);
    digit16["dec"] = hexToDec(digit16.hex);

    var decimal = ((16 * parseInt(digit16.dec)) + parseInt(digit1.dec)).toString()

    $( id ).val(decimal);


  }

  function getColor(colorInput){
    var hex = "00";
    var hexColor = $( colorInput ).val();
    if (hexColor.length === 2){
      if (
        digits.indexOf(hexColor[0]) > -1
        &&
        digits.indexOf(hexColor[1]) > -1
      ) {
        hex = hexColor;
      } else {
        badInput(colorInput);
      }

    } else if (hexColor.length === 1){
      if (digits.indexOf(hexColor[0]) > -1){
        hex = ("0" + hexColor);
      } else {
        badInput(colorInput);
      }
    }

    updateDecimal(colorInput, hex);
    return hex;
  }
  var hex = "#";
  hex += getColor("#red");
  hex += getColor("#green");
  hex += getColor("#blue");
  $( "body" ).css("background-color", hex);
  $( ".color-name" ).each(function() {
    $( this ).html(hex);
  });
}
