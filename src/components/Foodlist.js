
import React from 'react'
import style from './Foodlist.module.css'
import FoodCard from './FoodCard'

let data = [
    {
        url : "https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900",
        id : 1,
        name : "Samosa"
    },
    {
        url : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60",
        id : 2,
        name : "Burger"
    },
    {
        url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Jalebi_-_Served_in_a_Plate.JPG/1200px-Jalebi_-_Served_in_a_Plate.JPG",
        id : 3,
        name : "Jalebi"
    },
    {
        url : "https://static.toiimg.com/photo/52743612.cms",
        id : 4,
        name : "Rasgulla"
    },
    {
        url : "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/aho9lwywoja8skgxjtni",
        id : 5,
        name : "Biryani"
    }
]
function Foodlist() {
  return (
    <div>
        <h2 id = {style.h2}>Top 5 favourite food </h2>
        <ul id = {style.ul}>
            {data.map((item,i)=>{
                return <li key={i}><a href=  {`./index.html#${item.name}`} > {item.name} </a></li>
            })}
        </ul>
        <FoodCard item = {data} />
    </div>
  )
}

export default Foodlist