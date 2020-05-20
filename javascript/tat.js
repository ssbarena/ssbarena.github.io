// hiding image
var i;
for(i=0;i<12;i++){
  document.querySelectorAll(".picture")[i].classList.add("invisibles");
}


// hiding timeout banner
var a;
for(a=0;a<12;a++){
  document.querySelectorAll(".timeOver")[a].classList.add("time-out-invisibles");
}

// hiding pics on click
document.querySelector("#btn-1").addEventListener("click",hidingAgain1);
document.querySelector("#btn-2").addEventListener("click",hidingAgain2);
document.querySelector("#btn-3").addEventListener("click",hidingAgain3);
document.querySelector("#btn-4").addEventListener("click",hidingAgain4);
document.querySelector("#btn-5").addEventListener("click",hidingAgain5);
document.querySelector("#btn-6").addEventListener("click",hidingAgain6);
document.querySelector("#btn-7").addEventListener("click",hidingAgain7);
document.querySelector("#btn-8").addEventListener("click",hidingAgain8);
document.querySelector("#btn-9").addEventListener("click",hidingAgain9);
document.querySelector("#btn-10").addEventListener("click",hidingAgain10);
document.querySelector("#btn-11").addEventListener("click",hidingAgain11);
document.querySelector("#btn-12").addEventListener("click",hidingAgain12);

// starting timer for writing
document.querySelector("#timerBtn1").addEventListener("click",writingTimer1);
document.querySelector("#timerBtn2").addEventListener("click",writingTimer2);
document.querySelector("#timerBtn3").addEventListener("click",writingTimer3);
document.querySelector("#timerBtn4").addEventListener("click",writingTimer4);
document.querySelector("#timerBtn5").addEventListener("click",writingTimer5);
document.querySelector("#timerBtn6").addEventListener("click",writingTimer6);
document.querySelector("#timerBtn7").addEventListener("click",writingTimer7);
document.querySelector("#timerBtn8").addEventListener("click",writingTimer8);
document.querySelector("#timerBtn9").addEventListener("click",writingTimer9);
document.querySelector("#timerBtn10").addEventListener("click",writingTimer10);
document.querySelector("#timerBtn11").addEventListener("click",writingTimer11);
document.querySelector("#timerBtn12").addEventListener("click",writingTimer12);



// hiding image timer
// function imgHide(){
//   var counter = 10;
//   setInterval(tiktik,1000);
//   function tiktik(){
//     counter=counter-1;
//     if(counter>=0){
//       document.querySelector("#btnTime1").textContent=counter+"sec";
//     }
//   }
// }



// adding eventlistener functions

  function hidingAgain1(){
      document.querySelector("#pic1").classList.remove("invisibles");

      // hiding image timer
        var counter = 30;
        setInterval(tiktik,1000);
        function tiktik(){
          counter=counter-1;
          if(counter>=0){
            document.querySelector("#btnTime1").textContent=counter+"sec";
          }
        }

      setInterval(addpic1,10000);
      function addpic1(){
          document.querySelector("#pic1").classList.add("invisibles");
      }
  }

  function hidingAgain2(){
      document.querySelector("#pic2").classList.remove("invisibles");

      // hiding image timer
        var counter = 30;
        setInterval(tiktik,1000);
        function tiktik(){
          counter=counter-1;
          if(counter>=0){
            document.querySelector("#btnTime2").textContent=counter+"sec";
          }
        }

      setInterval(addpic2,10000);
      function addpic2(){
          document.querySelector("#pic2").classList.add("invisibles");
      }
  }

  function hidingAgain3(){
      document.querySelector("#pic3").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime3").textContent=counter+"sec";
                }
              }

      setInterval(addpic3,10000);
      function addpic3(){
          document.querySelector("#pic3").classList.add("invisibles");
      }
  }

  function hidingAgain4(){
      document.querySelector("#pic4").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime4").textContent=counter+"sec";
                }
              }

      setInterval(addpic4,10000);
      function addpic4(){
          document.querySelector("#pic4").classList.add("invisibles");
      }
  }

  function hidingAgain5(){
      document.querySelector("#pic5").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime5").textContent=counter+"sec";
                }
              }

      setInterval(addpic5,10000);
      function addpic5(){
          document.querySelector("#pic5").classList.add("invisibles");
      }
  }

  function hidingAgain6(){
      document.querySelector("#pic6").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime6").textContent=counter+"sec";
                }
              }

      setInterval(addpic6,10000);
      function addpic6(){
          document.querySelector("#pic6").classList.add("invisibles");
      }
  }

  function hidingAgain7(){
      document.querySelector("#pic7").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime7").textContent=counter+"sec";
                }
              }

      setInterval(addpic7,10000);
      function addpic7(){
          document.querySelector("#pic7").classList.add("invisibles");
      }
  }

  function hidingAgain8(){
      document.querySelector("#pic8").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime8").textContent=counter+"sec";
                }
              }

      setInterval(addpic8,10000);
      function addpic8(){
          document.querySelector("#pic8").classList.add("invisibles");
      }
  }

  function hidingAgain9(){
      document.querySelector("#pic9").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime9").textContent=counter+"sec";
                }
              }

      setInterval(addpic9,10000);
      function addpic9(){
          document.querySelector("#pic9").classList.add("invisibles");
      }
  }

  function hidingAgain10(){
      document.querySelector("#pic10").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime10").textContent=counter+"sec";
                }
              }

      setInterval(addpic10,10000);
      function addpic10(){
          document.querySelector("#pic10").classList.add("invisibles");
      }
  }

  function hidingAgain11(){
      document.querySelector("#pic11").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime11").textContent=counter+"sec";
                }
              }

      setInterval(addpic11,10000);
      function addpic11(){
          document.querySelector("#pic11").classList.add("invisibles");
      }
  }

  function hidingAgain12(){
      document.querySelector("#pic12").classList.remove("invisibles");

            // hiding image timer
              var counter = 30;
              setInterval(tiktik,1000);
              function tiktik(){
                counter=counter-1;
                if(counter>=0){
                  document.querySelector("#btnTime12").textContent=counter+"sec";
                }
              }

      setInterval(addpic12,10000);
      function addpic12(){
          document.querySelector("#pic12").classList.add("invisibles");
      }
  }

  // writing timer event listener

  function writingTimer1(){
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
         document.querySelector("#timeOver1").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer2(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer2");

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
         document.querySelector("#timeOver2").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer3(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer3");

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
         document.querySelector("#timeOver3").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer4(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer4");

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
         document.querySelector("#timeOver4").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer5(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer5");

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
         document.querySelector("#timeOver5").classList.remove("time-out-invisibles");
      }
    }
  }



  function writingTimer6(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer6");

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
         document.querySelector("#timeOver6").classList.remove("time-out-invisibles");
      }
    }
  }



  function writingTimer7(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer7");

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
         document.querySelector("#timeOver7").classList.remove("time-out-invisibles");
      }
    }
  }



  function writingTimer8(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer8");

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
         document.querySelector("#timeOver8").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer9(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer9");

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
         document.querySelector("#timeOver9").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer10(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer10");

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
         document.querySelector("#timeOver10").classList.remove("time-out-invisibles");
      }
    }
  }



  function writingTimer11(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer11");

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
         document.querySelector("#timeOver11").classList.remove("time-out-invisibles");
      }
    }
  }


  function writingTimer12(){
    var startingMinutes = 04;
    var time = startingMinutes * 60;
    var countDown = document.querySelector("#timer12");

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
         document.querySelector("#timeOver12").classList.remove("time-out-invisibles");
      }
    }
  }
