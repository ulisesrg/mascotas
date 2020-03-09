const API = 'http://ulisesrg.com/mascotas-assets/lista.php';

const getData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;