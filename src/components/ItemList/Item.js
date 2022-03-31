import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'



/* const Items = ({ nombres, caracteristicas, imgs, id }); */
                  
function Item({nombres,caracteristicas,imgs,precio,id}) {
  return (
    
    <div className='card'>
        <div className="card__" >
            <img src={imgs} className="card__img" alt="..."/>
            <div className="card__body">
                <h5 className="card__title" style={{"color":"black"}}>{nombres}</h5>
                <p className="card__text" style={{"color":"black"}}>{caracteristicas}</p>
                <h5 className="card__title" style={{"color":"black"}}>{precio}</h5>
                <Link to={`/${id}`}>
                  <button className='btn, card__btn'> Ver Detalle </button>
                </Link>
                  
            </div>
        </div>
        
     </div>
     

  )
}

export default Item