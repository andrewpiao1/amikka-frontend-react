import React, { Component } from 'react'
import { Grid, Button, Menu, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

import Amikka1 from '../../images/amikka/amikka_student_2.jpeg'
import Tutor1 from '../../images/misc/tutor_4.jpg'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
}

const headerStyles3 = {
  fontFamily: 'raleway',
  fontSize: '20px',
  fontWeight: 'bold'
}

const cardHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '20px',
  color: 'white',
  lineHeight: 1,
}

const cardHeaderStyles2 = {
  paddingTop: '5%',
  fontFamily: 'raleway',
  fontSize: '40px',
  fontWeight: 'bold',
  color: 'rgba(23, 120, 186, 0.8)',
}

const cardDescriptionStyles = {
  paddingTop: '12%',
  color: 'grey',
  fontFamily: 'raleway',
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: 1.8,
}

const insideStyles = {
  background: 'rgba(black, 0.8)',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'raleway',
  fontSize: '35px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'SAT',
      visible: true,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleVisibility = (e, { name }) => this.setState(prevState => ({ visible: !prevState.visible, activeItem: name }))

  onStart = () => this.setState(prevState => ({ visible: true }))

  returnMenuItem = () => {
    const {
      activeItem,
      visible,
    } = this.state

    if (activeItem === 'SAT') {
      return (
        <Transition visible={visible} animation='zoom' duration={500} unmountOnHide={true} onStart={this.onStart}>
          <div>
            <Grid >
              <Grid.Row textAlign='center' columns={3} style={{ paddingTop: '3%' }}>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    One-on-One
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    Group
              </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={3}>
                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      Free
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        30 min intro video
                  </div>
                      <div>
                        No credit card required
                  </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $75
                  </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        1 Diagnostic Assessment
                  </div>
                      <div>
                        Personalized Plan
                  </div>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $50
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        1 Diagnostic Assessment
                  </div>
                      <div>
                        Personalized Plan
                  </div>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={3}>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' >Sign Up</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' as={Link} to='/contact'>Learn More</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' as={Link} to='/contact'>Learn More</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Transition>
      )
    }
    if (activeItem === 'ACT') {
      return (
        <Transition visible={visible} animation='zoom' duration={500} unmountOnHide={true} onStart={this.onStart}>
          <div>
            <Grid >
              <Grid.Row textAlign='center' columns={3} style={{ paddingTop: '3%' }}>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    One-on-One
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles3}>
                    Group
              </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={3}>
                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      Free
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        30 min intro video
                  </div>
                      <div>
                        No credit card required
                  </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $75
                  </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        1 Diagnostic Assessment
                  </div>
                      <div>
                        Personalized Plan
                  </div>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $50
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        1 Diagnostic Assessment
                  </div>
                      <div>
                        Personalized Plan
                  </div>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={3}>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' >Sign Up</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' as={Link} to='/contact'>Learn More</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' as={Link} to='/contact'>Learn More</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Transition>
      )
    }
    if (activeItem === 'QBank') {
      return (
        <Transition visible={visible} animation='zoom' duration={500} unmountOnHide={true} onStart={this.onStart}>
          <div>
            <Grid >
              <Grid.Row textAlign='center' columns={4} style={{ paddingTop: '3%' }}>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles3}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles3}>
                    Math
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles3}>
                    English
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles3}>
                    Grammar
              </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={4}>
                <Grid.Column width={4} textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      Free
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        33 SAT questions
                  </div>
                      <div>
                        7-day access
                  </div>
                      <div>
                        No credit card required
                  </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $19.99
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={4} textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $19.99
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={4} textAlign='center'>
                  <div>
                    <div style={cardHeaderStyles2}>
                      $19.99
                </div>
                    <div style={cardDescriptionStyles}>
                      <div>
                        Unlimited Timed Practice Exams
                  </div>
                      <div>
                        Multiple Review Sections
                  </div>
                      <div>
                        Supplemental Study Guides
                  </div>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign='center' columns={4}>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue' >Sign Up</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue'>Buy</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue'>Buy</Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button circular inverted color='blue'>Buy</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Transition>

      )
    }
  }

  render() {
    const {
      activeItem,
    } = this.state;

    return (
      <div>
        <Grid centered relaxed stackable>

          {/* LAYER ONE */}
          <Grid.Row>
            <Grid.Column>
              <Parallax bgImage={Tutor1} strength={700} blur={3}>
                <div style={{ height: 350, background: 'rgba(0, 0, 0, 0.4)' }}>
                  <div style={insideStyles}>
                    <Grid stackable>
                      <Grid.Row centered>
                        <div style={{ paddingTop: '5%' }}>
                          SAT / ACT
												</div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER TWO */}
          <Grid.Row textAlign='center' style={{ paddingTop: '5%' }}>
            <Grid.Column width={4}>
              <Grid >
                <Grid.Row textAlign='center'>
                  <Grid.Column width={16} textAlign='center'>
                    <Menu widths={3} pointing secondary color='blue' defaultActiveIndex={1}>
                      <Menu.Item
                        name='SAT'
                        active={activeItem === 'SAT'}
                        onClick={this.toggleVisibility}
                      />
                      <Menu.Item
                        name='ACT'
                        active={activeItem === 'ACT'}
                        onClick={this.toggleVisibility}
                      />
                      <Menu.Item
                        name='QBank'
                        active={activeItem === 'QBank'}
                        onClick={this.toggleVisibility}
                      />
                    </Menu>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' >
            <Grid.Column width={12}>
              {this.returnMenuItem()}
            </Grid.Column>
          </Grid.Row>

          {/* LAYER ONE */}
          <Grid.Row stretched style={{ paddingTop: '7%' }}>
            <Grid.Column>
              <Parallax bgImage={Amikka1} strength={500}>
                <div style={{ height: 450, background: 'rgba(0, 0, 0, 0.4)' }}>
                  <div style={insideStyles}>
                    <Grid stackable divided relaxed>
                      <Grid.Row centered>
                        <div style={headerStyles}>
                          DEVELOPMENT COURSES
												</div>
                      </Grid.Row>
                      <Grid.Row centered style={{ paddingTop: '3%' }} columns={6}>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            College Admissions
													</div>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            Resume Building
													</div>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            Job Applications
													</div>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            LinkedIn Optimization
													</div>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            Internship Opportunities
													</div>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                          <div style={cardHeaderStyles}>
                            Professional Development
													</div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER THREE */}
          <Grid.Row centered style={{ paddingBottom: '5%' }}>
            <div style={{ paddingTop: '5%' }}>
              <Button inverted color='blue' size='huge' content='LEARN MORE' as={Link} to='/contact' />
            </div>
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}