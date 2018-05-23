import { combineReducers } from 'redux';
import dogReducer from './dogReducer';
import savedDogsReducer from './savedDogsReducer';

const rootReducer = combineReducers({
    dog: dogReducer,
    savedDogs: savedDogsReducer
})

export default rootReducer;