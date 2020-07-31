import { updateProgressBar } from './progress.js';

// Init third-party libraries
export const init = () => {
  // Pagination and menu
  new Pageable("#container", {
    childSelector: "[data-anchor]",
    anchors: ['Page 1 ', 'Page 2', 'Page 3', 'Page 4'],
    pips: true,
    animation: 300,
    delay: 0,
    throttle: 0,
    orientation: "vertical",
    events: {
      wheel: true,
      mouse: true,
      touch: true,
      keydown: true,
    },
    onScroll: updateProgressBar,
  });

  // Parallax effect
  new Rellax('.parallax');

  // Particle effect on hero section
  particlesJS.load('particles', 'config/particles.json');

}