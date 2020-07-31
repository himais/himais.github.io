const bar = document.querySelector('.progress__bar');

export const updateProgressBar = ({ percent }) => {
  bar.style.width = `${Math.round(percent) || 0}%`;
}