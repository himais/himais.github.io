import initLibraries from './libs/index.js';
import initSections from './sections/index.js';

const app = async () => {
  initLibraries();
  initSections();
};

document.addEventListener('DOMContentLoaded', app);
