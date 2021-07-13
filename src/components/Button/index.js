import React from 'react';
import './styles.css'

const Button = ({ label, onClick, id }) => {
    return (
        <button id={id} onClick={onClick} className='stopwatch-btn'>
            <span>{label}</span>
        </button>
    );
};

export default Button;