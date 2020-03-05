//JS

"use strict";

window.addEventListener("load", 
  function() {    
    let media = document.querySelector("#media");
    let btn = document.querySelector("#play-audio");
    let bar = document.querySelector("#progress-bar");
    let progress = document.querySelector("#progress");
    let max = parseInt(bar.offsetWidth);
    let loop;
    let symbol = document.createElement("i");
    
    btn.appendChild(symbol);
    symbol.setAttribute("class", "fa fa-play");
    symbol.setAttribute("aria-hidden", "true");
    
    btn.addEventListener("click", function() {      
      if (!media.paused && !media.ended) {
        media.pause();
        symbol.setAttribute("class", "fa fa-play");
        symbol.setAttribute("aria-hidden", "true");
        window.clearInterval(loop);
      }
      else {
        media.play();
        symbol.setAttribute("class", "fa fa-pause");
        symbol.setAttribute("aria-hidden", "true");        
        loop = setInterval(state, 500);
      }
    }, false);
    
    bar.addEventListener("click", function(event){
      if(!media.paused && !media.ended) {
        let posX = event.pageX - bar.getBoundingClientRect().left;
        let newTime = posX * media.duration / max;
        
        media.currentTime = newTime;
        progress.style.width = posX + "px";
      }
    }, false);
    
    function state() {        
      if(!media.ended) {        
        let total = Math.floor((media.currentTime * max) / media.duration);
        progress.style.width = total + "px";        
      }
      else {
        progress.style.width = "0";
        symbol.setAttribute("class", "fa fa-play");
        symbol.setAttribute("aria-hidden", "true");        
        window.clearInterval(loop);
      }
    }    
    
  }
, false);
