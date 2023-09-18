import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import DataScience from './components/Pages/DataScience';
import Market from './components/Pages/Market';
import DataBase from './components/Pages/DataBase';
import Footer from './components/Footer/Footer';
import Navbar from './components/header/Navbar';
import CloudComputing from './components/Pages/CloudComputing';
import Organization from './components/Pages/Organization';
import ImageGenerator from './components/Pages/Imagegenerator';
import Feed from './components/Footer/Feed';
import { Businessgoal, Company, Services, Success } from './components/Pages/Page'; 

class App extends Component {  
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/ImageGenerator" element={<ImageGenerator />} />
            <Route exact path="/DataScience" onClick={this.scrollToTop} element={<DataScience />} />
            <Route exact path="/Market" element={<Market />} />
            <Route exact path="/DataBase" element={<DataBase />} />
            <Route exact path="/organization" element={<Organization />} />
            <Route exact path="/Businessgoal" element={<Businessgoal />} />
            <Route exact path="/Company" element={<Company />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Success" element={<Success />} />
            <Route exact path="/CloudComputing" element={<CloudComputing />} />
          </Routes>
          <Feed />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
