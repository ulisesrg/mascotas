import getData from '../utils/getData';

const Header = async () => {
  const data = await getData();
  const view = `
    <div>
      <h1>
        <a href="/#/">Mascotas</a>
      </h1>
      <button id="toggle-menu">Menú</button>
      <nav id="menu" class="header-nav" role="navigation">
        <ul>
          ${data.list.map(animal => `
            <li>
              <a id="${animal.species}-link" href="#/${animal.species.toLowerCase()}s">
                <img src="${animal.iconURL}" alt="">
                ${animal.species}s
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
