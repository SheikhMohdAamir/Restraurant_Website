import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import NoteContext from '../ContextAPI/NoteContext'


const Item = (props) => {
  const [value, setValue] = useState(1);
  const cart= useContext(NoteContext)

  const quantityHandler=(event)=>{
    setValue(event.target.value)
  }

  const addingToCart=()=>{
    props.item.quantity=value
    cart.addItems(props.item)   
    setValue(1)
}



  return (
    
    <div className='container '>
  
        <ol className="list-group ">
        <li className="list-group-item d-flex justify-content-between align-items-start bg-warning">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{props.item.dish}</div>
            <i>{props.item.ingredients}</i>
            <div><b>{`Rs.${props.item.price}`}</b></div>
            </div>

            <b>Quantity</b>
            <input type='number' value={value} onChange={quantityHandler} style={{width:'35px',height:'30px',marginRight:'10px', borderColor:'black'}} min={1} max={5}/>
            
            <button type="button" className="btn btn-dark" onClick={addingToCart} >+Add</button>
       </li>
        </ol>
    </div>
  )
}

export default Item;


