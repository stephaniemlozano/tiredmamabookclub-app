import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles.css'
import Header from './components/Header.js';
import Home from './pages/Home.js'
import Footer from './components/Footer.js'
import myLogo from './images/tiredmamalogo.jpeg' 
import AboutUs from './pages/AboutUs';
import BookReviews from './pages/BookReviews';
import EachCard from './pages/EachCard';
import Admin from './components/Admin';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <img src={myLogo} alt="tired mama logo" width={150}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/books-reviews' element={<BookReviews /> } />
        <Route path='/review' element={<EachCard />}/>
        <Route path='*' element={<h1>Oops! Invalid page entry.</h1>} />
      </Routes>
      <br />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
