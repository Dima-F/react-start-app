// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {Router, Route,} from 'react-router';
// 
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

function playList(state = [], action){
    if(action.type==='ADD_TRACK'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

const store = createStore(playList);

store.subscribe(()=>{
    console.log('subscribe',store.getState());
});

store.dispatch({type:'ADD_TRACK', payload:'Smels like spirit'});
store.dispatch({type:'ADD_TRACK', payload:'Enter sendman'});