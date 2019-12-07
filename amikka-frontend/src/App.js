import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from './constants/Routes'

// Authorization component imports
import { AuthProvider } from './constants/Auth'
import PrivateRoute from './constants/PrivateRoute'

// Component imports
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Page imports
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Method from './pages/method/Method'
import Contact from './pages/contact/Contact'
import Portal from './pages/portal/Portal'

// CSS imports
import './styles.global.css';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.METHOD} component={Method} />
        <Route path={ROUTES.SERVICES} component={Services} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <AuthProvider>
          <PrivateRoute path={ROUTES.PORTAL} component={Portal} />
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
