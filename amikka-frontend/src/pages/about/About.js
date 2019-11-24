import React, { Component } from 'react'
import { Grid, Header, Button, Icon, Segment, Image, Card, Reveal } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'

import Company1 from '../../images/company_1.jpg'
import Company2 from '../../images/company_2.jpg'
import Company3 from '../../images/company_3.jpg'

import './about.css'

const insideStyles = {
  background: 'rgba(black, 0.8)',
  color: 'white',
  textAlign: 'center',
  fontSize: '35px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const insideStyles2 = {
  textAlign: 'center',
  fontSize: '15px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

const insideStyles3 = {
  color: 'white',
  fontSize: '28px',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: 'translate(-50%, -50%)'
}

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid centered relaxed stackable>

          {/* LAYER ONE */}
          <Grid.Row>
            <Grid.Column>
              <Parallax bgImage={Company1} strength={450} blur={3}>
                <div style={{ height: 350, background: 'rgba(black, 0.8)' }}>
                  <div style={insideStyles}>
                    <Grid stackable>
                      <Grid.Row centered>
                        <div style={{ paddingTop: '5%' }}>
                          OUR STORY
												</div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER TWO */}
          <Grid.Row textAlign='center'>
            <Grid.Column textAlign='center' style={{ paddingTop: '10%' }}>
              <Header size='huge'>THE COMPANY</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER TWO */}
          <Grid.Row centered>
            <Grid.Column width={11} textAlign='center' style={{ paddingTop: '1%' }}>
              <Header as='h4' color='grey'>
                Amikka Tutoring is run by a small group of young professionals from Upenn and Cornell that are passionate about education. With the help of our program, we have been able to help guide hundreds of students to achieve their academic goals. Most of our tutors have attended-or currently attend-ivy league schools and have 30+ years of cumulative experience. Our instructors choose to work with us over other places because they believe in the effectiveness of our problem solving approach.
              				</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER THREE */}
          <Grid.Row style={{ paddingTop: '10%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Company2} strength={450} blue={2}>
                <div style={{ height: 750 }}>
                  <div style={insideStyles3}>
                    <Grid stackable>

                      <Grid.Row centered centered>
                        <Grid.Column textAlign='center' width={3} style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                          <Header as='h2' style={{ color: 'white' }}>
                            THE AMIKKA METHOD
                          </Header>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered style={{ paddingTop: '2%' }}>
                        <Grid.Column textAlign='center' width={3}>
                          <Grid padded relaxed stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <Card.Header textAlign='center'>
                                    <Header as='h3' style={{ color: 'gold' }}>
                                      EDUCATION
                                    </Header>
                                  </Card.Header>
                                </Card.Content>

                                <Card.Description style={{ paddingBottom: '2%' }}>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    The Amikka Program focuses on progress through the lens of time management, content, and strategy to maximize the rate of improvement for students on the SAT/ACT exam.
                                  </Header>
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center' width={3}>
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <Card.Header textAlign='center'>
                                    <Header as='h3' style={{ color: 'gold' }}>
                                      TIME MANAGEMENT
                                    </Header>
                                  </Card.Header>
                                </Card.Content>

                                <Card.Description style={{ paddingBottom: '2%' }}>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We slowly increase time constraints to force our students to work outside of their comfort zone to become quicker at problem solving.
                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We give our students a strong problem solving foundation and teach them multiple ways to approach the same question to the get the correct answer.
                                  </Header>
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center' width={3}>
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <Card.Header textAlign='center'>
                                    <Header as='h3' style={{ color: 'gold' }}>
                                      STRATEGY
                                    </Header>
                                  </Card.Header>
                                </Card.Content>

                                <Card.Description style={{ paddingBottom: '2%' }}>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We help our students build a mid-course and post-course study guide with mistake patterns, important formulas, and main topics.                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We assess our students thought process and show them multiple strategies that would work for them.                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We teach our students to build context for every problem before attempting to find a solution to minimize mistakes.                                  </Header>
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center' width={3}>
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <Card.Header textAlign='center'>
                                    <Header as='h3' style={{ color: 'gold' }}>
                                      CONTENT
                                    </Header>
                                  </Card.Header>
                                </Card.Content>

                                <Card.Description style={{ paddingBottom: '2%' }}>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We break topics apart into smaller sections to make it more digestible for all of our students.
                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We help our students find an efficient way to study to make their process more fun and efficient.
                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    We encourage our students to have flashcards with main topics and mistake patterns for maximum improvement.
                                  </Header>
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center' width={3}>
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <Card.Header textAlign='center'>
                                    <Header as='h3' style={{ color: 'gold' }}>
                                      THEORY
                                    </Header>
                                  </Card.Header>
                                </Card.Content>

                                <Card.Description style={{ paddingBottom: '2%' }}>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    The area of the triangle is the students potential
                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    There are synergies between each of the side lengths
                                  </Header>
                                  <Header as='h5' style={{ color: 'white', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                                    Working on all three sides leads to greatest expansion
                                  </Header>
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered>
                        <div style={{ paddingTop: '2%' }}>
                          <Button basic inverted color='blue' size='large' content='BOOK AN APPOINTMENT' />
                        </div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>



          {/* LAYER FIVE */}
          <Grid.Row>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <Header size='huge'>THE FOUNDER</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER TWO */}
          <Grid.Row centered>
            <Grid.Column width={11} textAlign='center' style={{ paddingTop: '1%' }}>
              <Header as='h3'>
                Christopher Hernandez- the Amikka founder- began tutoring math close to 10 years ago. When his time to take the SAT came around, his initial scores left him unhappy. They weren’t high enough to get him into the University of Pennsylvania which was his dream school. He also couldn’t afford tutors that were 150+ per hour so he decided to teach himself. Through the process of prepping for the exam he not only learned a lot about how to break down the exam, but also about himself. He loved education. He was able to improve close to 300 points and got into the University of Pennsylvania. His mission became to build a test prep program that could yield higher results in less time to help more students like himself. Fast forward a couple years, and now the Amikka Test Prep program has become a proven formula for test prep and problem solving success.
							</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER SIX */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column>
              <Parallax bgImage={Company3} strength={450} blur={3}>
                <div style={{ height: 350 }}>
                  <div style={insideStyles2}>
                    <Grid stackable>
                      <Grid.Row centered>
                        <div className='Header' style={{ paddingTop: '5%' }}>
                          <Header as='h1'>THE TEAM</Header>
                        </div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER SEVEN */}
          <Grid.Row>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <Header size='huge'>THE ENVIRONMENT</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER EIGHT */}
          <Grid.Row style={{ paddingTop: '5%' }} columns={3} divided>
            <Grid.Column textAlign='center' width={4}>
              <Grid padded relaxed stackable>
                <Grid.Row centered>
                  <Icon name='book' size='big' color='blue'></Icon>
                </Grid.Row>
                <Grid.Row centered>
                  <Header as='h4'>
                    oNE-ON-ONE
                  </Header>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12} textAlign='center'>
                    <Header as='h5' color='grey'>
                      When you sign up for Amikka Academy, we guarantee that you will get the highest quality help and a personalized experience that doesn't stop until your goals are met. Thanks to our E-learning platform, you can connect with your tutor from wherever. In the past we worked with students in person but pivoted to only working online when we noticed how much more convenient and effective our online approach was.
										</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column textAlign='center' width={4}>
              <Grid centered padded stackable>
                <Grid.Row centered>
                  <Icon name='tasks' size='big' color='blue'></Icon>
                </Grid.Row>
                <Grid.Row centered>
                  <Header as='h4'>
                    ONLINE COURSES
                  </Header>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12} textAlign='center'>
                    <Header as='h5' color='grey'>
                      Weekly adjustments are made to ensure goals are met on time with personalized study guides based on error patterns
                  </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}