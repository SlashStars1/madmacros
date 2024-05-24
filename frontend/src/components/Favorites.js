import React,{useContext} from 'react'
import AuthContext from './store/auth-context'
import Meal from './Meal'
import Heart from '../assets/heart.png'
import "./Favorites.css"
const Favorites = () => {

const {favorites} = useContext(AuthContext);


let Chic_Fil_A = favorites.filter((fav)=>fav.Restaraunt==="Chic Fil A")
let Chipotle = favorites.filter((fav)=>fav.Restaraunt==="Chipotle")
let Ihop = favorites.filter((fav)=>fav.Restaraunt=="Ihop");
let Jamba = favorites.filter((fav)=> fav.Restaraunt=="Jamba")
let Shake_Shack = favorites.filter((fav)=> fav.Restaraunt=="Shake Shack")
let Halal_Guys = favorites.filter((fav)=> fav.Restaraunt=="Halal Guys")

  return (
    <div><h1>Favorites</h1>
    {(favorites==0)?
    <div className="no-favorites"> <img src={Heart}/><p>
        You have no favorites. Heart a meal to see them here!</p></div>: <></>}

    <br></br>
    {(Chic_Fil_A.length > 0)? <><h2>Chic Fil A</h2> {Chic_Fil_A.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }

{(Chipotle.length > 0)? <><h2>Chipotle</h2> {Chipotle.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }


{(Ihop.length > 0)? <><h2>Ihop</h2> {Ihop.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }

          
{(Jamba.length > 0)? <><h2>Jamba</h2> {Jamba.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }
  
            
{(Shake_Shack.length > 0)? <><h2>Shake Shack</h2> {Shake_Shack.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }

{(Halal_Guys.length > 0)? <><h2>Halal Guys</h2> {Halal_Guys.map(fav => (
            <Meal
              key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
              fav={true}
            />
          ))}</> :  <></> }
  
  
 
    </div>
  )
}

export default Favorites