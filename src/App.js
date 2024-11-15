// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MainPage from './components/MainPage';
import WinnersPage from './components/WinnersPage';
import JuryPage from './components/JuryPage';
import Regulations from './components/Regulations';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
        <Router>
        <div className="App">
        <Menu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/winners" element={<WinnersPage />} />
            <Route path="/jury" element={<JuryPage />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<Article />} />
            {/* <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/form" element={<ApplicationForm />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<Article />} /> */}
          </Routes>
          <Footer  />
        </div>
      </Router>
  );
}

export default App;
