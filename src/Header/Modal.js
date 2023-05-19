import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {

    const modalContainer={
        position:'fixed',
        maxWidth: '30rem',
        top:'30%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        backgroundColor:'white',
        borderRadius:'1rem',
        padding:'2rem 3rem'
    }

    const modalWrapper={
        position:'fixed',
        left:'0',
        right:'0',
        bottom:'0',
        top:'0',
        background:'rgba(0, 0, 0, 0.5)'
    }

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div style={modalWrapper}  onClick={props.closeModal}></div>
          <div className="container" style={modalContainer}>
            <h2>Total Amount</h2>
            <p>Rs 0</p>

            <button type="button" className="btn btn-dark">
              {" "}
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
