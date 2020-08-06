import { updateProgressBar } from '../components/progress.js';

// Init third-party libraries
const initLibraries = () => {
  // Pagination and menu
  const pageable = new Pageable('#main', {
    childSelector: '[data-anchor]',
    anchors: ['Page 1 ', 'Page 2', 'Page 3', 'Page 4'],
    pips: true,
    animation: 300,
    delay: 0,
    throttle: 0,
    orientation: 'vertical',
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
};

export default initLibraries;
