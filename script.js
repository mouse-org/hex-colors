$( document ).ready(function() {
  
  $( "#change" ).click(function() {
    
    function getColor(colorInput){
      var hexColor = $( colorInput ).val();
      if (hexColor.length === 2){
        return hexColor;
      } else if (hexColor.length === 1){
        return ("0" + hexColor);
      } else {
        return "00";
      }
    }
    var hex = "#";
    hex += getColor("#red");
    hex += getColor("#green");
    hex += getColor("#blue");
    $( "body" ).css("background-color", hex);
    $( ".color-name" ).each(function() {
      $( this ).html(hex);
    });
  });
});




