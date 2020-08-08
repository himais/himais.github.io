import initLibraries from './libs/index.js';
import initSections from './sections/index.js';

const app = async () => {
  initLibraries();
  initSections();

  // Temporary fix. Waiting for solution from for naker.io.
  if (window.matchMedia('(max-width: 992px)').matches) {
    var elem = document.querySelector('.bg');
    elem.parentNode.removeChild(elem);
  }
};

document.addEventListener('DOMContentLoaded', app);
