import React from 'react';
import './index.css';

const GenerateButton = ({onGenerateDog}) => {
    return (
        <button onClick={onGenerateDog} className="GenerateButton">
            Generate Dog
        </button>
    )
}
 
export default GenerateButton;

