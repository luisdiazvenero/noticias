import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import Category from './components/Category';
import { addCategory } from './reducers/Categorias';

import {reset} from 'redux-form';




class App extends Component {
  render() {
    const { categories, addCategory} = this.props

    return (
      <div className="App">
        <Category addCategory={addCategory} categories={categories} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Categorias: { data: categories } } = state

  return {
    categories,
  }
}
const mapDispatchToProps = dispatch => ({
    addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
