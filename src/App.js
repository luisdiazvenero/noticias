import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category'
//import News from './components/News'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    const{ categories} = this.props
    return (
      <div className="App">
        <Category categories={categories} />
        {/*<News />*/}
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
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(App);
