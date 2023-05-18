import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return(
    <>
    {props.items.map((i)=>{
        return(<Item dish={i.dish} ingredients={i.ingredients} price={i.price} />)
    })}
    </>
  )
}

export default ItemList
