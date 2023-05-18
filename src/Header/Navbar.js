import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger ">
            <h2>React Meals</h2>
            <button type="button" className="btn btn-dark">Your Cart<span class="badge text-bg-secondary">0</span></button>
        </div>
        </nav>
  )
}

export default Navbar
