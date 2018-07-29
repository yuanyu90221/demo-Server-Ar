document.addEventListener('DOMContentLoaded', (evt) => {
  document.querySelector('#stopDic').addEventListener('click', () => {
    let dice = document.querySelector('#dice');
    dice.removeAttribute('a-animation');
  });
});