import React from 'react';
import './index.css';

import SaveButton from '../SaveButton';

const DogImage = ({image, onSaveButtonClick}) => {
    return (
        <div className="DogImage">
            <img src={image} className="DogImage-image" alt="Dog" />
            <SaveButton onSaveButtonClick={() => onSaveButtonClick(image)} />
        </div>
    )
}
 
export default DogImage;