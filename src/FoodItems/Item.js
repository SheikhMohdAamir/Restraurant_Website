import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import NoteContext from '../ContextAPI/NoteContext'


const Item = (props) => {
  const [value, setValue] = useState([]);
  const cart= useContext(NoteContext)

  const quantityHandler=(event)=>{
    setValue(event.target.value)
  }
  const addingToCart=()=>{
    props.item.quantity=value
    cart.addItems(props.item)   
    setValue('')
    
  }

  return (
    
    <div className='container '>
  
        <ol class="list-group ">
        <li class="list-group-item d-flex justify-content-between align-items-start bg-danger">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{props.item.dish}</div>
            {props.item.ingredients}
            <div>{`Rs ${props.item.price}`}</div>
            </div>

            <label>Quantity</label>
            <input type='number' value={value} onChange={quantityHandler} style={{width:'40px',height:'30px',marginRight:'10px', borderColor:'black'}}/>
            
            <button type="button" class="btn btn-dark" onClick={addingToCart} >+Add</button>
       </li>
        </ol>

    </div>

  )
}

export default Item;


