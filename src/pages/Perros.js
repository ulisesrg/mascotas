const Perros = () => {
  const view = `
    <div class="fadeIn">
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

      <div id="results">
        <p id="message" class="hidden">No se encontraron resultados</p>
        <ul id="lista">
          <li class="fadeIn dog small">Chihuahua</li>
          <li class="fadeIn dog medium">Pastor alemán</li>
          <li class="fadeIn dog big">Gran Danés</li>
          <li class="fadeIn dog medium">Pitbull</li>
          <li class="fadeIn dog small">Pug</li>
          <li class="fadeIn dog big">San Bernardo</li>
          <li class="fadeIn dog medium">Doberman</li>
        </ul>
      </div>
    </div>
  `;
  return view;
};

export default Perros;