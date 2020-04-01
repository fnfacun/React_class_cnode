import React, { Component } from 'react';
import IndexRouter from './router/index';
import MainHeader from './common/components/main-header';
import MainFooter from './common/components/main-footer';
import './common/css/index.css';

class App extends Component {
  render(){
    return (
      <div className="pageWrap">
        <MainHeader />
        <main id="main">
          <IndexRouter />
        </main>
        <MainFooter />
      </div>
    );
  }
}

export default App;
