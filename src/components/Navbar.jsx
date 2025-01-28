/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import Burguesa from './Burguesa'
import { FaShoppingBag } from 'react-icons/fa'
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

function Navbar() {
const [clicked, setClicked] = useState(false)
const handleClick = () => {
    setClicked(!clicked)
}
  return (
      <NavContainer>
        <h2>Chichilo <span>Store</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a href="/">Argentina</a>
                <a href="/">River</a>
                <a href="/">Boca</a>
                <a href="/">Real Madrid</a>
                <a href="/">Barcelona</a>
            </div>
            <div className={`cart-widget ${clicked ? 'active' : ''}`}>
                <CartWidget clicked={clicked} handleClick={handleClick}/>
            </div>
        <div className='burguer'>
            <Burguesa clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className= {`initial ${clicked ? 'active' : ''}`}></BgDiv>
        <ItemListContainer/>
      </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.nav`
h2 {
    color: white;
    font-weight: 400;
    margin-left: 1em;
    span{
        font-weight: bold;
   }
}
padding: auto;
background-color: black;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;

a{
    color: white;
    text-decoration: none;
    margin-right: 1em;
}

.cart-widget{
    color: white;
    font-size: 1.5em; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1em;


    &:hover{
      color: black;
      background-color: #f7f7f7;
      border-radius: 20px;
      cursor: pointer;
      padding: 5px 10px;
      transition: all .6s ease;
    }
}

.burguer{
@media(min-width: 768px){
        display: none;
    
    }
}

.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a{
        color: black;
        display: block;
        font-size: 3em;
        &:hover{
            color: #000000;
            background-color: #f7f7f7;
            border-radius: 20px;
            cursor: pointer;
            display: inline-block;
            padding: 5px 10px;
            transition: all .6s ease;
        }
    }
@media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
        font-size: 1em;
        color: #ffffff;
        display: inline;
    }
}
}

.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2em;
        margin-top: .5rem;
        color: #ffffff;
        &:hover{
            background-color: black;
            border-radius: 20px;
            cursor: pointer;
            display: inline-block;
            padding: 12px 25px;
            transition: all .6s ease;
        }
    }
   
}
`
const BgDiv = styled.div`
    position: absolute;
    background-color: #066f99;
    width: 100%;
    height: 100%;
    left: -700px;
    top: -1000px;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 90% 0;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;    
    }
`