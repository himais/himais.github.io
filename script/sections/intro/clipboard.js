const MESSAGE_DELAY = 2000;

const selector = 'hero__contact';
const target = '#contact-button';

export const initClipboard = () => {
  const clipboard = new ClipboardJS(target);

  clipboard.on('success', (e) => {
    const button = document.querySelector(`.${selector}-button`);
    const message = document.querySelector(`.${selector}-message`);

    button.classList.add(`${selector}-button--active`);
    message.classList.add(`${selector}-message--active`);

    setTimeout(() => {
      button.classList.remove(`${selector}-button--active`);
      message.classList.remove(`${selector}-message--active`);
    }, MESSAGE_DELAY);

    e.clearSelection();
  });
}