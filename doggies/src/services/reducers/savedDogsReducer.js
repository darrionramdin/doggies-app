function savedDogs(state=[], action){
    if(action.type === 'SAVE_DOG'){
        let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const newState = [
            ...state, 
            {
                id: randomString, 
                dogImage: action.payload
            }
        ];
        return newState;
        
    } else {
        return state;
    }
}

export default savedDogs;