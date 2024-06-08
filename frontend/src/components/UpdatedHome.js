import React, {useState} from 'react'
import Form from './Form'
import Header from './Header/Header'
import Menu from './Menu'
import Popup from 'reactjs-popup'
import salad from "../assets/salad.jpg"
import "./UpdatedHome.css"
export const UpdatedHome = () => {


 

  return (
    <div style={{padding: 0, margin:0}}>
        
       <div >

        <img src={salad}  className="circle"></img>
        <p>Salad</p>
       </div>
        <Form></Form>
        <Menu></Menu>
    </div>
  )
}

