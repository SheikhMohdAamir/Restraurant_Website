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

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger ">
          <h2>React Meals</h2>
          <button type="button" className="btn btn-dark" onClick={()=>{setModal(true)}}>Your Cart<span class="badge text-bg-secondary">{b.items.length}</span>
          </button>
        </div>
      </nav>

      {modal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Navbar;
