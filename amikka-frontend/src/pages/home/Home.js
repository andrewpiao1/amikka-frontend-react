import React, { Component } from 'react'
import { Grid, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-parallax'
import YouTube from 'react-youtube'
// Image imports
import Study3Img from '../../images/misc/chalkboard.jpg'
import Chicago from '../../images/colleges/chicago.jpg'
import Columbia from '../../images/colleges/columbia.jpg'
import Cornell from '../../images/colleges/cornell.jpg'
import Duke from '../../images/colleges/duke.jpeg'
import Harvard from '../../images/colleges/harvard.png'
import Michigan from '../../images/colleges/michigan.jpg'
import Penn from '../../images/colleges/penn.jpg'
import Diagram from '../../images/amikka/triangle.png'
// Amikka image imports
import Amikka from '../../images/amikka/amikka_tutor_1.png'
// Icon imports
import Checklist from '../../images/icons/check-list.svg'
import Tutor from '../../images/icons/tutor.svg'
import Report from '../../images/icons/report.svg'
import Diagram2 from '../../images/icons/diagram.svg'
import Service from '../../images/icons/customer-service.svg'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '38px',
  fontWeight: 'bold',
}

const headerStyles2 = {
  fontFamily: 'raleway',
  fontSize: '30px',
  color: 'white',
  paddingBottom: '3%',
  fontWeight: 'bold',
}

const descriptionHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '18px',
  fontWeight: 'bold',
}

const descriptionStyles = {
  fontFamily: 'raleway',
  fontSize: '15px',
  lineHeight: 1.8,
}

const descriptionStyles2 = {
  color: 'white',
  fontFamily: 'raleway',
  fontSize: '22px',
  lineHeight: 1.8,
}

const descriptionStyles3 = {
  fontFamily: 'raleway',
  fontSize: '18px',
  paddingTop: '3%',
  lineHeight: 1.8,
}

const descriptionStyles4 = {
  fontFamily: 'raleway',
  fontSize: '16px',
  paddingTop: '3%',
  lineHeight: 1.8,
  color: 'white',
  fontWeight: 'bold',
}

const insideStyles = {
  color: 'white',
  fontFamily: 'raleway',
  textAlign: 'center',
  fontSize: '28px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  lineHeight: 1.3,
}

const insideStyles3 = {
  color: 'white',
  fontFamily: 'raleway',
  fontSize: '28px',
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: "50%",
  transform: 'translate(-50%, -50%)',
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

  scrollToTop = () => scroll.scrollToTop();

  render() {
    return (
      <div>
        <Grid centered relaxed stackable>

          {/* LAYER 1 */}
          <Grid.Row>
            <Grid.Column width={16}>
              <Parallax bgImage={Amikka} strength={300}>
                <div style={{ height: 550 }}>
                  <div style={insideStyles}>
                    <Grid stackable>
                      <Grid.Row>
                        <Grid.Column>
                          <YouTube videoId='2dYCCfhiiHg' opts={youtubeOpts} onReady={this.onReady} />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Parallax>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 2 */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column textAlign='center'>
              <div style={headerStyles}>
                Join us and become 1 of 500+ success stories
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 3 */}
          <Grid.Row centered style={{ paddingTop: '5%', paddingBottom: '5%' }} >
            <Button color='blue' size='huge' content='BOOK AN APPOINTMENT' as={Link} to='/contact' />
          </Grid.Row>

          {/* LAYER 4 */}
          <Grid.Row centered style={{ paddingTop: '5%', paddingBottom: '5%', background: 'rgba(23, 120, 186, 0.6)' }}>
            <Grid.Column width={11} textAlign='center'>
              <div style={headerStyles2}>
                WHO
              </div>
              <div style={descriptionStyles2}>
                Amikka Tutoring is an online platform that provides students with the tools necessary for success on the SAT/ACT exam through private coaching.
							</div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 5 */}
          <Grid.Row centered columns={2} style={{ paddingTop: '3%' }} verticalAlign='middle' >
            <Grid.Column width={6} textAlign='center'>
              <div style={descriptionStyles3}>
                Our SAT/ACT programs focus on the synergies between time management, strategy, and content. Students' scores increase on average ~220 points for the SAT and ~5 points on the ACT
              </div>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
              <Image src={Diagram} />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 6 */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Study3Img} strength={450} blue={8}>
                <div style={{ height: 600, background: 'rgba(0, 0, 0, 0.5)' }}>
                  <div style={insideStyles3}>
                    <Grid stackable>

                      <Grid.Row >
                        <Grid.Column textAlign='center'>
                          <div style={headerStyles}>
                            WHAT
                          </div>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row style={{ paddingTop: '3%' }} columns={3} divided>
                        <Grid.Column textAlign='center'>
                          <Grid padded relaxed stackable>
                            <Grid.Row centered>
                              <Icon name='book' size='small' color='blue'></Icon>
                            </Grid.Row>
                            <Grid.Row centered>
                              <div style={descriptionHeaderStyles}>
                                FLEXIBLE, ONLINE, PRIVATE COACHING
                              </div>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Grid.Column width={10} textAlign='center'>
                                <div style={descriptionStyles}>
                                  Amikka offers a multitude of tutoring options such as interactive whiteboarding, video chat, and instructional videos
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
                              <div style={descriptionHeaderStyles}>
                                CUSTOMIZED SAT/ACT PROGRAMS
                              </div>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Grid.Column width={10} textAlign='center'>
                                <div style={descriptionStyles}>
                                  Weekly adjustments are made to ensure goals are met on time with personalized study guides based on error patterns
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>

                        <Grid.Column textAlign='center' >
                          <Grid centered padded stackable>
                            <Grid.Row centered>
                              <Icon name='users' size='small' color='blue'></Icon>
                            </Grid.Row>
                            <Grid.Row centered>
                              <div style={descriptionHeaderStyles}>
                                HIGHLY QUALIFIED INSTRUCTORS
                              </div>
                            </Grid.Row>
                            <Grid.Row centered>
                              <Grid.Column width={10} textAlign='center'>
                                <div style={descriptionStyles}>
                                  Our instructors go through a rigorous interview process with extensive training to provide a 100% tutor satisfaction guarantee
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

          {/* LAYER 7 : OUR PROCESS */}
          <Grid.Row style={{ paddingTop: '7%' }}>
            <Grid.Column textAlign='center' width={16}>
              <div style={headerStyles}>
                OUR PROCESS
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 8 : INITIAL EVALUATION */}
          <Grid.Row centered style={{ paddingTop: '5%' }} verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.2)' }}>
              <div style={headerStyles2}>
                INITIAL EVALUATION
              </div>
              <div style={descriptionStyles4}>
                Diagnostic test on Time Management, Content, and Strategy
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={Checklist} centered size='tiny' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 9 : TUTOR MATCHING */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Tutor} centered size='tiny' />
            </Grid.Column>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.4)' }}>
              <div style={headerStyles2}>
                TUTOR MATCHING
              </div>
              <div style={descriptionStyles4}>
                Pairing with expert tutor based on students' availability and learning style
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 10 : PERSONALIZED PROGRAM */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.6)' }}>
              <div style={headerStyles2}>
                PERSONALIZED PROGRAM
              </div>
              <div style={descriptionStyles4}>
                Each student is given a personalized program based on learning style and goals
              </div>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Report} centered size='tiny' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 11 : TRACKING */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Diagram2} centered size='tiny' />
            </Grid.Column>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186, 0.8)' }}>
              <div style={headerStyles2}>
                TRACKING
              </div>
              <div style={descriptionStyles4}>
                Monitor exam progresss to create progress trajectory to ensure positive results
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 12 */}
          <Grid.Row centered verticalAlign='middle'>
            <Grid.Column width={7} textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%', background: 'rgba(23, 120, 186)' }}>
              <div style={headerStyles2}>
                SUPPORT
              </div>
              <div style={descriptionStyles4}>
                Guidance through college admissions process and professional development
              </div>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Image src={Service} centered size='tiny' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 13 */}
          <Grid.Row centered>
            <div style={{ paddingTop: '4%' }}>
              <Button inverted color='blue' size='huge' content='BOOK AN APPOINTMENT' as={Link} to='/contact' />
            </div>
          </Grid.Row>

          {/* LAYER 14 */}
          <Grid.Row centered textAlign='center' style={{ paddingTop: '2%' }}>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={headerStyles}>
                TESTIMONIALS
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 15 */}
          <Grid.Row centered textAlign='center' style={{ paddingTop: '2%' }}>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>

            </Grid.Column>
          </Grid.Row>

          {/* LAYER 16 */}
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

          {/* LAYER 17 */}
          <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%' }}>
            <Button color='blue' inverted size='huge' content='BACK TO TOP' onClick={this.scrollToTop} />
          </Grid.Row>

        </Grid>
      </div >
    )
  }
}