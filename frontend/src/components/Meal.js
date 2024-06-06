import React, {useState, useContext, useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import './Meal.css'
import AuthContext from './store/auth-context';
import { useUserAuthContext } from './hooks/useUserAuthContext';
 

const Meal = ({name, serving, calories, protein, food, fav}) => {
     const{favorites, setFavorites, setError, error} = useContext(AuthContext);
    
  const [isFavorite, setIsFavorite] = useState(fav); //sets the favorite state to whatever argument was passed in
const {user} = useUserAuthContext()
   const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


  //to help handle the asynchronous nature 
  useEffect(() => {
    if (isFavorite) {
      addFavorite();
    } else {
      removeFavorite(name);
    }
  }, [isFavorite]);

 
  function favoriteHandler(){

    if (user){
    let opposite = !isFavorite
        //change open heart to filled in heart
        setIsFavorite(opposite)
    }
    else if (!user && !isFavorite){
      setError('You must be logged in to favorite meals')
      console.log("error")
    }
       
      
    }

    function addFavorite(){

      if (!user){
       
       return
      }
      else{
        setError("")
      }

      // Check if the meal is already in favorites
    if (!favorites.some(fav => fav.Name === name)) {
      setFavorites([...favorites, {
        Calories: calories,
        Name: name,
        "Protein (g)": protein,
        "Serving Size Description": serving,
        Restaraunt: food
      }]);


       //add to the db
       console.log(name, food, serving, protein, calories)
    
   ///request 
   const myRequest = new Request(`${apiUrl}/api/favorites/`);
   fetch(myRequest, { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        "name": name,
        "food": food,
        "serving": serving, 
        "protein": protein, 
        "calories": calories
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8",
        'Authorization':`Bearer ${user.token}`
         
    } 
}) 
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the post operation:', error);
  });

    }

   


    }
    
    function removeFavorite(itemName){
      
      //get a copy of the current favorites
const filteredFavorites = favorites.filter((fav) => fav.Name !== itemName);
  setFavorites(filteredFavorites)

  
  //have to find id of the fav meal that this maps to 
}


    

   
    
  return (
    <div  className="meal-container">
    <div className='meal-name'>   <p>{name}</p></div>
     <p>   {serving}</p>
     <p>  {calories} cals</p>
     <p>   {protein}g protein</p>
       <div className="favoriteDiv">
        <br></br>

         { isFavorite ? <FaHeart onClick={favoriteHandler}  className='heart'/> :
       <></> }
       
       {!isFavorite ? <FaRegHeart  onClick={favoriteHandler} className="heart" id="regheart"/> : <></> }
       </div>

   </div>
  )
}

export default Meal