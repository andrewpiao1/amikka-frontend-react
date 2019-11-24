import React, { Component } from 'react'
import { Grid, Menu, Image } from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll'
import Logo from '../../images/logo.svg'
import './header.css'

export default class Header extends Component {

  scrollToTop = () => scroll.scrollToTop();

  render() {
    return (
      <Grid className='headerBar' inverted padded>
        <Grid.Row centered>
          <Grid.Column centered>
            <Menu size='massive' secondary>
              {/* <Menu.Item onClick={this.scrollToTop}>
                <Image src={Logo} style={{ height: '250px' }}/>
              </Menu.Item> */}

              <Menu.Menu>
                <Menu.Item name='home' link={true} onClick={this.scrollToTop}>
                  <Link activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    duration={750}
                  ><div style={{ color: 'black' }}>HOME</div></Link>
                </Menu.Item>

                <Menu.Item name='about' link={true}>
                  <Link activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={750}
                    offset={-75}
                  ><div style={{ color: 'black' }}>ABOUT</div></Link>
                </Menu.Item>

                <Menu.Item name='services' link={true}>
                  <Link activeClass='active'
                    to='services'
                    spy={true}
                    smooth={true}
                    duration={750}
                  ><div style={{ color: 'black' }}>SERVICES</div></Link>
                </Menu.Item>

                <Menu.Item name='contact' link={true}>
                  <Link activeClass='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={750}
                  ><div style={{ color: 'black' }}>CONTACT</div></Link>
                </Menu.Item>

                <Menu.Item name='portal' link={true}>
                  <Link activeClass='active'
                    to='portal'
                    spy={true}
                    smooth={true}
                    duration={750}
                    offset={-85}
                  ><div style={{ color: 'black' }}>PORTAL</div></Link>
                </Menu.Item>
              </Menu.Menu>

            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
