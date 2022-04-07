import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({nombre, id}) {
  return (
    <><h1>{nombre}</h1><div>

      <ItemCount nombre={nombre}
                  id={id}
      />

    </div></>
    
  )
}

export default ItemDetail