import getData from '../utils/getData';

const Header = async () => {
  const data = await getData();
  const view = `
    <div>
      <h1>
        <a href="/#/">Mascotas</a>
      </h1>
      <button id="toggle-menu">x</button>
      <nav id="menu" class="header-nav visible" role="navigation">
        <ul>
          ${data.list.map(animal => `
            <li>
              <a id="${animal.species}-link" href="#/${animal.species.toLowerCase()}s">
                <img src="${animal.iconURL}" alt="">
                ${animal.species}
                <span class="description">${animal.description}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </nav>
    </div>
  `;
  return view;
};

export default Header;

{/* <li>
            <a id="cat-link" href="#/gatos">
              Gato
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
          </li> */}