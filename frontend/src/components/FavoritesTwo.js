import React,{useEffect, useState, useContext} from 'react'
import Heart from '../assets/heart.png'
import "./Favorites.css"
import AuthContext from './store/auth-context'
import FavMeal from './FavMeal'
import { useUserAuthContext } from './hooks/useUserAuthContext'

const FavoritesTwo = () => {

  
const {favorites} = useContext(AuthContext);
const {user} = useUserAuthContext()
    const [favs, setFavs] = useState([]) //empty array 

    useEffect(() => {
      if (user){
        fetchFavorites();
      }
      else{
        setFavs([]) //if user is not logged in set the favorites in state to empty.
      }
      
    }, [favorites, user])

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    const fetchFavorites = async() =>{
        const response = await fetch(`${apiUrl}/api/favorites`,{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        })

        const json = await response.json()

        console.log(json)
        if (response.ok){
            setFavs(json)

        }
    }

    let Jamba = {};
    let Chipotle = {};
    let Chic_Fil_A = {};
    let Ihop = {};
    let Shake_Shack={};
    let Panera_Bread = {};
    if (favs.length>0){
      Chic_Fil_A = favs.filter((fav)=>fav.food==="Chic Fil A")
      Chipotle = favs.filter((fav)=>fav.food==="Chipotle")
Ihop = favs.filter((fav)=>fav.food=="Ihop");
Jamba = favs.filter((fav)=> fav.food=="Jamba");
Shake_Shack = favs.filter((fav)=> fav.food=="Shake Shack")

Panera_Bread = favs.filter((fav)=> fav.food==="Panera Bread")
    }


    

  return (
    <div><h1>Favorites</h1>

    {!user && (

<div className="no-favorites"> <img src={Heart}/><p>
Please login to see your favorite meals!</p></div>
    )}

    {(favs==0 && user)?
    <div className="no-favorites"> <img src={Heart}/><p>
        You have no favorites. Heart a meal to see them here!</p></div>: <></>}

        {(Jamba.length > 0)?  
        (<> 
        <h2>Jamba</h2>
        {
        Jamba.map(fav => (
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
          ))}</>):  <></> }

          
        {(Chipotle.length > 0)?  
        (<> 
        <h2>Chipotle</h2>
        {
        Chipotle.map(fav => (
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
          ))}</>):  <></> }


{(Chic_Fil_A.length > 0)?  
        (<> 
        <h2>Chic Fil A</h2>
        {
        Chic_Fil_A.map(fav => (
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
          ))}</>):  <></> }


{(Panera_Bread.length > 0)?  
        (<> 
        <h2>Panera Bread</h2>
        {
        Panera_Bread.map(fav => (
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
          ))}</>):  <></> }


       
{(Ihop.length > 0)?  
        (<> 
        <h2>Ihop</h2>
        {
        Ihop.map(fav => (
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
          ))}</>):  <></> }

{(Shake_Shack.length > 0)?  
        (<> 
        <h2>Shake Shack</h2>
        {
        Shake_Shack.map(fav => (
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
          ))}</>):  <></> }

       
       
       </div>
  )
}

export default FavoritesTwo