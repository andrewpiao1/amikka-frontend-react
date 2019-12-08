import React, { Component } from 'react'
import { Menu, Grid, Image, Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/Routes';
import Logo from '../../images/amikka/logo4.svg'

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
    return (
      <div className='Header'>
        <Grid centered={true}>
          <Grid.Row textAlign='center' >
            <Grid.Column width={4}>
              <Image src={Logo} />
            </Grid.Column>
          </Grid.Row>


          <Grid.Row style={{ height: '70px' }} columns={6}>
            <Menu text>
              <Grid.Column width={16} textAlign='center'>

                <Grid centered={true} relaxed>
                  <Grid.Row columns={6} centered={true}>

                    <Grid.Column textAlign='center'>
                      <Menu.Item as={Link} to={ROUTES.HOME} >
                        <div style={menuStyles}>
                          HOME
                          </div>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column textAlign='center' >
                      <Menu.Item as={Link} to={ROUTES.ABOUT}>
                        <div style={menuStyles}>
                          ABOUT
                          </div>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column textAlign='center' >
                      <Menu.Item as={Link} to={ROUTES.METHOD}>
                        <div style={menuStyles}>
                          METHOD
                          </div>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column textAlign='center'>
                      <Menu.Item as={Link} to={ROUTES.SERVICES}>
                        <div style={menuStyles}>
                          SERVICES
                          </div>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column textAlign='center' >
                      <Menu.Item as={Link} to={ROUTES.CONTACT}>
                        <div style={menuStyles}>
                          CONTACT
                          </div>
                      </Menu.Item>
                    </Grid.Column>

                    <Grid.Column textAlign='center'>
                      {/* <Dropdown simple item text='PORTAL' icon={null} style={menuStyles}>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to={ROUTES.SIGN_IN}>Sign In</Dropdown.Item>
                          <Dropdown.Item as={Link} to={ROUTES.SIGN_UP}>Register</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> */}
                      <Menu.Item as={Link} to={ROUTES.PORTAL}>
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
        </Grid>
      </div>
    )
  }
}