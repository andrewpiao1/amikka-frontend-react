import React, { Component } from 'react'
import { Grid, Image, Button, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
// Image imports
import Company1 from '../../images/misc/company_1.jpg'
import Company2 from '../../images/misc/company_2.jpg'
import Company3 from '../../images/misc/company_3.jpg'
// Amikka image imports
import Method1 from '../../images/amikka/amikka_method_1.png'
import Method2 from '../../images/amikka/amikka_method_2.png'
import Method3 from '../../images/amikka/amikka_method_3.png'
import Method4 from '../../images/amikka/amikka_method_4.png'
import Method5 from '../../images/amikka/amikka_method_5.png'

import './about.css'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
}

const headerStyles2 = {
  fontFamily: 'raleway',
  fontSize: '30px',
  color: 'white',
  paddingBottom: '3%',
  fontWeight: 'bold',
}

const cardHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '25px',
  color: 'white',
  paddingTop: '3%',
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
}

const descriptionStyles2 = {
  fontFamily: 'raleway',
  fontSize: '16px',
  paddingTop: '3%',
  lineHeight: 1.8,
  color: 'white',
  fontWeight: 'bold',
}

const cardStyles = {
  fontFamily: 'raleway',
  fontSize: '13px',
  paddingTop: '3%',
  paddingBottom: '8%',
  paddingLeft: '5%',
  paddingRight: '5%',
  color: 'white',
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

const insideStyles2 = {
  textAlign: 'center',
  fontFamily: 'raleway',
  fontSize: '15px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
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

          {/* LAYER 1 */}
          <Grid.Row>
            <Grid.Column>
              <Parallax bgImage={Company1} strength={450} blur={3}>
                <div style={{ height: 350, background: 'rgba(0, 0, 0, 0.3)' }}>
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

          {/* LAYER 2 */}
          <Grid.Row textAlign='center'>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={headerStyles}>
                THE COMPANY
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 3 */}
          <Grid.Row centered>
            <Grid.Column width={11} textAlign='center' style={{ paddingTop: '1%' }}>
              <div style={descriptionStyles}>
                Amikka Tutoring is run by a small group of young professionals from Upenn and Cornell that are passionate about education. With the help of our program, we have been able to help guide hundreds of students to achieve their academic goals. Most of our tutors have attended-or currently attend-ivy league schools and have 30+ years of cumulative experience. Our instructors choose to work with us over other places because they believe in the effectiveness of our problem solving approach.
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Company2} strength={450} blue={2}>
                <div style={{ height: 500, background: 'rgba(0, 0, 0, 0.3)' }}>
                  <div style={insideStyles3}>
                    <Grid stackable>
                      <Grid.Row>
                        <Grid.Column textAlign='center'>
                          <div style={headerStyles}>
                            THE FOUNDER
                          </div>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered>
                        <Grid.Column width={11} textAlign='center'>
                          <div style={descriptionStyles}>
                            The founder of Amikka, Christopher Hernandez, began tutoring math close to 10 years ago. When his time to take the SAT came around, his initial scores left him unhappy. They weren’t high enough to get him into the University of Pennsylvania which was his dream school. He also couldn’t afford tutors that were 150+ per hour so he decided to teach himself. Through the process of prepping for the exam he not only learned a lot about how to break down the exam, but also about himself. He loved education. He was able to improve close to 300 points and got into the University of Pennsylvania. His mission became to build a test prep program that could yield higher results in less time to help more students like himself. Fast forward a couple years, and now the Amikka Test Prep program has become a proven formula for test prep and problem solving success.
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 5 : THE AMIKKA METHOD */}
          <Grid.Row style={{ paddingTop: '7%' }}>
            <Grid.Column textAlign='center' width={16}>
              <div style={headerStyles}>
                THE AMIKKA METHOD
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : EDUCATION */}
          <Grid.Row centered style={{ paddingTop: '5%' }} verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.3)' }}>
              <div style={headerStyles2}>
                EDUCATION
              </div>
              <div style={descriptionStyles2}>
                The Amikka Program focuses on progress through the lens of time management, content, and strategy to maximize the rate of improvement for students on the SAT/ACT exam.
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={Method1} centered size='small' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : TIME MANAGEMENT */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Method2} centered size='small' />
            </Grid.Column>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.4)' }}>
              <div style={headerStyles2}>
                TIME MANAGEMENT
              </div>
              <div style={descriptionStyles2}>
                We slowly increase time constraints to force our students to work outside of their comfort zone to become quicker at problem solving.
              </div>
              <div style={descriptionStyles2}>
                We give our students a strong problem solving foundation and teach them multiple ways to approach the same question to the get the correct answer.
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : STRATEGY */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.6)' }}>
              <div style={headerStyles2}>
                STRATEGY
              </div>
              <div style={descriptionStyles2}>
                We help our students build a mid-course and post-course study guide with mistake patterns, important formulas, and main topics.
              </div>
              <div style={descriptionStyles2}>
                We assess our students thought process and show them multiple strategies that would work for them.
              </div>
              <div style={descriptionStyles2}>
                We teach our students to build context for every problem before attempting to find a solution to minimize mistakes.
              </div>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Method3} centered size='small' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : CONTENT */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Method4} centered size='small' />
            </Grid.Column>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.8)' }}>
              <div style={headerStyles2}>
                CONTENT
              </div>
              <div style={descriptionStyles2}>
                We break topics apart into smaller sections to make it more digestible for all of our students.
              </div>
              <div style={descriptionStyles2}>
                We help our students find an efficient way to study to make their process more fun and efficient.
              </div>
              <div style={descriptionStyles2}>
                We encourage our students to have flashcards with main topics and mistake patterns for maximum improvement.
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : THEORY */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186)' }}>
              <div style={headerStyles2}>
                THEORY
              </div>
              <div style={descriptionStyles2}>
                The area of the triangle is the students potential
              </div>
              <div style={descriptionStyles2}>
                There are synergies between each of the side lengths
              </div>
              <div style={descriptionStyles2}>
                Working on all three sides leads to greatest expansion
              </div>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Method5} centered size='small' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 4 : BUTTON - LEARN MORE */}
          <Grid.Row centered>
            <div style={{ paddingTop: '5%' }}>
              <Button inverted color='blue' size='huge' content='LEARN MORE' as={Link} to='/contact' />
            </div>
          </Grid.Row>

          {/* LAYER SIX */}
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

                      <Grid.Row columns={3} divided columns={2} style={{ paddingTop: '5%' }}>
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