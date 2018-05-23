import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDog from '../../services/actions';

import DogImage from '../../components/DogImage';
import GenerateButton from '../../components/GenerateButton';

class Generator extends Component {
    componentDidMount(){
        this.generateDog();
    }
    
    generateDog = () => {
        this.props.getDog();
    }

    render() {
        return (
            <div className="Generator">
                <DogImage image={this.props.dog} />
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
        getDog
    }, dispatch)
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Generator);