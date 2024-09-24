import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getmovie } from '../Redux/Action'

function Moviedetails() {
    const {id}=useParams()
    const movie=useSelector(state=>state.movie)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getmovie(id))
    })
    
  return (
    <div  style={{display:"flex",justifyContent:"center",}}>
    <div style={{width:"80%",height:"700px",border:"1px solid black",display:"flex" }}>
<div style={{width:"60%",}}>
<iframe src={movie?.trailer} width="100%"height="100%"></iframe>
</div>
<div style={{width:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px",fontFamily:"sans-serif",background:"linear-gradient(45deg,red,blue)",color:"white",padding:"30px"}}>
    <h1>{movie?.title}</h1>
    <p>{movie?.describe}</p>
</div>
    </div>
    </div>
  )

}

export default Moviedetails