import React, { Component } from 'react'
import { Grid, Image, List, Accordion, Message } from 'semantic-ui-react'
import AnimateHeight from 'react-animate-height';
import Header from '../../components/header/Header'
import MethodLogo from '../../images/amikka/amikka_method_logo.jpg'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
  color: 'white'
}

const bulletHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  display: 'inline-block',
  marginLeft: '10px'
}

const bulletHeaderStyles2 = {
  fontFamily: 'raleway',
  fontsize: '14px',
  fontWeight: 'bolder',
  lineHeight: 1.5
}

const bulletDescStyles = {
  fontFamily: 'raleway',
  fontsize: '10px',
  lineHeight: 1.5
}

export default class Method extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isEducationAccordionOpen: true,
      isTimeManagementAccordionOpen: true,
      isStrategyAccordionOpen: true,
      isContentAccordionOpen: true,
      isTheoryAccordionOpen: true,
    }
    this.handleEducationAccordionClick = this.handleEducationAccordionClick.bind(this);
  }

  handleEducationAccordionClick = (e) => (this.setState(prevState => ({ isEducationAccordionOpen: !prevState.isEducationAccordionOpen })))

  handleTimeManagementAccordionClick = () => (this.setState(prevState => ({ isTimeManagementAccordionOpen: !prevState.isTimeManagementAccordionOpen })))

  handleStrategyAccordionClick = () => (this.setState(prevState => ({ isStrategyAccordionOpen: !prevState.isStrategyAccordionOpen })))

  handleEContentAccordionClick = () => (this.setState(prevState => ({ isContentAccordionOpen: !prevState.isContentAccordionOpen })))

  handleTheoryAccordionClick = () => (this.setState(prevState => ({ isTheoryAccordionOpen: !prevState.isTheoryAccordionOpen })))

  render() {
    const {
      isEducationAccordionOpen,
      isTimeManagementAccordionOpen,
      isStrategyAccordionOpen,
      isContentAccordionOpen,
      isTheoryAccordionOpen
    } = this.state;
    const educationData = [{
      title: <div style={bulletHeaderStyles}>EDUCATION</div>,
      icon: isEducationAccordionOpen ? <List.Icon name='circle outline' size='large' color='blue' /> : <List.Icon name='chevron circle down' size='large' color='blue' />,
      content:
        <Message floating>
          <List>
            <List.Item>
              <List.Content>
                <List.Description style={bulletDescStyles}>
                  The Amikka Program focuses on progress through the lens of time management, content, and strategy to maximize the rate of improvement for students on the SAT/ACT exam
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Message>
    }]
    const timeManagementData = [{
      title: <div style={bulletHeaderStyles}>TIME MANAGEMENT</div>,
      icon: isTimeManagementAccordionOpen ? <List.Icon name='circle outline' size='large' color='blue' /> : <List.Icon name='chevron circle down' size='large' color='blue' />,
      content:
        <Message floating>
          <List>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Increasing Time Constraints
                </div>
                <List.Description style={bulletDescStyles}>
                  Quicker problem solving with lower time thresholds
            </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Efficiency
                </div>
                <List.Description style={bulletDescStyles}>
                  Increased adaptability in problem solving
                  {/* We give our students a strong problem solving foundation and teach them multiple ways to approach the same question to the get the correct answer.                                */}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Message>
    }]
    const strategyData = [{
      title: <div style={bulletHeaderStyles}>STRATEGY</div>,
      icon: isStrategyAccordionOpen ? <List.Icon name='circle outline' size='large' color='blue' /> : <List.Icon name='chevron circle down' size='large' color='blue' />,
      content:
        <Message floating>
          <List>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Study Guides
                </div>
                <List.Description style={bulletDescStyles}>
                  Mistake patterns, important formulas, and main topics
                  {/* We help our students build a mid-course and post-course study guide with mistake patterns, important formulas, and main topics. */}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Personalization
                </div>
                <List.Description style={bulletDescStyles}>
                  Custom designed strategies
                  {/* We assess our students thought process and show them multiple strategies that would work for them. */}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Analyzing Context
                </div>
                <List.Description style={bulletDescStyles}>
                  Formulated context builds to minimize mistakes
                  {/* We teach our students to build context for every problem before attempting to find a solution to minimize mistakes. */}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Message>
    }]
    const contentData = [{
      title: <div style={bulletHeaderStyles}>CONTENT</div>,
      icon: isContentAccordionOpen ? <List.Icon name='circle outline' size='large' color='blue' /> : <List.Icon name='chevron circle down' size='large' color='blue' />,
      content:
        <Message floating>
          <List>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Understanding
                </div>
                <List.Description style={bulletDescStyles}>
                  Topic breakdowns for easily digestible solutions
                  {/* We break topics apart into smaller sections to make it more digestible for all of our students. */}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Studying
                </div>
                <List.Description style={bulletDescStyles}>
                  Fun and efficient style of study
                {/* We help our students find an efficient way to study to make their process more fun and efficient. */}
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  Memorization
                </div>
                <List.Description style={bulletDescStyles}>
                  Focus topics via flashcards for maximum improvement
                  {/* We encourage our students to have flashcards with main topics and mistake patterns for maximum improvement. */}
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Message>
    }]
    const theoryData = [{
      title: <div style={bulletHeaderStyles}>THEORY</div>,
      icon: isTheoryAccordionOpen ? <List.Icon name='circle outline' size='large' color='blue' /> : <List.Icon name='chevron circle down' size='large' color='blue' />,
      content:
        <Message floating>
          <List>
            <List.Item>
              <List.Content>
                <div style={bulletHeaderStyles2}>
                  We Believe:
                </div>
                <List.List>
                  <List.Item>
                    <List.Icon name='check' size='tiny' verticalAlign='middle' />
                    <List.Content>
                      <List.Description style={bulletDescStyles}>
                        The area of the triangle is the students potential
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='check' size='tiny' verticalAlign='middle' />
                    <List.Content>
                      <List.Description style={bulletDescStyles}>
                        There are synergies between each of the side lengths
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='check' size='tiny' verticalAlign='middle' />
                    <List.Content>
                      <List.Description style={bulletDescStyles}>
                        Working on all three sides leads to greatest expansion
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
          </List>
        </Message>
    }]
    return (
      <div>
        <Header />

        <Grid verticalAlign='middle' columns={5} centered={true} style={{ paddingTop: '12px' }}>

          <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%', background: 'rgba(23, 120, 186, 0.6)' }}>
            <Grid.Column textAlign='center' width={16}>
              <div style={headerStyles}>
                How do our students perform well on the SAT/ACT exam?
            </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row width={4} style={{ paddingTop: '5%' }}>
            <Grid.Column textAlign='center' verticalAlign='bottom' >
              <Accordion
                fluid
                activeIndex={this.state.activeAccordion}
                onTitleClick={this.handleEducationAccordionClick}
                exclusive={false}
                panels={educationData.map((data, i) => ({
                  key: i,
                  title: { content: data.title, icon: data.icon },
                  content: (AccordionContent, { key, active }) => (
                    <div key={key} style={{ paddingLeft: '8%' }}>
                      <AnimateHeight animateOpacity duration={300} height={active ? 'auto' : 0}>
                        {data.content}
                      </AnimateHeight>
                    </div>
                  ),
                }))}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered={true} verticalAlign='middle'>
            <Grid.Column textAlign='center' width={4} style={{ paddingLeft: '5%', paddingRight: '2%' }}>
              <Accordion
                fluid
                activeIndex={this.state.activeAccordion}
                onTitleClick={this.handleTimeManagementAccordionClick}
                exclusive={false}
                panels={timeManagementData.map((data, i) => ({
                  key: i,
                  title: { content: data.title, icon: data.icon },
                  content: (AccordionContent, { key, active }) => (
                    <div key={key} style={{ paddingLeft: '8%' }}>
                      <AnimateHeight animateOpacity duration={300} height={active ? 'auto' : 0}>
                        {data.content}
                      </AnimateHeight>
                    </div>
                  ),
                }))}
              />
              <br />
              <Accordion
                fluid
                activeIndex={this.state.activeAccordion}
                onTitleClick={this.handleStrategyAccordionClick}
                exclusive={false}
                panels={strategyData.map((data, i) => ({
                  key: i,
                  title: { content: data.title, icon: data.icon },
                  content: (AccordionContent, { key, active }) => (
                    <div key={key} style={{ paddingLeft: '8%' }}>
                      <AnimateHeight animateOpacity duration={300} height={active ? 'auto' : 0}>
                        {data.content}
                      </AnimateHeight>
                    </div>
                  ),
                }))}
              />
            </Grid.Column>

            <Grid.Column textAlign='center' width={4}>
              <Image fluid centered={true} src={MethodLogo} size='large' />
            </Grid.Column>

            <Grid.Column textAlign='center' width={4} style={{ paddingRight: '8%' }}>
              <Accordion
                fluid
                activeIndex={this.state.activeAccordion}
                onTitleClick={this.handleEContentAccordionClick}
                exclusive={false}
                panels={contentData.map((data, i) => ({
                  key: i,
                  title: { content: data.title, icon: data.icon },
                  content: (AccordionContent, { key, active }) => (
                    <div key={key} style={{ paddingLeft: '8%' }}>
                      <AnimateHeight animateOpacity duration={300} height={active ? 'auto' : 0}>
                        {data.content}
                      </AnimateHeight>
                    </div>
                  ),
                }))}
              />
              <br />
              <Accordion
                fluid
                activeIndex={this.state.activeAccordion}
                onTitleClick={this.handleTheoryAccordionClick}
                exclusive={false}
                panels={theoryData.map((data, i) => ({
                  key: i,
                  title: { content: data.title, icon: data.icon },
                  content: (AccordionContent, { key, active }) => (
                    <div key={key} style={{ paddingLeft: '8%' }}>
                      <AnimateHeight animateOpacity duration={300} height={active ? 'auto' : 0}>
                        {data.content}
                      </AnimateHeight>
                    </div>
                  ),
                }))}
              />
              <br />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}