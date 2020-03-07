const filterDogs = () => {
  let activeCategories = [];
  let cssClassesSize = '';

  const $textFilter = document.getElementById('filter');
  const $buttonS = document.getElementById('btn-small');
  const $buttonM = document.getElementById('btn-medium');
  const $buttonB = document.getElementById('btn-big');
  const $allDogs = document.getElementsByClassName('dog');
  let $filteredDogs;

  $textFilter.addEventListener('keyup', ev => {
    $filteredDogs = filteredByCategory(cssClassesSize);
    filterManageClass($filteredDogs, ev.target.value, 't-hidden');
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


  document.querySelectorAll('#buttons button').forEach(item => {
    item.addEventListener('click', ev => {
      ev.target.classList.toggle('on');
      // console.log(ev.target.id)


      const cssClassSize = ev.target.id.replace('btn-', '.')
      // console.log(cssClassSize)
      
      setActiveCategories(cssClassSize)
     

      cssClassesSize = activeCategories.join(', ');




      if (activeCategories.length === 0) {
        showAllDogs();
        // for (let i = 0; i < $allDogs.length; i++) {
        //   $allDogs[i].classList.remove('hidden');
        // }
      } else {
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


    })
  })

  function setActiveCategories(cssClassSize) {
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
  

};





  // $buttonS.addEventListener('click', ev => {
    // ev.currentTarget.classList.toggle('on');

    // if (activeCategories.indexOf('.small') === -1) {
    //   activeCategories.push('.small');
    // } else {
    //   activeCategories = activeCategories.filter(
    //     cat => cat.indexOf('.small') === -1
    //   );
    // }

    // cssClasses = activeCategories.join(', ');

    // if (activeCategories.length === 0) {
    //   for (let i = 0; i < $allDogs.length; i++) {
    //     $allDogs[i].classList.remove('hidden');
    //   }
    // } else {
    //   let excludeClassQuery = ':not(' + activeCategories.join('):not(') + ')';

    //   const $elementsToHide = document.querySelectorAll(
    //     '.dog' + excludeClassQuery
    //   );
    //   for (let i = 0; i < $elementsToHide.length; i++) {
    //     $elementsToHide[i].classList.add('hidden');
    //   }

    //   const $elementsToShow = document.querySelectorAll(cssClassesSize);
    //   for (let i = 0; i < $elementsToShow.length; i++) {
    //     $elementsToShow[i].classList.remove('hidden');
    //   }
    // }
  // });

  // $buttonM.addEventListener('click', ev => {
    // ev.currentTarget.classList.toggle('on');

    // if (activeCategories.indexOf('.medium') === -1) {
    //   activeCategories.push('.medium');
    // } else {
    //   activeCategories = activeCategories.filter(
    //     cat => cat.indexOf('.medium') === -1
    //   );
    // }

    // cssClasses = activeCategories.join(', ');

    // if (activeCategories.length === 0) {
    //   for (let i = 0; i < $allDogs.length; i++) {
    //     $allDogs[i].classList.remove('hidden');
    //   }
    // } else {
    //   let excludeClassQuery = ':not(' + activeCategories.join('):not(') + ')';

    //   const $elementsToHide = document.querySelectorAll(
    //     '.dog' + excludeClassQuery
    //   );
    //   // console.log($elementsToHide);
    //   for (let i = 0; i < $elementsToHide.length; i++) {
    //     $elementsToHide[i].classList.add('hidden');
    //   }

    //   const $elementsToShow = document.querySelectorAll(cssClassesSize);
    //   for (let i = 0; i < $elementsToShow.length; i++) {
    //     $elementsToShow[i].classList.remove('hidden');
    //   }
    // }
  // });

  // $buttonB.addEventListener('click', ev => {
    // ev.currentTarget.classList.toggle('on');

    // if (activeCategories.indexOf('.big') === -1) {
    //   activeCategories.push('.big');
    // } else {
    //   activeCategories = activeCategories.filter(
    //     cat => cat.indexOf('.big') === -1
    //   );
    // }

    // cssClasses = activeCategories.join(', ');

    // if (activeCategories.length === 0) {
    //   for (let i = 0; i < $allDogs.length; i++) {
    //     $allDogs[i].classList.remove('hidden');
    //   }
    // } else {
    //   let excludeClassQuery = ':not(' + activeCategories.join('):not(') + ')';

    //   const $elementsToHide = document.querySelectorAll(
    //     '.dog' + excludeClassQuery
    //   );
    //   for (let i = 0; i < $elementsToHide.length; i++) {
    //     $elementsToHide[i].classList.add('hidden');
    //   }

    //   const $elementsToShow = document.querySelectorAll(cssClassesSize);
    //   for (let i = 0; i < $elementsToShow.length; i++) {
    //     $elementsToShow[i].classList.remove('hidden');
    //   }
    // }
  // });


export default filterDogs;
