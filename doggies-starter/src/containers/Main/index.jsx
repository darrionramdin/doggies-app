import React, { Component } from 'react';
import './index.css';
import { Route } from 'react-router-dom';

import Header from '../../components/Header';
import Generator from '../Generator';
import Navbar from '../../components/Navbar';
import SavedDogs from '../SavedDogs';

class Main extends Component {
    state = {
        showGenerator: true
    }
    
    render() { 
        return ( 
            <div className="Main">
                <div className="Main-container">
                    <Header />
                        <Route exact path="/" component={Generator} />
                        <Route path="/saved" component={SavedDogs} />
                    <Navbar />
                </div>
            </div>
         )
    }
}
 
export default Main;