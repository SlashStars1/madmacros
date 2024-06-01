import React, {useState, useContext, useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import './Meal.css'
import AuthContext from './store/auth-context';

import { useUserAuthContext } from './hooks/useUserAuthContext';

const FavMeal = ({name, serving, calories, protein, food,id,fav}) => {
 

  const{favorites, setFavorites} = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(fav); //sets the favorite state to whatever argument was passed in
    const {user}=useUserAuthContext()
   const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


  //to help handle the asynchronous nature 
  useEffect(() => {
    if (!isFavorite) {
      removeFavorite(name);
    }
  }, [isFavorite]);

 
  function favoriteHandler(){    
    let opposite = !isFavorite
        //change open heart to filled in heart
        setIsFavorite(opposite)
    }

    
    function removeFavorite(itemName){
      
      //get a copy of the current favorites
const filteredFavorites = favorites.filter((fav) => fav.Name !== itemName);
  setFavorites(filteredFavorites)

///request 
const myRequest = new Request(`${apiUrl}/api/favorites/${id}`);
fetch(myRequest, { 
   
 // Adding method type 
 method: "DELETE", 
 headers:{
    'Authorization':`Bearer ${user.token}`
         
 }
}) 
.then(response => {
 console.log(response);
})
.catch(error => {
 console.error('There was a problem with the delete operation:', error);
});

 


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

export default FavMeal