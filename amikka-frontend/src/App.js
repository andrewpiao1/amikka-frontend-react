import React from 'react'
import 'react-sticky-header/styles.css'
import { Element } from 'react-scroll'
import StickyHeader from 'react-sticky-header'
import Header from './components/header/Header2'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'
import './App.css'
import './pages/home/home.css'

function App() {
  return (
    <div className="App">
      {/* <StickyHeader header={<Header />}>
        <Home />
      </StickyHeader>

      <Element name='about' className='element'>
          <Home />
      </Element> */}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
