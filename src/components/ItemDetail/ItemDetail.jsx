import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({nombre,id,precio,imagen}) {

  const [activador,setActivado] = useState()
  
  return (
      <>
      <img style={{"width":"30%","marginLeft":"0%"}} src={imagen}/>
  
      <h1 style={{"width":"30%","margin":"auto","fontSize":"2rem"}}>{nombre}</h1>
      <>
      
      
      <div>
      
        <ItemCount nombre={nombre}
                  id={id}
                  precio={precio}
        />
       
      </div>
      
      
    </></>
    
  )
}

export default ItemDetail