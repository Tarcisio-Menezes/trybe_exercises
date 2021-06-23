import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
