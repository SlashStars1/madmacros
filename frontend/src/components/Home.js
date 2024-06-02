import React, {useState} from 'react'
import Form from './Form'
import Header from './Header/Header'
import Menu from './Menu'
import Popup from 'reactjs-popup'

export const Home = () => {

  const [closed, setClosed] = useState(false);

  function closeHandler(){
    setClosed(true);
  }

  return (
    <div style={{padding: 0, margin:0}}>
      {!closed && (<Popup>Login successful <button onClick={closeHandler}>X</button></Popup> )}
        
        <Header></Header>
        <Form></Form>
        <Menu></Menu>
    </div>
  )
}
