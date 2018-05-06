import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, hashHistory } from 'react-router';
import About from './About';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>,
    document.getElementById('root'));





// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
//
// store.subscribe(()=>{
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track=>{
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });
//
//
// addTrackBtn.addEventListener('click',()=>{
//     const trackName = trackInput.value;
//     store.dispatch({type:'ADD_TRACK', payload:trackName});
// });
