//JS

window.addEventListener("load", 
  function() {    
    let media = document.querySelector("#media");
    let btn = document.querySelector("#play-audio");
    let bar = document.querySelector("#progress-bar");
    let progress = document.querySelector("#progress");
    let max = parseInt(bar.offsetWidth);
    let loop;
    
    console.log(max);
    
    btn.addEventListener("click", function() {      
      if (!media.paused && !media.ended) {
        media.pause();
        btn.innerHTML = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i>";
        window.clearInterval(loop);
      }
      else {
        media.play();
        btn.innerHTML = "<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>";
        loop = setInterval(state, 1000);
      }
    }, false);
    
    bar.addEventListener("click", move, false);
    
    function state() {        
      if(!media.ended) {        
        let total = Math.floor((media.currentTime * max) / media.duration);
        progress.style.width = total + "px";        
      }
      else {
        progress.style.width = "0";
        btn.innerHTML = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i>";
        window.clearInterval(loop);
      }
    }
    
    function move(evt) {
      console.log("clicked");
      if(!media.paused && !media.ended) {        
        let posX = evt.pageX - bar.offsetLeft;
        console.log(posX);
        let newTime = posX * media.duration / max;
        media.currenTime = newTime;
        progress.style.width = posX + "px";
      }
    }
    
  }
, false);
