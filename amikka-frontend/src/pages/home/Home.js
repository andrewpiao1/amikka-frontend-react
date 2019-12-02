import React, { Component } from 'react'
import { Grid, Button, Icon, Image, Menu, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-parallax'
import CountUp from 'react-countup';
import YouTube from 'react-youtube'
import Testimonials from '../../components/testimonials/Testimonials'
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
import Thinking from '../../images/amikka/amikka_method_6.png'
import Student from '../../images/amikka/amikka_student_1.jpg'
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

const headerStyles3 = {
  fontFamily: 'raleway',
  fontSize: '45px',
  fontWeight: 900,
}

const headerStyles4 = {
  fontFamily: 'raleway',
  fontSize: '25px',
  fontWeight: 'bold',
  lineHeight: 1.5,
  paddingTop: '5%'
}

const headerStyles5 = {
  fontFamily: 'raleway',
  fontSize: '38px',
  fontWeight: 'bold',
  color: 'rgba(23, 120, 186)'
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

const headerStyles6 = {
  fontFamily: 'raleway',
  fontSize: '20px',
  fontWeight: 'bold'
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'SAT',
      visible: true,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onReady = (event) => event.target.pauseVideo();

  scrollToTop = () => scroll.scrollToTop();

  toggleVisibility = (e, { name }) => this.setState(prevState => ({ visible: !prevState.visible, activeItem: name }))

  onStart = () => this.setState(prevState => ({ visible: true }))

  returnMenuItem = () => {
    const {
      activeItem,
      visible
    } = this.state

    if (activeItem === 'SAT') {
      return (
        <Transition visible={visible} animation='zoom' duration={500} unmountOnHide={true} onStart={this.onStart}>
          <div>
            <Grid >
              <Grid.Row textAlign='center' columns={3} style={{ paddingTop: '3%' }}>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles6}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles6}>
                    One-on-One
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles6}>
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
                  <div style={headerStyles6}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles6}>
                    One-on-One
              </div>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <div style={headerStyles6}>
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
                  <div style={headerStyles6}>
                    Sample
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles6}>
                    Math
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles6}>
                    English
              </div>
                </Grid.Column>
                <Grid.Column width={4} textAlign='center'>
                  <div style={headerStyles6}>
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
    const { activeItem } = this.state;
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
              <div style={headerStyles3}>
                Join us and become 1 of 500+ success stories
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 2 */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column textAlign='center' width={12}>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <CountUp
                      style={headerStyles5}
                      start={0}
                      end={200}
                      duration={3.75}
                      suffix="+ avg" />
                    <div style={headerStyles4}>
                      SAT Improvement
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <CountUp
                      style={headerStyles5}
                      start={0}
                      end={5}
                      duration={6}
                      suffix="+ avg" />
                    <div style={headerStyles4}>
                      ACT Improvement
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <CountUp
                      style={headerStyles5}
                      start={0}
                      end={10}
                      duration={3.75}
                      decimals={2}
                      prefix="$"
                      suffix="M+" />
                    <div style={headerStyles4}>
                      in Scholarships
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
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
                WHO WE ARE
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
            <Grid.Column width={4} textAlign='center'>
              <Image src={Thinking} size='huge' />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 7 : OUR PROCESS */}
          <Grid.Row style={{ paddingTop: '5%' }}>
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

          {/* LAYER 12 : SUPPORT */}
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

          {/* LAYER 13 : BUTTON - Book an appointment*/}
          <Grid.Row centered>
            <div style={{ paddingTop: '4%' }}>
              <Button inverted color='blue' size='huge' content='BOOK AN APPOINTMENT' as={Link} to='/contact' />
            </div>
          </Grid.Row>

          {/* LAYER 7 : OUR PROCESS */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column textAlign='center' width={16}>
              <div style={headerStyles}>
                SERVICES
              </div>
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

          <Grid.Row textAlign='center'>
            <Grid.Column width={12}>
              {this.returnMenuItem()}
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 6 */}
          <Grid.Row style={{ paddingTop: '5%' }}>
            <Grid.Column width={16}>
              <Parallax bgImage={Student} strength={300} blue={8}>
                <div style={{ height: 600, background: 'rgba(0, 0, 0, 0.5)' }}>
                  <div style={insideStyles3}>
                    <Grid stackable>

                      <Grid.Row >
                        <Grid.Column textAlign='center'>
                          <div style={headerStyles}>
                            WHAT WE OFFER
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

          {/* LAYER 14 : TESTIMONIALS */}
          <Grid.Row centered textAlign='center' style={{ paddingTop: '2%' }}>
            <Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
              <div style={headerStyles}>
                WHERE OUR STUDENTS GOT INTO
              </div>
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 15 */}
          <Grid.Row style={{ paddingTop: '2%' }}>
            <Grid.Column width={10} style={{ paddingTop: '3%' }}>
              <Testimonials />
            </Grid.Column>
          </Grid.Row>

          {/* LAYER 16 : RELATED UNIVERSITIES */}
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

          {/* LAYER 17 : BUTTON - BACK TO TOP */}
          <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%' }}>
            <Button color='blue' inverted size='huge' content='BACK TO TOP' onClick={this.scrollToTop} />
          </Grid.Row>

        </Grid>
      </div >
    )
  }
}