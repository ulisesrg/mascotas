const Perros = () => {
  const view = `
    <div>
      <h2>Perros</h2>
      <p>Los perros son el mejor amigo del hombre. Existen varias razas en el mundo.</p> 
      <p class="center">Con estos botones puedes filtrarlos de acuerdo su tamaño:</p>

      <div id="buttons">
        <button id="btn-small">Chicos</button>
        <button id="btn-medium">Medianos</button>
        <button id="btn-big">Grandes</button>
      </div>

      <form action="" id="form">
        <label for="filter">Filtra por nombre de raza:</label>
        <input type="text" name="" id="filter" value="" autocomplete="off">
      </form>

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