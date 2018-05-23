function dog(state='', action){
    if(action.type === 'GET_DOG'){
        const newState = action.payload;
        return newState;
    } else {
        return state;
    }
}

export default dog;