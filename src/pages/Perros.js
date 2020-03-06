const Perros = () => {
  const view = `
    <div>
      <h2>Perros</h2>
      <p>Los perros son el mejor amigo del hombre. Existen varias razas de acuerdo al tamaño.</p>
      <form action="" id="form">
        <input type="text" name="" id="filter" value="" autocomplete="off">
      </form>

      <button id="btn-small">Chicos</button>
      <button id="btn-medium">Medianos</button>
      <button id="btn-big">Grandes</button>

      <div>
        <ul id="lista">
          <li class="dog small">Chihuahua</li>
          <li class="dog medium">Pastor alemán</li>
          <li class="dog big">Gran Danés</li>
          <li class="dog medium">Pitbull</li>
          <li class="dog small">Pug</li>
          <li class="dog big">San Bernardo</li>
          <li class="dog medium">Doberman</li>
        </ul>
      </div>
    </div>
  `;
  return view;
};

export default Perros;