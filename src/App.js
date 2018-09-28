import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder>
          
        </BurgerBuilder> 
      </Layout>
    );
  }
}

export default App;
