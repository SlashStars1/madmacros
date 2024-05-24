import React, {useState, useContext, useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import './Meal.css'
import AuthContext from './store/auth-context';
const Meal = ({name, serving, imageURL, calories, protein, food, fav}) => {
    
  const{favorites, setFavorites} = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(fav); //sets the favorite state to whatever argument was passed in

  //to help handle the asynchronous nature 
  useEffect(() => {
    if (isFavorite) {
      addFavorite();
    } else {
      removeFavorite(name);
    }
  }, [isFavorite]);

 
  function favoriteHandler(){

    
    let opposite = !isFavorite
        //change open heart to filled in heart
        setIsFavorite(opposite)
   
       
      
    }

    function addFavorite(){
      // Check if the meal is already in favorites
    if (!favorites.some(fav => fav.Name === name)) {
      setFavorites([...favorites, {
        Calories: calories,
        Name: name,
        "Protein (g)": protein,
        "Serving Size Description": serving,
        Restaraunt: food
      }]);
    }
    }
    
    function removeFavorite(itemName){
      
      //get a copy of the current favorites
const filteredFavorites = favorites.filter((fav) => fav.Name !== itemName);

  setFavorites(filteredFavorites)
}


    

   
    
  return (
    <div  className="meal-container">
    <div className='meal-name'>   <p>{name}</p></div>
     <p>   {serving}</p>
     <p>  {calories} cals</p>
     <p>   {protein}g protein</p>
       <div className="favoriteDiv">
        <br></br>
         { isFavorite ? <FaHeart onClick={favoriteHandler}  /> :
       <FaRegHeart  onClick={favoriteHandler} /> }
       
       </div>

   </div>
  )
}

export default Meal