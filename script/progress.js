const bar = document.querySelector('.bar');

export const updateProgressBar = ({ percent }) => {
  bar.style.width = `${Math.round(percent) || 0}%`;
}