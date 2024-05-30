import React,{useEffect, useState} from 'react'
import Meal from './Meal'
import Heart from '../assets/heart.png'
import "./Favorites.css"



const FavoritesTwo = () => {

    const [favorites, setFavorites] = useState([]) //empty array 

    const fetchFavorites = async() =>{
        const response = await fetch('http://localhost:5000/api/favorites')

        const json = await response.json()

        if (response.ok){
            setFavorites(json)

        }
    }

    fetchFavorites()
    

  return (
    <div><h1>Favorites Two</h1>
    {(favorites==0)?
    <div className="no-favorites"> <img src={Heart}/><p>
        You have no favorites. Heart a meal to see them here!</p></div>: <></>}

        {(favorites.length > 0)? <> {favorites.map(fav => (
            <Meal
              key={fav._id}
              name={fav.name}
              food={fav.food}
              protein={fav.protein}
              calories={fav.calories}
              serving={fav.serving}
              fav={true}
            />
          ))}</> :  <></> }
       
       
       </div>
  )
}

export default FavoritesTwo