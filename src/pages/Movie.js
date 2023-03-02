import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import './Movie.css';

export default function Movie() {
    const [currentMovie, setMovie] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getData();
        window.scrollTo(0,0);
    }, [])


    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7b7ae6b8eb96cbea3b6906128bdf23af&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    
  return (
    <div className="page">
        <div className="image">
            <img className="movie_img" src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.backdrop_path:""}`} alt="img" />
        </div>
        <div className="info">
            <div className="poster">
                <img className="poster_img" src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.poster_path:""}`} alt="img" />
            </div>
            <div className="detail">
                <h1>{currentMovie ? currentMovie.title:""}</h1>
                <span className="rate">{currentMovie ? currentMovie.vote_average:""}
                    <span className="material-symbols-outlined star">star</span>
                </span>
                
                <p>
                    <b>Overview : </b> {currentMovie ? currentMovie.overview:""}
                </p>
                <div className="movie_genres">
                    {
                         currentMovie && currentMovie.genres
                         ? 
                        currentMovie.genres.map(genre => (
                            <span className="genres" id={genre.id} >{genre.name}</span>
                        )) 
                        : 
                        ""
                    }
                </div>
                <ul style={{listStyleType:"none"}} className="list">
                    <li><b>Release Date : </b>{currentMovie ? currentMovie.release_date:""}</li>
                    <li><b>Language : </b>{currentMovie ? currentMovie.original_language:""}</li>
                    <li><b>Revenue : </b>{currentMovie ? currentMovie.revenue:""}</li>          
                    <li><b>Vote count : </b>{currentMovie ? currentMovie.vote_count:""}</li>
                    <li><b>Runtime : </b>{currentMovie ? currentMovie.runtime:""} min</li>
                </ul>  
            </div>
        </div>
        <div className="links">
                <div className="movie__heading">Useful Links : </div>
                {
                    currentMovie && currentMovie.homepage && <a href={currentMovie.homepage} target="_blank" style={{textDecoration: "none"}}>
                    <div>
                        <span className="homepage">Homepage <span className="material-symbols-outlined"><span className="material-symbols-outlined">
                        open_in_new</span></span></span>
                    </div>
                    </a>
                }
                {
                    currentMovie && currentMovie.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovie.imdb_id} target="_blank" style={{textDecoration: "none"}}>
                    <div>
                        <span className="imdb-page">IMDb<span className="material-symbols-outlined"><span className="material-symbols-outlined">
                        open_in_new</span></span></span>
                    </div>
                    </a>
                }
        </div>
        <div className="productions">
            <div className="companies">Production Companies : </div>
                {
                    currentMovie && currentMovie.production_companies && currentMovie.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <div className="prodCompany">
                                    <img className="prodCompanyImg" src={"https://image.tmdb.org/t/p/original" + company.logo_path} key={currentMovie.id}/>
                                </div>
                            }
                        </>
                    ))
                }
        </div>
    </div>
  )
}

