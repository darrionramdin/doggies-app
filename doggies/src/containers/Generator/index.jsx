import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getDog, saveDog} from '../../services/actions';

import DogImage from '../../components/DogImage';
import GenerateButton from '../../components/GenerateButton';

class Generator extends Component {
    componentDidMount(){
        this.generateDog();
    }
    
    generateDog = () => {
        this.props.getDog();
    }

    saveDog = (image) => {
        this.props.saveDog(image);
    }

    render() {
        return (
            <div className="Generator">
                <DogImage 
                image={this.props.dog}
                onSaveButtonClick={this.saveDog} 
                />
                <GenerateButton 
                onGenerateDog={this.generateDog} />
            </div>
        )
    }
    
}



function mapStateToProps(state) {
    return {
        dog: state.dog
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getDog,
        saveDog
    }, dispatch)
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Generator);