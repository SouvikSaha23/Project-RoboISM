$(document).ready(function(){
  console.log("It worked!");
  var index = 1;
  currentImage(index);

  function currentImage(x){
    $("#slideshow").backstretch("img_"+ x + ".jpg");
    index = x;
  }

  function Image(n){
    index += n;
    if(index <= 0)
      index = 5;
    else if(index >= 6)
      index = 1;
    $("#slideshow").backstretch("img_"+ n + ".jpg");
  }

});