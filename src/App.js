import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Crud from './components/Crud';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mt-5">
        <AboutMe />
        <MySkills />
        <MyProjects />
        <Crud />
      </main>
      <Footer />
    </div>
  );
}

export default App;
