import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
function App() {
  return (
    <>
    <div className='app'>
      <Header/>
      <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </div>
      <Footer/>
    </>
  );
}

export default App;