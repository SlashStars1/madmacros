import React,{useEffect, useState, useContext} from 'react'
import Meal from './Meal'
import Heart from '../assets/heart.png'
import "./Favorites.css"
import AuthContext from './store/auth-context'
import FavMeal from './FavMeal'


const FavoritesTwo = () => {

  
const {favorites} = useContext(AuthContext);

    const [favs, setFavs] = useState([]) //empty array 

    useEffect(() => {
      fetchFavorites();
    }, [favorites])

    const fetchFavorites = async() =>{
        const response = await fetch('http://localhost:5000/api/favorites')

        const json = await response.json()

        console.log(json)
        if (response.ok){
            setFavs(json)

        }
    }


    

  return (
    <div><h1>Favorites Two</h1>
    {(favs==0)?
    <div className="no-favorites"> <img src={Heart}/><p>
        You have no favorites. Heart a meal to see them here!</p></div>: <></>}

        {(favs.length > 0)? <> {favs.map(fav => (
            <FavMeal
              key={fav._id}
              id={fav._id}
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