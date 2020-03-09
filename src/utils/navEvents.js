const navEvents = () => {
  const $menuButton = document.getElementById('toggle-menu');
  const $nav = document.getElementById('menu');

  $menuButton.addEventListener('click', ev => {
    ev.target.innerHTML = ev.target.innerHTML == 'Menú' ? 'x' : 'Menú';

    $nav.classList.toggle('visible');
  });

  document.querySelectorAll('nav li').forEach(item => {
    item.addEventListener('click', ev => {
      if (ev.target.hash == location.hash) {
        $nav.classList.remove('visible');
      }
    })
  })
};

export default navEvents;
