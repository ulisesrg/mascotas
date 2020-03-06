const Header = () => {
  const view = `
    <div>
      <h1>
        <a href="/#/">Mascotas</a>
      </h1>
      <button id="toggle-menu">x</button>
      <nav id="menu" class="header-nav visible" role="navigation">
        <ul>
          <li>
            <a id="cat-link" href="#/gatos">
              Gatos
              <span>Tiernos e inteligentes</span>
            </a>
          </li>
          <li>
            <a id="dog-link" href="#/perros">
              Perros
              <span>Cariñosos y leales</span>
            </a>
          </li>
          <li>
            <a id="rabbit-link" href="#/conejos">
              Conejos
              <span>Callados y traviesos</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;