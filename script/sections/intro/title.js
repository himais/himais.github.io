const selector = 'hero__username';
const target = document.querySelector(`.hero__title`);
const usernameElement = document.querySelector(`.${selector}`);

const addUserNameActiveStyle = () => {
  usernameElement.classList.add(`${selector}--active`);
}

const removeUserNameActiveStyle = () => {
  usernameElement.classList.remove(`${selector}--active`);
}

export const initTitle = () => {
  target.addEventListener('mouseover', addUserNameActiveStyle);
  target.addEventListener('mouseout', removeUserNameActiveStyle);
}

