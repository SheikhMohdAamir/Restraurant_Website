import React from 'react'
import Item from './Item'

const ItemList = (props) => {

  return(
    < div > 
    <h3 style={{fontFamily:'Monospace',color:'yellow',textAlign:'center'}}>Food Items In The Menu are...</h3>
    {props.items.map((i)=>{
        return(
          <><Item item={i} key={i.id}/> <br></br></>)
    })}
    </div>
  )
}

export default ItemList;
