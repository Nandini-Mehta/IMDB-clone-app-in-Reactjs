import React, {useEffect, useState} from "react";
import Card from './Card';
import './MovieList.css';
import { useParams } from 'react-router-dom';


export default function MovieList() {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getData();
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=7b7ae6b8eb96cbea3b6906128bdf23af&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    
  return (
    <div className="movieList">
        <h1 className="title">{(type? type:"POPULAR").toUpperCase()}</h1>
        <div className="card-list">
            {
                movieList.map((movie) =>(
                <Card movie={movie} key={movie.id}/>
            ))
            }
        </div>
    </div>
  )
}
