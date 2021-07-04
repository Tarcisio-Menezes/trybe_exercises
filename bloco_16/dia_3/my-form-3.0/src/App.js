import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div>
      <Provider store={ store } >
        <Form />
      </Provider>
    </div>
    
  );
}

export default App;