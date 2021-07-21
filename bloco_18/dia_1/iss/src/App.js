import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSProvider from './context/ISSProvider';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>International Space Station Tracker</h1>
        <ISSProvider>
          <ISSLocation />
        </ISSProvider>
      </div>
    );
  }
}

export default App;