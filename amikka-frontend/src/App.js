import React from 'react'
import 'react-sticky-header/styles.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './styles.global.css';
import './App.css'
import './pages/home/home.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
