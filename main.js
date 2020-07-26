const configs = {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#66bfbf"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#393e46"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4d606e",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 215,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

particlesJS("particles-js", configs);
var clipboard = new ClipboardJS('#contact-button');

clipboard.on('success', function(e) {
    const button = document.querySelector('.hero__contact-button');
    const message = document.querySelector('.hero__contact-message');

    button.classList.add('hero__contact-button--active');
    message.classList.add('hero__contact-message--active');

    setTimeout(function() {
      button.classList.remove('hero__contact-button--active');
      message.classList.remove('hero__contact-message--active');
    }, 2000);

    e.clearSelection();
});

function addUserNameActiveStyle(){
  const username = document.querySelector('.hero__username');
  username.classList.add('hero__username--active');
}

function removeUserNameActiveStyle(){
  const username = document.querySelector('.hero__username');
  username.classList.remove('hero__username--active');
}

// init_pointer({
//   pointerColor: "white",
//   ringSize: 8,
//   ringClickSize: 5,
// })

// var cursor = document.getElementById('cursor');
// cursor.addEventListener('mousemove', function (e) {
//   var x = e.clientX;
//   var y = e.clientY;

//   cursor.style.left = x + 'px';
//   cursor.style.top = y + 'px';
// })