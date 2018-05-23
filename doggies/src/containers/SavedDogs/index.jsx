import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';

import SavedDogImage from '../../components/SavedDogImage';

class SavedDogs extends Component {
    render() { 
        let savedDogsList = this.props.savedDogs.map(dog => {
            return (
                <SavedDogImage 
                id={dog.id} 
                key={dog.id} 
                image={dog.dogImage} />
            )
        }) 
        return ( 
            <div className="SavedDogs">
                {savedDogsList}
            </div>
         )
    }
}

function mapStateToProps(state){
    return {
        savedDogs: state.savedDogs
    }
}
 
export default connect(mapStateToProps, null)(SavedDogs);