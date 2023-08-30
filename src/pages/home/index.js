import React, {useState, useEffect} from "react";
import './style.css'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // css for carousel
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from "../../component/movieList";
import SearchInput from "../../component/search";
import Footer from "../../component/footer";



const Home = () =>{
    const [poularMovies, setPoularMovies] = useState([]);
    const [searchData, setSearchData] = useState("");

    const searchHandle = (e) =>{
        console.log(e.target.value)
        setSearchData(e.target.value)
    }

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=97c19644e985a7ef308d0f1544901225&language=en-US')
        .then((res)=>{
            
                setPoularMovies(res.data.results)
                console.log(res.data.results)
            
        } )
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            {/* <SearchInput searchData={searchData} searchHandle={searchHandle}/> */}
            <div className="crausel">
            <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    
                    {
                       poularMovies.map((movie, i)=>{
                        return(
                        <Link to={`/movie/${movie.id}`} style={{ color:"white"}}>    
                        {/* <Link style={{color: "White"}} to={`movie/${movie.id}`}>     */}
                        <div>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title" key={i}>{movie.original_title}</div>
                                <div className="posterImage__runtime">
                                    {movie.release_date}
                                <span className="posterImage__rating">
                                    {movie.vote_average}
                                    <i className="fas fa-star" />
                                </span>
                                </div>
                                <div className="posterImage__description">{movie.overview}</div>    
                            </div>        
                        </div>
                        </Link>
                    )
                        
                       }) 
                    }
                </Carousel>
                    
            </div>
            <MovieList/>
           
        </div>
        
    )
}

export default Home