import Axios from 'axios';


export function getCep(cep) {
    return Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
  
