import './favoritos.css';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        const minhalista = localStorage.getItem("@cinelist");
        setFilmes(JSON.parse(minhalista) || []) 

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id) 
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@cinelist", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso")
    }

    return(
        <div className='meus-filmes'>
            <h1>Minha Lista</h1>


             
            {filmes.length === 0 && <span>Você não possui nenhuma filme salvo :( </span>} 

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={ () => excluirFilme(filme.id) }>Excluir</button> 
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;