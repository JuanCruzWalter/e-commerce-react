import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({nombre}) {
  return (
    <><h1>{nombre}</h1><div>

      <ItemCount />

    </div></>
    
  )
}

export default ItemDetail