
import React from 'react';

const ButtonGroup = ({ buttons, handleButtonClick }) => {
    return (
        <div className="buttons">
            {buttons.map((button, index) => (
                <button key={index} onClick={() => handleButtonClick(button.name)} className={button.className}>
                    {button.label}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
