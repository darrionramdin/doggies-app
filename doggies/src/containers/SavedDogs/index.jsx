import React, { Component } from 'react';
import './index.css';

import SavedDogImage from '../../components/SavedDogImage';

class SavedDogs extends Component {
    render() { 
        return ( 
            <div className="SavedDogs">
                <SavedDogImage image="https://images.pexels.com/photos/879788/pexels-photo-879788.jpeg" />
            </div>
         )
    }
}
 
export default SavedDogs;