import { initClipboard } from './clipboard.js';
import { initTitle } from './title.js';

export const init = () => {
  initTitle();
  initClipboard();
};
