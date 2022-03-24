import React from 'react'
import img from './img/carrito2.png'

function CartWidget() {
  return (
    <button className="btn btn-primary" id="btnCarrito" type="submit"><img src={img} style={{"width":"40px","height":"20px","display":"flex"}}/></button>
  )
}

export default CartWidget