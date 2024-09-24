import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { deletemovie } from '../Redux/Action'
import Editmovie from './Editmovie'

function Movielist() {
    const movies = useSelector(state => state.movies)
const dispatch=useDispatch()
    return (

        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "5%" }}>
            {movies.map(movie =>
                <div className="card">
                    <div className="card-info">
                        <img style={{ width: "100%", height: "50%", borderRadius: "1rem", marginBottom: "50px" }} src={movie.poster} />
                        <Link to={"/details/" + movie.id} style={{ textDecoration: "none" }}>
                            <p className="title">{movie.title}</p>
                        </Link>
                        <ReactStars value={movie.rating} count={5} color2='white' size={24} />
                        <button onClick={()=>dispatch(deletemovie(movie.id))} className="ui-btn">Delete</button>
<Editmovie movie={movie}/>

                    </div>
                </div>

            )}
        </div>
    )
}

export default Movielist