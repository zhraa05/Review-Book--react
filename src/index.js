import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import App from './App';
import './index.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BookDetails from './components/BookDetails/BookDetails'
import BookList from './components/BookList/BookList'
import { AppProvider } from './contaxt';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter></AppProvider>
);


