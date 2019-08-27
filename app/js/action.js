
    var trigger = true;
    var navbut = document.getElementById('nav_but');
    var menu = document.getElementById('burger_nav');
    var side = document.querySelector('.sidebar');
    navbut.addEventListener('click',()=>{
        if(trigger === true){
            menu.style.transform = 'translateX(0)';
            trigger = false;
        }
        else{
            menu.style.transform = 'translateX(110%)';
            trigger =true;
        }

    });
var links =document.getElementsByTagName('a');
Array.prototype.forEach.call(links, child => {
     child.addEventListener('click', (event)=>{
         event.preventDefault();
     });
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
