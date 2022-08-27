import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles.css'
import Header from './components/Header.js';
import Home from './pages/Home.js'
import Footer from './components/Footer.js'
import MyImage from './images/tiredmamalogo.jpeg' 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <h1>tired mama book club</h1>
      <h4>we're all tired here.</h4>
      <img src={MyImage} alt="tired mama logo" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Oops! Invalid page entry.</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
