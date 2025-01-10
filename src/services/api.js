 


 //Base da URL:  https://api.themoviedb.org/3/
 //ULR DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=485603fba72305146558d7127a75a9a8&language=pt-BR

 
 import axios from 'axios';

 const api = axios.create({  
    baseURL: 'https://api.themoviedb.org/3/'
 });

 export default api;
