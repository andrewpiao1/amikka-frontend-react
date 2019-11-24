import React, { Component } from 'react'
import { Grid, Header, Button, Icon, Segment, Image } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// var Carousel = require('nuka-carousel');
import Carousel from 'nuka-carousel'

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

const insideStyles = {
  color: 'white',
  textAlign: 'center',
  fontSize: '22px',
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
  transform: "translate(-50%,-50%)"
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

const youtubeOpts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
}


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

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
                        <Image src={Logo} size='massive'/>
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

          {/* LAYER TWO */}
          <Grid.Row>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <Header size='huge'>WHAT</Header>
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
                  <Header as='h4'>
                    FLEXIBLE, ONLINE, PRIVATE COACHING
                  </Header>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12} textAlign='center'>
                    <Header as='h5' color='grey'>
                      Amikka offers a multitude of tutoring options such as interactive whiteboarding, video chat, and instructional videos
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
                    CUSTOMIZED SAT/ACT PROGRAMS
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

            <Grid.Column textAlign='center' width={4}>
              <Grid centered padded stackable>
                <Grid.Row centered>
                  <Icon name='users' size='big' color='blue'></Icon>
                </Grid.Row>
                <Grid.Row centered>
                  <Header as='h4'>
                    HIGHLY QUALIFIED INSTRUCTORS
                  </Header>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12} textAlign='center'>
                    <Header as='h5' color='grey'>
                      Our instructors go through a rigorous interview process with extensive training to provide a 100% tutor satisfaction guarantee
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER FOUR */}
          <Grid.Row>
            <Grid.Column>
              <div style={{ paddingTop: '10%' }}>
                <Parallax bgImage={Study2Img} strength={450} blur={2}>
                  <div style={{ height: 600 }}>
                    <div style={insideStyles2}>
                      <Grid stackable>
                        <Grid.Row centered>
                          <div className='Header' style={{ paddingTop: '5%' }}>
                            <Header size='huge'>WHO</Header>
                          </div>
                        </Grid.Row>

                        <Grid.Row centered>
                          <Grid.Column width={11} textAlign='center' style={{ paddingTop: '4%' }}>
                            <Header as='h3'>
                              Amikka Tutoring is an online platform that provides students with the tools necessary for success on the SAT/ACT exam through private coaching.
                            </Header>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row centered>
                          <Grid.Column width={9} textAlign='center' style={{ paddingTop: '2%' }}>
                            <Header as='h4'>
                              Our SAT/ACT programs focus on the synergies between time management, strategy, and content. Students' scores increase on average ~220 points for the SAT and ~5 points on the ACT
                            </Header>
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

          {/* LAYER SEVEN */}
          <Grid.Row style={{ paddingTop: '3%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Study3Img} strength={450} blue={8}>
                <div style={{ height: 600 }}>
                  <div style={insideStyles3}>
                    <Grid stackable>
                      <Grid.Row centered>
                        <Grid.Column textAlign='center' width={16}>
                          OUR PROCESS
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row centered style={{ paddingTop: '3%' }}>
                        <Grid.Column width={3} textAlign='center' stretched>
                          <Segment raised color='blue'>
                            <Grid centered padded stackable>
                              <Grid.Row >
                                <Header as='h3' color='yellow'>INITIAL EVALUATION</Header>
                              </Grid.Row>
                              <Grid.Row textAlign='center' verticalAlign='middle'>
                                <Header as='h5' color='grey'>DIAGNOSTIC TEST ON TIME MANAGEMENT, CONTENT, AND STRATEGY</Header>
                              </Grid.Row>
                            </Grid>
                          </Segment>
                        </Grid.Column>

                        <Grid.Column width={3} textAlign='center' stretched>
                          <Segment raised color='blue'>
                            <Grid centered padded stackable>
                              <Grid.Row>
                                <Header as='h3' color='yellow'>TUTOR MATCHING</Header>
                              </Grid.Row>
                              <Grid.Row textAlign='center' verticalAlign='middle'>
                                <Header as='h5' color='grey'>PAIRING WITH EXPERT TUTOR BASED ON AVAILABILITY AND LEARNING STYLE</Header>
                              </Grid.Row>
                            </Grid>
                          </Segment>
                        </Grid.Column>

                        <Grid.Column width={3} textAlign='center' stretched>
                          <Segment raised color='blue'>
                            <Grid centered padded stackable>
                              <Grid.Row>
                                <Header as='h3' color='yellow'>PERSONALIZED PROGRAM</Header>
                              </Grid.Row>
                              <Grid.Row textAlign='center' verticalAlign='middle'>
                                <Header as='h5' color='grey'>EACH STUDENT GIVEN PERSONALIZED PROGRAM BASED ON LEARNING STYLE AND GOALS</Header>
                              </Grid.Row>
                            </Grid>
                          </Segment>
                        </Grid.Column>

                        <Grid.Column width={3} textAlign='center' stretched>
                          <Segment raised color='blue'>
                            <Grid centered padded stackable>
                              <Grid.Row>
                                <Header as='h3' color='yellow'>TRACKING</Header>
                              </Grid.Row>
                              <Grid.Row textAlign='center' verticalAlign='middle'>
                                <Header as='h5' color='grey'>MONITOR EXAM PROGRESS TO CREATE PROGRESS TRAJECTORY TO ENSURE POSITIVE RESULTS</Header>
                              </Grid.Row>
                            </Grid>
                          </Segment>
                        </Grid.Column>

                        <Grid.Column width={3} textAlign='center' stretched>
                          <Segment raised color='blue'>
                            <Grid centered padded stackable>
                              <Grid.Row>
                                <Header as='h3' color='yellow'>SUPPORT</Header>
                              </Grid.Row>
                              <Grid.Row textAlign='center' verticalAlign='middle'>
                                <Header as='h5' color='grey'>GUIDANCE THROUGH COLLEGE ADMISSIONS PROCESS AND PROFESSIONAL DEVELOPMENT</Header>
                              </Grid.Row>
                            </Grid>
                          </Segment>
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
              <Header as='h4'>RELATED UNIVERSITIES</Header>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER NINE */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={13}>
              <Grid relaxed stackable>
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

          <Grid.Row style={{ paddingTop: '5%' }}>
            <Button color='blue' inverted size='large' content='BACK TO TOP' />
          </Grid.Row>

        </Grid>
      </div >
    )
  }
}