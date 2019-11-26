import React, { Component } from 'react'
import { Grid, Header, Button, Icon, Card, Image } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube'

import Footer from '../../components/footer/Footer'

import StudyImg from '../../images/study.jpg'
import Study2Img from '../../images/study2.jpg'
import Study3Img from '../../images/chalkboard.jpg'
import Chicago from '../../images/chicago.jpg'
import Columbia from '../../images/columbia.jpg'
import Cornell from '../../images/cornell.jpg'
import Duke from '../../images/duke.jpeg'
import Harvard from '../../images/harvard.png'
import Michigan from '../../images/michigan.jpg'
import Penn from '../../images/penn.jpg'
import Logo from '../../images/logo2.svg'

import './home.css'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
}

const cardHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '25px',
  color: 'white',
  lineHeight: 1,
}

const descriptionHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '18px',
  fontWeight: 'bold',
}

const descriptionStyles = {
  fontFamily: 'raleway',
  fontSize: '15px',
}

const parallaxStyles = {
  fontFamily: 'raleway',
  fontSize: '20px',
  color: 'white',
  lineHeight: 1.3,
}

const cardStyles = {
  fontFamily: 'raleway',
  fontSize: '13px',
  paddingBottom: '8%',
  paddingLeft: '5%',
  paddingRight: '5%',
}

const insideStyles = {
  color: 'white',
  fontFamily: 'raleway',
  textAlign: 'center',
  fontSize: '22px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const insideStyles2 = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'raleway',
  fontSize: '15px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const insideStyles3 = {
  color: 'white',
  fontFamily: 'raleway',
  fontSize: '28px',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: 'translate(-50%, -50%)'
}

const youtubeOpts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
}


export default class Home extends Component {

  onReady = (event) => event.target.pauseVideo();

  render() {

    return (
      <div>
        <Grid centered relaxed stackable>

          {/* LAYER ONE */}
          <Grid.Row>
            <Grid.Column>
              <Parallax bgImage={StudyImg} strength={450} blur={3}>
                <div style={{ height: 650 }}>
                  <div style={insideStyles}>
                    <Grid stackable>
                      <Grid.Row centered >
                        <Image src={Logo} size='massive' />
                      </Grid.Row>
                      <Grid.Row centered>
                        <div style={{ paddingTop: '5%' }}>
                          <Button color='blue' size='large' content='BOOK AN APPOINTMENT' />
                        </div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER FIVE */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <YouTube videoId='2dYCCfhiiHg' opts={youtubeOpts} onReady={this.onReady} />
          </Grid.Row>

          {/* LAYER SIX */}
          <Grid.Row style={{ paddingTop: '3%' }}>
            <div style={{ width: 1000 }}>
              <Grid padded relaxed stackable>
                <Grid.Row centered>
                  <Header as='h4'>
                    TESTIMONIALS
                  </Header>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12} textAlign='center'>
                    <div>
                      <Header as='h5' color='grey'>"Through Amikka Tutoring I was able to increase my SAT score from 1380 to 1480 and got into Cornell University. Definitely recommend!"</Header>
                      <Header as='h5' color='grey'>- Kyle C</Header>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Row>

          {/* LAYER FOUR */}
          <Grid.Row>
            <Grid.Column>
              <div style={{ paddingTop: '5%' }}>
                <Parallax bgImage={Study2Img} strength={450}>
                  <div style={{ height: 600, background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div style={insideStyles2}>
                      <Grid stackable>
                        <Grid.Row centered>
                          <div style={headerStyles}>
                            WHO
                          </div>
                        </Grid.Row>

                        <Grid.Row centered>
                          <Grid.Column width={13} textAlign='center' style={{ paddingTop: '4%' }}>
                            <div style={parallaxStyles}>
                              Amikka Tutoring is an online platform that provides students with the tools necessary for success on the SAT/ACT exam through private coaching.
                            </div>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row centered>
                          <Grid.Column width={15} textAlign='center' style={{ paddingTop: '2%' }}>
                            <div style={parallaxStyles}>
                              Our SAT/ACT programs focus on the synergies between time management, strategy, and content. Students' scores increase on average ~220 points for the SAT and ~5 points on the ACT
                            </div>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row centered>
                          <div style={{ paddingTop: '5%' }}>
                            <Button color='blue' size='large' content='LEARN MORE' />
                          </div>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </div>
                </Parallax>
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER TWO */}
          <Grid.Row>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={headerStyles}>
                WHAT
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER THREE */}
          <Grid.Row style={{ paddingTop: '5%' }} columns={3} divided>
            <Grid.Column textAlign='center' width={4}>
              <Grid padded relaxed stackable>
                <Grid.Row centered>
                  <Icon name='book' size='big' color='blue'></Icon>
                </Grid.Row>
                <Grid.Row centered>
                  <div style={descriptionHeaderStyles}>
                    FLEXIBLE, ONLINE, PRIVATE COACHING
                  </div>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={13} textAlign='center'>
                    <div style={descriptionStyles}>
                      Amikka offers a multitude of tutoring options such as interactive whiteboarding, video chat, and instructional videos
                    </div>
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
                  <div style={descriptionHeaderStyles}>
                    CUSTOMIZED SAT/ACT PROGRAMS
                  </div>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={13} textAlign='center'>
                    <div style={descriptionStyles}>
                      Weekly adjustments are made to ensure goals are met on time with personalized study guides based on error patterns
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column textAlign='center' width={4}>
              <Grid centered padded stackable>
                <Grid.Row centered>
                  <Icon name='users' size='big' color='blue'></Icon>
                </Grid.Row>
                <Grid.Row centered>
                  <div style={descriptionHeaderStyles}>
                    HIGHLY QUALIFIED INSTRUCTORS
                  </div>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={13} textAlign='center'>
                    <div style={descriptionStyles}>
                      Our instructors go through a rigorous interview process with extensive training to provide a 100% tutor satisfaction guarantee
                    </div>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER SEVEN */}
          <Grid.Row style={{ paddingTop: '10%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Study3Img} strength={450} blue={8}>
                <div style={{ height: 600, background: 'rgba(0, 0, 0, 0.5)' }}>
                  <div style={insideStyles3}>
                    <Grid stackable>

                      <Grid.Row centered>
                        <Grid.Column textAlign='center' width={16}>
                          OUR PROCESS
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered style={{ paddingTop: '2%' }}>
                        <Grid.Column textAlign='center' width={3}>
                          <Grid padded relaxed stackable>
                            <Grid.Row centered>
                              <Card link style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
                                <Card.Content>
                                  <div style={cardHeaderStyles}>
                                    EDUCATION
                                  </div>
                                </Card.Content>
                                <Card.Description style={cardStyles}>
                                  DIAGNOSTIC TEST ON TIME MANAGEMENT, CONTENT, AND STRATEGY
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
                                  <div style={cardHeaderStyles}>
                                    TUTOR MATCHING
                                  </div>
                                </Card.Content>
                                <Card.Description style={cardStyles}>
                                  PAIRING WITH EXPERT TUTOR BASED ON AVAILABILITY AND LEARNING STYLE
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
                                  <div style={cardHeaderStyles}>
                                    PERSONALIZED PROGRAM
                                  </div>
                                </Card.Content>
                                <Card.Description style={cardStyles}>
                                  EACH STUDENT GIVEN PERSONALIZED PROGRAM BASED ON LEARNING STYLE AND GOALS
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
                                  <div style={cardHeaderStyles}>
                                    TRACKING
                                  </div>
                                </Card.Content>
                                <Card.Description style={cardStyles}>
                                  MONITOR EXAM PROGRESS TO CREATE PROGRESS TRAJECTORY TO ENSURE POSITIVE RESULTS
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
                                  <div style={cardHeaderStyles}>
                                    SUPPORT
                                  </div>
                                </Card.Content>
                                <Card.Description style={cardStyles}>
                                  GUIDANCE THROUGH COLLEGE ADMISSIONS PROCESS AND PROFESSIONAL DEVELOPMENT
                                </Card.Description>
                              </Card>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered>
                        <div style={{ paddingTop: '4%' }}>
                          <Button color='blue' size='large' content='BOOK AN APPOINTMENT' />
                        </div>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER EIGHT */}
          <Grid.Row centered textAlign='center' style={{ paddingTop: '2%' }}>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={headerStyles}>
                RELATED UNIVERSITIES
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER NINE */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={13}>
              <Grid relaxed>
                <Grid.Row centered columns={4}>
                  <Grid.Column width={2}>
                    <Image src={Chicago} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Columbia} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Cornell} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Duke} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Harvard} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Michigan} size='big' />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Image src={Penn} size='big' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row >

          {/* LAYER TEN */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Button color='blue' inverted size='large' content='BACK TO TOP' />
          </Grid.Row>

        </Grid>
      </div >
    )
  }
}