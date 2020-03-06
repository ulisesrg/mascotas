const Header = () => {
  const view = `
    <div>
      <h1>
        <a href="/#/">Mascotas</a>
      </h1>
      <a href="#menu" class="toggle-menu">Menú</a>
      <nav class="header-nav" role="navigation">
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