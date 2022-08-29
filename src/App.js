import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListNews from './components/ListNews/ListNews';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from './components/Archive/Archive';
import NewsDetail from './components/ListNews/NewsDetail/NewsDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListNews/>} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/details/:id" element={<NewsDetail />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
