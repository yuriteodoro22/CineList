import {  useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import api from '../../services/api'
import './filme-info.css'
import { toast } from 'react-toastify'

function Filme(){

    const { id } = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
       async function LoadFilme(){
        await api.get(`/movie/${id}`, {
            params:{
                api_key:"485603fba72305146558d7127a75a9a8",
                language:"pt-BR",
            }
        })
        .then((response)=>{
             setFilme(response.data);
             setLoading(false);
        })
        .catch(()=>{
             navigation("/")
             return;
        })
       }

       LoadFilme();
    }, [navigation, id])

    function salvarFilme(){
        const minhalista = localStorage.getItem("@cinelist");

        let filmesSalvos = JSON.parse(minhalista) || []; 

        const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id) 

        if(hasFilme){
            toast.warn("Esse filme já está na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@cinelist", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso !");
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h2>Carregando descrições...</h2>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                    Trailer
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Filme;
