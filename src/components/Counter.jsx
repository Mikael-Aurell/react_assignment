import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter); //makes a subscribing automatic
    const dispatch = useDispatch(); //dispatch is a function

    const incrementHandler = () =>{
        dispatch({type: 'increment'});
    };

    const decrementHandler = () =>{
        dispatch({type: 'decrement'});
    };

        return (
            <div>
                {counter}
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        );
    }

export default Counter;