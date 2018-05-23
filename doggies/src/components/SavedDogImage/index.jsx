import React from 'react';
import './index.css';

const SavedDogImage = ({image}) => {
    return (
        <div className="SavedDogImage">
            <img src={image} className="SavedDogImage__image" alt="Saved Dog" />
        </div>
    )
}
 
export default SavedDogImage;