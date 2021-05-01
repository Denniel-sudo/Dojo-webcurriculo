import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import Routes from './routes/routes';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
