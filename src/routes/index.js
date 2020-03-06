import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Perros from '../pages/Perros';
import Gatos from '../pages/Gatos';
import Conejos from '../pages/Conejos';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import navUtils from '../utils/navUtils';
import filterDogs from '../utils/filterDogs';

const routes = {
  '/': Home,
  '/#/': Home,
  '/:id': Character,
  '/gatos': Gatos,
  '/perros': Perros,
  '/conejos': Conejos
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  navUtils();
  filterDogs();
};

export default router;
