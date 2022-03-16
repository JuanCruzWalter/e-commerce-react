import React from 'react'
import img from './img/carrito2.png'

function CartWidget() {
  return (
    <button className="btn btn-primary" type="submit">carrito<img src={img} style={{"width":"45px","height":"30px"}}/></button>
  )
}

export default CartWidget