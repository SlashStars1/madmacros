import React from 'react'
import Form from './Form'
import Header from './Header/Header'
import Menu from './Menu'
export const Home = () => {
  return (
    <div style={{padding: 0, margin:0}}>
        <Header></Header>
        <Form></Form>
        <Menu></Menu>
    </div>
  )
}
