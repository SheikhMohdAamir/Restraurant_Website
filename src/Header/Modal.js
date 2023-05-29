import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import NoteContext from "../ContextAPI/NoteContext";
import { useState } from "react";

const Modal = (props) => {
  const a = useContext(NoteContext);
  const[quantity, setQuantity] = useState(a);



  const modalContainer = {
    position: "fixed",
    maxWidth: "30rem",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "1rem",
    padding: "2rem 3rem",
  };

  const modalWrapper = {
    position: "fixed",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    background: "rgba(0, 0, 0, 0.5)",
  };


    const minus=(i)=>{
      quantity.items.map((mapi)=>{
        if(mapi.dish===i.dish && mapi.quantity>0){
          mapi.quantity-=1
        }
      return(i)
    })
    setQuantity({...quantity})
  }

    const plus=(i)=>{
      quantity.items.map((mapi)=>{
        if(mapi.dish===i.dish && mapi.quantity<5){
          mapi.quantity=Number(mapi.quantity)+1
        }
      return(i)
    })
    setQuantity({...quantity})
    }

      let q = 0;
      let totalAmount = a.items.map((i) => {
        q = q + Number(i.price) * Number(i.quantity)
        return q;
      });

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div style={modalWrapper} onClick={props.closeModal}></div>
          <div className="container" style={modalContainer}>
            <ul>
              {quantity.items.map((i) => {
                return (
                  <>
                    <li key={i.id}>
                      {i.dish} <b>{`x${i.quantity}`}</b>{"   "}
                      <button
                        type="button"
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          minus(i);
                        }}
                      >
                        -
                      </button>{" "}

                      <button
                        type="button"
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          plus(i);
                        }}
                      >
                        +
                      </button>
                    </li>
                    <b>{`Rs.${i.price}`}</b>
                    <hr />
                  </>
                );
              })}
            </ul>
            <h4>Total Amount :</h4>
            <h4>Rs.{totalAmount.pop()}</h4>
            <button type="button" className="btn btn-dark" onClick={()=>{console.log('Your Order Is Placed!')}}>
              Order
            </button>

            <button
              type="button"
              className="btn btn-light"
              onClick={props.closeModal}
            >
              Close
            </button>
          </div>
        </>,
        document.getElementById("modalroot")
      )}
    </>
  );
};

export default Modal;
