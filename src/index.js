import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import rootReducer from "./Services/Reducers/index";
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer)
console.log(store)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// What is Redux ? 

// A container wheere you can store your whole application data . 
// so we call it to state Management.
// it doesn't belong to the component state.

// Redux Architecture 

// Action  - Action will send data components to store  Collect data from component or API  
// Reducer - Get data from Action and than send to Store it also  filter the data  
// Store   - Store the data or we call it state of complete Application where all the data store and then send it to anywhere 
// on redux there is only one store for the application. 
// View- React Component where we write jsx 
// data will be uniDirectional.

// what is constant in redux ?
// it will tell that where our data is placed.

// define strictMode in react

// what is container in redux ?

// in short  Container is used to connect react and redux together 






