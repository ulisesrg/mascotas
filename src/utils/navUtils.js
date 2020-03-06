const navUtils = () => {
  const $menuButton = document.getElementById('toggle-menu');
  const $nav = document.getElementById('menu');

  $menuButton.addEventListener('click', ev => {
    ev.target.innerHTML = ev.target.innerHTML == 'Menú' ? 'x' : 'Menú';

    $nav.classList.toggle('visible');
  });
};

export default navUtils;
