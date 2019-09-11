import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import PageContent from './PageContent/PageContent.js';

class App extends React.Component {

  render () { return  (
    <div className="App">
      <Header/>
      <PageContent path='home'/>
    </div>);
  }
}

export default App;
