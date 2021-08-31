import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ImageGallery.module.css';

const Modal = () => {
    // const inputId = shortid.generate();
    // const labeltId = shortid.generate();
    return (
        <div className="Overlay">
            <div className="Modal">
                <img src="" alt="" />
            </div>
        </div>
    );
}    

export default Modal;