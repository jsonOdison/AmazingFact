//Viewheight Constants

const vh  =(v) => { var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;}

var myLazyDiv = document.getElementsByClassName('container')[0];

var myScrollFunc = ()=> {
   
    var y = window.scrollY;
    if (y >= myLazyDiv.offsetHeight-10) {
      myLazyDiv.className = "container show"
    } else {
      myLazyDiv.className = "container hide"
    }
  };
  
window.addEventListener("scroll", myScrollFunc);