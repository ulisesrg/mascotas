const Header = () => {
  const view = `
    <div>
      <h1>
        <a href="/#/">Mascotas</a>
      </h1>
      <button id="toggle-menu">x</button>
      <nav id="menu" class="header-nav visible" role="navigation">
        <ul>
          <li><a href="#/gatos">Gatos</a></li>
          <li><a href="#/perros">Perros</a></li>
          <li><a href="#/conejos">Conejos</a></li>
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;