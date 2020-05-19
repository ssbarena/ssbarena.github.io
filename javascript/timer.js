document.querySelector(".startBtn").addEventListener("click",clock);

function clock(){
  var startingMinutes = 01;
  var time = startingMinutes * 60;
  var countDown = document.querySelector(".timer");

  var x = setInterval(updateCountdown,1000);
  function updateCountdown(){
    var minutes = Math.floor(time/60);
    var seconds = time % 60;
    // seconds = seconds < 10 : '0' = seconds : seconds;
    if(seconds<10){
      seconds = "0"+seconds;
    }
    countDown.textContent= minutes+"min" +" "+ seconds+"sec";
    // countDown.innerHtml = " document.querySelector(minutes) : document.querySelector(seconds)";
    time--;
    if(minutes==0 && seconds==0){
      clearInterval(x);
    }
  }
}



// var startingMinutes = 10;
// var time = startingMinutes * 60;
// var countDown = document.querySelector(".timer");
// setInterval(updateCountdown,1000);
// function updateCountdown(){
//   var minutes = Math.floor(time/60);
//   var seconds = time % 60;
//   countDown.textContent= minutes + "and" + seconds;
//   // countDown.innerHtml = " document.querySelector(minutes) : document.querySelector(seconds)";
//   time--;
// }




document.querySelector(".btn-time").addEventListener("click",backCount)
function backCount(){

  var counter = 30;
  setInterval(tiktik,1000);
  function tiktik(){
    counter=counter-1;
    if(counter>=0){
      document.querySelector("p").textContent=counter;
    }
  }
}
