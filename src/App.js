import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/style.scss';
import LandingPage from './pages/LandingPage';
import MorePage from './pages/MorePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' Component={LandingPage} />
        <Route path='more' Component={MorePage} />
      </Routes>
    </div>
  );
}

export default App;
