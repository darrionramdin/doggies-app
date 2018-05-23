import axios from 'axios';

export default function getDog(){
    return dispatch => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                const dog = res.data.message;
                dispatch(getDogAsync(dog));
            })
    }
}

function getDogAsync(dog) {
    return {
        type: 'GET_DOG',
        payload: dog
    }
}