import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as reducers from '.reducers'
import {reducer as formReducer} from 'redux-form'
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({
  noticias: noticiasReducer,
  categorias: categoriasReducer,
  form: formReducer
}))

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById('root'));
  </Provider>


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
