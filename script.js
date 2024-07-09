
    var num = document.getElementById("displayNumber");
    num.value = 4;
    var invalidNum = document.getElementById("invNumber");
    imageNum = document.querySelectorAll("img");
    var imageCount = 0;
    imageNum.forEach(function(img) {
        imageCount++;
    })
   
    function onDisplay() {
      var takeNum = num.value;
      console.log(takeNum);
      console.log(imageCount);

      if (takeNum < 1 && takeNum > imageCount) {
        invalidNum.textContent = "The number is More than Image";
      }else{
      if (takeNum % 2 !== 0) {
        invalidNum.textContent = "Invalid value";
      }
    }
    }
