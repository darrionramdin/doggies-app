import React, { Component } from 'react';
import './index.css';

import DogImage from '../../components/DogImage';
import GenerateButton from '../../components/GenerateButton';

class Generator extends Component {
    render() {
        return (
            <div className="Generator">
                <DogImage image="https://images.pexels.com/photos/879788/pexels-photo-879788.jpeg" />
                <GenerateButton />
            </div>
        )
    }
    
}
 
export default Generator;