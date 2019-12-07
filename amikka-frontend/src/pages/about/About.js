import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
// Image imports
import Company1 from '../../images/misc/company_1.jpg'
import Company2 from '../../images/misc/company_2.jpg'
import Company3 from '../../images/misc/company_3.jpg'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
}

const desccriptionHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '20px',
  fontWeight: 'bold',
}

const descriptionStyles = {
  fontFamily: 'raleway',
  fontSize: '15px',
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

const insideStyles3 = {
  fontFamily: 'raleway',
  color: 'white',
  fontSize: '28px',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: 'translate(-50%, -50%)',
  lineHeight: 1.7,
}

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid centered relaxed stackable>

          {/* LAYER 1 : OUR STORY */}
          <Grid.Row>
            <Grid.Column>
              <Parallax bgImage={Company1} strength={450} blur={3}>
                <div style={{ height: 350, background: 'rgba(0, 0, 0, 0.3)' }}>
                  <div style={insideStyles}>
                    <Grid stackable>
                      <Grid.Row centered>
                        <div style={{ paddingTop: '5%' }}>
                          THE COMPANY
												</div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 3 : THE COMPANY - Description */}
          <Grid.Row centered>
            <Grid.Column width={9} textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={descriptionStyles}>
                Amikka Tutoring is run by a small group of young professionals from Upenn and Cornell that are passionate about education. With the help of our program, we have been able to help guide hundreds of students to achieve their academic goals. Most of our tutors have attended-or currently attend-ivy league schools and have 30+ years of cumulative experience. Our instructors choose to work with us over other places because they believe in the effectiveness of our problem solving approach.
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : THE FOUNDER */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Company2} strength={450} blue={2}>
                <div style={{ height: 350, background: 'rgba(0, 0, 0, 0.3)' }}>
                  <div style={insideStyles3}>
                    <Grid stackable>
                      <Grid.Row>
                        <Grid.Column textAlign='center'>
                          <div style={headerStyles}>
                            THE FOUNDER
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 3 : THE COMPANY - Description */}
          <Grid.Row centered>
            <Grid.Column width={9} textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={descriptionStyles}>
                The founder of Amikka, Christopher Hernandez, began tutoring math close to 10 years ago. When his time to take the SAT came around, his initial scores left him unhappy. They weren’t high enough to get him into the University of Pennsylvania which was his dream school. He also couldn’t afford tutors that were 150+ per hour so he decided to teach himself. Through the process of prepping for the exam he not only learned a lot about how to break down the exam, but also about himself. He loved education. He was able to improve close to 300 points and got into the University of Pennsylvania. His mission became to build a test prep program that could yield higher results in less time to help more students like himself. Fast forward a couple years, and now the Amikka Test Prep program has become a proven formula for test prep and problem solving success.
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 11 : BUTTON - LEARN MORE */}
          <Grid.Row centered>
            <div style={{ paddingTop: '3%' }}>
              <Button inverted color='blue' size='huge' content='LEARN MORE' as={Link} to='/contact' />
            </div>
          </Grid.Row>

          {/* LAYER 12 : THE ENVIRONMENT */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column>
              <Parallax bgImage={Company3} strength={450} blur={3}>
                <div style={{ height: 600, background: 'rgba(0, 0, 0, 0.6)' }}>
                  <div style={insideStyles}>
                    <Grid stackable>

                      <Grid.Row>
                        <Grid.Column textAlign='center'>
                          <div style={headerStyles}>
                            THE ENVIRONMENT
                          </div>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row divided columns={2} style={{ paddingTop: '5%' }}>
                        <Grid.Column textAlign='center'>
                          <Grid padded relaxed stackable>
                            <Grid.Row centered>
                              <Icon name='book' size='small' color='blue'></Icon>
                            </Grid.Row>
                            <Grid.Row centered>
                              <div style={desccriptionHeaderStyles}>
                                ONE-ON-ONE
                              </div>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Grid.Column width={14} textAlign='center'>
                                <div style={descriptionStyles}>
                                  When you sign up for Amikka Academy, we guarantee that you will get the highest quality help and a personalized experience that doesn't stop until your goals are met. Thanks to our E-learning platform, you can connect with your tutor from wherever. In the past we worked with students in person but pivoted to only working online when we noticed how much more convenient and effective our online approach was.
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Icon name='tasks' size='small' color='blue'></Icon>
                            </Grid.Row>
                            <Grid.Row centered>
                              <div style={desccriptionHeaderStyles}>
                                ONLINE COURSES
                              </div>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Grid.Column width={11} textAlign='center'>
                                <div style={descriptionStyles}>
                                  Coming Soon!
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 13 : BUTTON - LEARN MORE */}
          <Grid.Row centered>
            <div style={{ paddingTop: '7%', paddingBottom: '5%' }}>
              <Button color='blue' size='huge' content='LEARN MORE' as={Link} to='/contact' />
            </div>
          </Grid.Row>

        </Grid>
      </div >
    )
  }
}