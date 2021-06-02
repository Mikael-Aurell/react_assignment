import {createStore} from "redux";



const reducer = (state = { counter: 0 ,categories: [], categoriesDetails: [],
    showDetails: false, showForm: false}, action) => { //Reducer function
    if (action.type === 'increment') {
        return {
            counter: state.counter +1,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter -1,
        };
    }

    return state;
};

const store = createStore(reducer); //Central Data Store. createStore point at counterReducer

export default store;