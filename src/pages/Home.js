import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import './Home.css';
import MovieList from '../components/MovieList';

export default function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7b7ae6b8eb96cbea3b6906128bdf23af&language=en-US')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])
  return (
    <div>
        <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
          {
            popularMovies.map((movie)=>(
              <Link style={{textDecoration:'none', color:'white'}} to={`/movie/${movie.id}`} key={movie.id}>
                <div className="movie_image">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img" />
                </div>
                <div className="image_overlay">
                  <div className="title">{movie ? movie.original_title: ""}</div>
                  <div className="date">
                    {movie ? movie.release_date: ""}
                    <span className='rate'>
                      {movie ? movie.vote_average: ""}
                      <span className="material-symbols-outlined star">star</span>
                    </span>
                  </div>  
                  <div className="desc">
                    {movie ? movie.overview: ""}
                  </div>             
                </div>
              </Link>
            ))
          }
        </Carousel>
        <MovieList />
    </div>
  )
}
