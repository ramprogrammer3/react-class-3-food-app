
import React from 'react'
import style from './Foodlist.module.css'
function FoodCard(props) {
  return (

    <>
    {props.item.map((data,i)=>{

    return <div className= {style.imageContainer} key = {i} id = {data.name} >
        <img src= {data.url} alt="" />
        <h3> {data.name} </h3>
    </div>
    })}
    </>
  )
}

export default FoodCard