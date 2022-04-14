import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestoneApp } from '../../firebase/config';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'


let objetos
let activado
function ItemDetailContainer() {
  const {detalleid} = useParams()
    let [products, setProducts] = useState([]);

    
    let [productos, setProductos] = useState([])
    
    let [anda,setAnda]=useState();
    let [detalleNumero,setDetalle]=useState();
    

  
  useState(detalleid)
  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb,'productos')
    const queryFilter = query(queryCollection, where('precio','==',2000))

    getDocs(queryCollection)
    .then(resp=> {setProductos(resp.docs.map(item =>({id:item.id,...item.data()})))
    activado=true
    setAnda(activado)})
    
  },[])
  console.log(productos)

  
  return (
    <div>
      
        {anda ? (
          <div>
            <ItemDetail
                
                nombre={productos[detalleid].caracteristicas}
                id={productos[detalleid].id}
                precio={productos[detalleid].precio}
                imagen ={productos[detalleid].imagen}
            />
          </div>
        ):(
          <div><h1 style={{"textAlign":"center"}}>Cargando...</h1></div>
        )}

    </div>
  )
}

export default ItemDetailContainer