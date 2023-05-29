import React, { useState } from "react";
import Modal from "./Modal";
import NoteContext from "../ContextAPI/NoteContext";
import { useContext } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const closeModal=()=>{
    setModal(false)
  }
  const b= useContext(NoteContext)
  let quantity= 0;
  b.items.forEach((i)=>{ 
    quantity= quantity+ Number(i.quantity)
  })

  const toggleCart=()=>{
    setModal(true)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid bg-warning ">
          <h2 style={{fontFamily:'Monospace'}}><img src="https://img.icons8.com/?size=1x&id=erEevcUCwAMR&format=png" alt="img"/>React Meals</h2>
          <button type="button" className="btn btn-dark" onClick={toggleCart} >Your Cart <span className="badge text-bg-secondary bg-warning">{quantity}</span>
          </button>
        </div>
      </nav>

      {modal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Navbar;