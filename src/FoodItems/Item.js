import React from 'react'

const Item = (props) => {
  return (
    <div className='container '>
      
        <ol class="list-group ">
        <li class="list-group-item d-flex justify-content-between align-items-start bg-danger">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{props.dish}</div>
            {props.ingredients}
            <div>{`Rs ${props.price}`}</div>
            </div>

            <label>Quantity</label>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <button type="button" class="btn btn-dark">+Add</button>
       </li>
        </ol>

    </div>
  )
}

export default Item
