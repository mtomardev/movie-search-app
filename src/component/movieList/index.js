import React,{useState, useEffect} from "react";
import './style.css'
import { useParams } from "react-router-dom";
import Card from "../card";
import axios from "axios";
import Footer from "../footer";

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    

    useEffect (()=>{
        getData()
    },[type])



    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=97c19644e985a7ef308d0f1544901225&language=en-US`)
        .then((res)=>{
            
                setMovieList(res.data.results)
                console.log(res.data.results)
            
        } )
        .catch((error)=> console.log(error))
    }

    return(
        <>
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "Popular").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie)=>{
                        return(
                        <Card movie={movie}/>
                        )
                    })
                }
            </div>
        
        </div>
        <Footer/>
        </>
    )
}

export default MovieList;