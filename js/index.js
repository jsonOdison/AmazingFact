//Viewheight Constants

const vh  =(v) => { var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;}

var myLazyDiv = document.getElementsByClassName('container')[0];
var myLazyDiv2 = document.getElementsByClassName('container')[1];

var myScrollFunc = ()=> {
   
    var y = window.scrollY;
    if (y >= myLazyDiv.offsetHeight-10 || y >= myLazyDiv2.offsetHeight-10) {
      myLazyDiv.className = "container show";
      myLazyDiv2.className = "container show";

    } else {
      myLazyDiv.className = "container hide";
      myLazyDiv2.className = "container hide";
    }
  };

window.addEventListener("scroll", myScrollFunc);