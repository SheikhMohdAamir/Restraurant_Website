import React from 'react'

const Item = (props) => {
  return (
    <div className='container'>
      
        <ol class="list-group ">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{props.dish}</div>
            {props.ingredients}
            <div>{`Rs ${props.price}`}</div>
            </div>
       </li>
        </ol>

    </div>
  )
}

export default Item
