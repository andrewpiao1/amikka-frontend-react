import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import * as ROUTES from './constants/Routes'

// Component imports
import Footer from './components/footer/Footer'

// Page imports
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Method from './pages/method/Method'
import Contact from './pages/contact/Contact'
import Auth from './pages/auth/Auth.jsx'
import Portal from './pages/portal/Portal.jsx'

// CSS imports
import './styles.global.css';
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.METHOD} component={Method} />
        <Route path={ROUTES.SERVICES} component={Services} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path='/user' render={props => <Portal {...props} />} />
        <Route path='/auth' render={props => <Auth {...props} />} />
        <Redirect from='/' to='/user/dashboard' />
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
