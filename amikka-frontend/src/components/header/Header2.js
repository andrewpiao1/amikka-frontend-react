import React, { Component } from 'react'
import { Menu, Grid, Image } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../../pages/home/Home.js'
import About from '../../pages/about/About.js'
import Services from '../../pages/services/Services.js'
import Contact from '../../pages/contact/Contact.js'
import Logo from '../../images/logo3.svg'

const menuStyles = {
  fontFamily: 'raleway',
  fontSize: '18px',
  fontWeight: 'bold',
}

export default class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'HOME',
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className='Header'>
        <Router>
          <Grid centered>

            <Grid.Row textAlign='center'>
              <Image src={Logo} />
            </Grid.Row>


            <Grid.Row style={{ height: '70px' }} columns={5}>
              <Menu text>
                <Grid.Column width={16} textAlign='center'>

                  <Grid centered relaxed stackable>
                    <Grid.Row columns={5} centered>

                      <Grid.Column textAlign='center' width={3}>
                        <Menu.Item as={Link} to='/' >
                          <div style={menuStyles}>
                            HOME
                          </div>
                        </Menu.Item>
                      </Grid.Column>

                      <Grid.Column textAlign='center' width={3}>
                        <Menu.Item as={Link} to='/about'>
                          <div style={menuStyles}>
                            ABOUT
                          </div>
                        </Menu.Item>
                      </Grid.Column>

                      <Grid.Column textAlign='center' width={3} style={{paddingRight: '18%' }}>
                        <Menu.Item as={Link} to='/services'>
                          <div style={menuStyles}>
                            SERVICES
                          </div>
                        </Menu.Item>
                      </Grid.Column>

                      <Grid.Column textAlign='center' width={3} style={{paddingRight: '18%' }}>
                        <Menu.Item as={Link} to='/contact'>
                          <div style={menuStyles}>
                            CONTACT
                          </div>
                        </Menu.Item>
                      </Grid.Column>

                      <Grid.Column textAlign='center' width={3}>
                        <Menu.Item as={Link} to='portal'>
                          <div style={menuStyles}>
                            PORTAL
                          </div>
                        </Menu.Item>
                      </Grid.Column>

                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Menu>
            </Grid.Row>


            <Grid.Row centered>
              <Grid.Column centered textAlign='center'>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/about'>
                    <About />
                  </Route>
                  <Route exact path='/services'>
                    <Services />
                  </Route>
                  <Route exact path='/contact'>
                    <Contact />
                  </Route>
                  {/* <Route exact path='/portal'>
                    <Home />
                  </Route> */}
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
      </div>
    )
  }
}