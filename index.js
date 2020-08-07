function firstMove() {
    
    document.querySelector(".first").disabled=true;
    var id1 = setTimeout(frame1, 2400);
    function frame1() {
    document.querySelector(".second").disabled=false;
    }
    var elem = document.getElementById("car");   
    var pos = 48;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 280) {
        clearInterval(id);
      } else {
        pos++; 
        // elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
    
  }

  function secondMove() {
    
    document.querySelector(".second").disabled=true;
    
    var id1 = setTimeout(frame1, 2600);
    function frame1() {
        document.querySelector(".third").disabled=false;
    }
    var elem = document.getElementById("car"); 
    elem.style.left = "299px";  

    document.querySelector("#car img").style.transform = "rotate(270deg)"; 
    
    
    // elem.style.transform = "rotate(270deg)";  
    var pos = 147.68;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 398.68) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + 'px'; 
        // elem.style.left = pos + 'px'; 
      }
    }
  }

  function thirdMove() {
    document.querySelector(".third").disabled=true;
    var elem = document.getElementById("car"); 
    elem.style.bottom = "421.68px";  

    document.querySelector("#car img").style.transform = "rotate(180deg)"; 
    
    
    // elem.style.transform = "rotate(270deg)";  
    var pos = 280;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 132) {
        clearInterval(id);
      } else {
        pos--; 
        // elem.style.bottom = pos + 'px'; 
           elem.style.left = pos + 'px'; 
      }
    }
  }