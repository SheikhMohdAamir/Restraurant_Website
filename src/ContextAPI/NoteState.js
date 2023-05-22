import React from 'react'
import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) => {
    const [items, setItems] = useState([]) ;

    const addItems=((item)=>{
        setItems([...items, item])
    })
    const removeItems=(()=>{})

    const noteContext=
    {
        items:items,
        addItems:addItems,
        removeItems:removeItems
    }

  return (
    <NoteContext.Provider value={noteContext}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
