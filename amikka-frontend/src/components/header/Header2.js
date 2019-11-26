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
import Logo from '../../images/logo3.svg'

export default class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'HOME',
    }
  }

  handleItemClick = (e, { name }) => {
    const { activeItem } = this.state;
    activeItem === name ? this.scrollToTop() : this.setState({ activeItem: name })
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
            <Grid.Row style={{ height: '55px' }}>
              <Grid.Column width={16}>

                <Menu text widths={1}>
                  <Grid centered padded='horizontally' stackable>
                    <Grid.Row columns={5} centered>
                      <Grid.Column width={3}>
                        <Menu.Item
                          as={Link}
                          to='/'
                          name='HOME'
                          link={true}
                        // active={activeItem === 'HOME'}
                        // onClick={this.handleItemClick}
                        >
                        </Menu.Item>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Menu.Item
                          as={Link}
                          to='/about'
                          name='ABOUT'
                        // active={activeItem === 'ABOUT'}
                        // onClick={this.handleItemClick}
                        />
                      </Grid.Column>

                      <Grid.Column width={3}>
                        <Menu.Item
                          as={Link}
                          to='/services'
                          name='SERVICES'
                        // active={activeItem === 'SERVICES'}
                        // onClick={this.handleItemClick}
                        />
                      </Grid.Column>

                      <Grid.Column width={3}>
                        <Menu.Item
                          as={Link}
                          to='/contact'
                          name='CONTACT'
                        // active={activeItem === 'CONTACT'}
                        // onClick={this.handleItemClick}
                        />
                      </Grid.Column>

                      <Grid.Column width={3}>
                        <Menu.Item
                          as={Link}
                          to='portal'
                          name='PORTAL'
                        // active={activeItem === 'PORTAL'}
                        // onClick={this.handleItemClick}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Menu>

              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column centered textAlign='center'>
                {/* <div style={{ paddingBottom: '20%' }}>
              <RenderedMenuItem menuItemName={activeItem} />
            </div> */}
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/about'>
                    <About />
                  </Route>
                  {/* <Route exact path='/services'>
                <Home />
              </Route>
              <Route exact path='/contact'>
                <Home />
              </Route>
              <Route exact path='/portal'>
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

const RenderedMenuItem = ({ menuItemName }) => {
  if (menuItemName === 'HOME') {
    return <Home />
  }
  if (menuItemName === 'ABOUT') {
    return <About />
  }
  if (menuItemName === 'SERVICES') {
    return <div><h1>SERVICES</h1></div>
  }
  if (menuItemName === 'CONTACT') {
    return <div><h1>CONTACT</h1></div>
  }
  if (menuItemName === 'PORTAL') {
    return <div><h1>PORTAL</h1></div>
  }
}