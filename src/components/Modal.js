import React from 'react'
import {Link} from 'react-router-dom'
import './modal.css'
function Modal({setShowModal}) {
    const closeModal=()=>setShowModal(false);
  return (
    <div className='modal-container'>
        <ul className='nav-links-modal'>
                    <li className='link-modal'>
                        <Link to="/" onClick={closeModal}>HOME</Link>
                    </li>
                    <li className='link-modal'>
                        <Link to="/about" onClick={closeModal}>ABOUT</Link>
                    </li>
                    <li className='link-modal'>
                        <Link to="/works" onClick={closeModal}>WORKS</Link>
                    </li>
                    <li className='link-modal'>
                        <Link to="/contact" onClick={closeModal}>CONTACT</Link>
                    </li>

                </ul>
    </div>
  )
}

export default Modal