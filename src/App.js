import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AppContent from './components/AppContent';
import CeaseView from './modules/cease/CeaseView';
import SalesView from './modules/sales/SalesView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppContent>
          <Navbar />
          <CeaseView />
          <SalesView />
      </AppContent>
      </div>
    );
  }
}

export default App;
