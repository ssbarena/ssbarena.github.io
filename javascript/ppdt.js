
 // revealing img for 30 sec
// window.location.hash = "picture";
document.querySelector(".picture").classList.add("invisible");
document.querySelector(".reveal-button").addEventListener("click",revealImg);
function revealImg(){
  document.querySelector(".picture").classList.remove("invisible");
  setTimeout(againHideImg,30000);

  var counter = 30;
  setInterval(tiktik,1000);
  function tiktik(){
    counter=counter-1;
    if(counter>=0){
      document.querySelector(".btn-time").textContent=counter+"sec";
    }
  }

  function againHideImg(){
    document.querySelector(".picture").classList.add("invisible");
  }
}

// document.querySelector(".btn-time").addEventListener("click",backCount)
// function backCount(){
//
//   var counter = 30;
//   setInterval(tiktik,1000);
//   function tiktik(){
//     counter=counter-1;
//     if(counter>=0){
//       document.querySelector("p").textContent=counter;
//     }
//   }
// }






document.querySelector(".timeOver").classList.add("invisible");

document.querySelector(".writing-button").addEventListener("click",clock);

function clock(){
  var startingMinutes = 04;
  var time = startingMinutes * 60;
  var countDown = document.querySelector(".timer");

  var x = setInterval(updateCountdown,1000);
  function updateCountdown(){
    var minutes = Math.floor(time/60);
    var seconds = time % 60;
    if(seconds<10){
      seconds = "0"+seconds;
    }
    countDown.textContent= minutes+"min" +" "+ seconds+"sec";
    // countDown.innerHtml = " document.querySelector(minutes) : document.querySelector(seconds)";
    time--;
    if(minutes==0 && seconds==0){
      clearInterval(x);
      var audio = new Audio('sounds/crash.mp3');
       audio.play();
      document.querySelector(".timeOver").classList.remove("invisible");

    }
  }

}
