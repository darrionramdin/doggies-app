import React from 'react';
import './index.css';

import SaveButton from '../SaveButton';

const DogImage = ({image}) => {
    return (
        <div className="DogImage">
            <img src={image} className="DogImage-image" alt="Dog" />
            <SaveButton />
        </div>
    )
}
 
export default DogImage;