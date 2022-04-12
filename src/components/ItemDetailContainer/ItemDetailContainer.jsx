import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


let objetos
let activado
function ItemDetailContainer() {
  const {detalleid} = useParams()
    let [products, setProducts] = useState([]);
    let [anda,setAnda]=useState();
    let [detalleNumero,setDetalle]=useState();
    
    useState(detalleid)
     useEffect(()=>{
      fetch('objetos.json')
        .then(response => response.json())
        .then(data => {objetos=data

        /* console.log(objetos) */
        activado=true
        setProducts(objetos)
        
      setAnda(activado)
      })
        .catch("no anda")
    },[]) 
  return (
    <div>
      
        {anda ? (
          <div>
            <ItemDetail
                nombre={products[detalleid].caracteristicas}
                id={products[detalleid].id}
                precio ={products[detalleid].precio}
            />
          </div>
        ):(
          <div>no anda</div>
        )}

    </div>
  )
}

export default ItemDetailContainer