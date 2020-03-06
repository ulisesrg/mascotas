const Header = () => {
  const view = `
    <div>
      <h1>
        <a href="/#/">mascotas</a>
      </h1>
      <a href="#menu" class="toggle-menu">Menú</a>
      <nav class="header-nav" role="navigation">
        <ul>
          <li><a href="#/gatos">gatos</a></li>
          <li><a href="#/perros">perros</a></li>
          <li><a href="#/conejos">conejos</a></li>
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;