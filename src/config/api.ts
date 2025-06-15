import axios from 'axios';

axios.get('https://api.ejemplo.com/data')
  .then(response => {
    console.log('Datos recibidos:', response.data);
  })
  .catch(error => {
    console.error('Error al conectar con la API:', error);
  });
