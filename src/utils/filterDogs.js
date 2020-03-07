const filterDogs = () => {
  let activeCategories = [];
  let cssClassesSize = '';

  const $textFilter = document.getElementById('filter');
  const $allDogs = document.getElementsByClassName('dog');
  const $message = document.getElementById('message')
  let $filteredDogs;

  // Filtrado por texto

  $textFilter.addEventListener('keyup', ev => {
    $filteredDogs = filteredByCategory(cssClassesSize);
    filterManageClass($filteredDogs, ev.target.value, 't-hidden');
    showNoResults();
  });

  function filteredByCategory(selectors) {
    return document.querySelectorAll(`.dog${selectors}`);
  }

  function filterManageClass(collection, searchText, cssClass) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].innerText.toLowerCase().indexOf(searchText) === -1) {
        collection[i].classList.add(cssClass);
      } else {
        collection[i].classList.remove(cssClass);
      }
    }
  }

  function showNoResults() {
    if (document.querySelectorAll('.dog:not(.hidden):not(.t-hidden)').length == 0) {
      $message.classList.remove('hidden')
    } else {
      $message.classList.add('hidden')
    }

  }

  // Filtrado por botones de categorías

  document.querySelectorAll('#buttons button').forEach(item => {
    item.addEventListener('click', ev => {
      // modifica la clase del botón de presionado a no presionado
      ev.target.classList.toggle('on');

      // toma cuál botón se presionó y se establece una selector css
      const cssClassSize = ev.target.id.replace('btn-', '.');

      // el selector css se toma para asignarlo como una categoría activa
      setActiveCategory(cssClassSize);

      // el array de categorías activas se tranforma a selectores css
      cssClassesSize = activeCategories.join(', ');

      // se filtran los resultados de acuerdo a esos selectores css
      if (activeCategories.length === 0) {
        showAllDogs();
      } else {
        filterDogsByCategory(cssClassesSize);
      }

      showNoResults();
    });
  });

  function setActiveCategory(cssClassSize) {
    if (activeCategories.indexOf(cssClassSize) === -1) {
      activeCategories.push(cssClassSize);
    } else {
      activeCategories = activeCategories.filter(
        cat => cat.indexOf(cssClassSize) === -1
      );
    }
  }

  function showAllDogs() {
    for (let i = 0; i < $allDogs.length; i++) {
      $allDogs[i].classList.remove('hidden');
    }
  }

  function filterDogsByCategory(cssClassesSize) {
    const excludeClassQuery = ':not(' + activeCategories.join('):not(') + ')';

    const $elementsToHide = document.querySelectorAll(
      '.dog' + excludeClassQuery
    );
    for (let i = 0; i < $elementsToHide.length; i++) {
      $elementsToHide[i].classList.add('hidden');
    }

    const $elementsToShow = document.querySelectorAll(cssClassesSize);
    for (let i = 0; i < $elementsToShow.length; i++) {
      $elementsToShow[i].classList.remove('hidden');
    }
  }
};

export default filterDogs;
