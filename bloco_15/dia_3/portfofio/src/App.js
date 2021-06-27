import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
