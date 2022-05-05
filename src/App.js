import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
         <Header />
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movie/:imdbID" element={<MovieDetail />} />
         <Route path="*" element={<PageNotFound />} />
         </Routes>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
