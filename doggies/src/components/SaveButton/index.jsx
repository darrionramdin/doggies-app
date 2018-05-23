import React from 'react';
import './index.css';
import saveIcon from './assets/save.png';

const SaveButton = () => {
    return (
        <button className="SaveButton">
            <img src={saveIcon} className="SaveButton__icon" alt="Save" />
        </button>
    )
}
 
export default SaveButton;