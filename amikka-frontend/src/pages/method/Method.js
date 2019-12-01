import React, { Component } from 'react'
import { Grid, Image, List, Menu, Transition, Segment, Card } from 'semantic-ui-react'

import Logo from '../../images/amikka/logo5.svg'
import Method1 from '../../images/amikka/amikka_method_1.png'
import Method2 from '../../images/amikka/amikka_method_2.png'
import Method3 from '../../images/amikka/amikka_method_3.png'
import Method4 from '../../images/amikka/amikka_method_4.png'
import Method5 from '../../images/amikka/amikka_method_5.png'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  fontWeight: 'bold',
}

const bulletHeaderStyles = {
  fontFamily: 'raleway',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'underline'
}

const bulletHeaderStyles2 = {
  fontFamily: 'raleway',
  fontsize: '14px',
  fontWeight: 'bolder',
  lineHeight: 1.5
}

const bulletDescStyles = {
  fontFamily: 'raleway',
  fontsize: '8px',
  lineHeight: 1.2
}

export default class Method extends Component {
  render() {
    return (
      <Grid verticalAlign='middle' columns={6} centered>

        {/* LAYER 5 : THE AMIKKA METHOD */}
        <Grid.Row style={{ paddingTop: '7%' }}>
          <Grid.Column textAlign='center' width={16}>
            <div style={headerStyles}>
              How do our students perform well on the SAT/ACT exam?
              </div>
          </Grid.Column>
        </Grid.Row>

        {/* LAYER 6 : EDUCATION */}
        <Grid.Row centered verticalAlign='middle' textAlign='center'>
          <Grid.Column width={7} textAlign='right'>
            <div >
              <Image src={Logo} size='huge' />
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <Grid centered verticalAlign='middle'>

              <Grid.Row >
                {/* <Grid.Column width={2} >
                  <Image avatar src={Method1} size='huge' />
                </Grid.Column> */}
                <Grid.Column width={15}>
                  <List>
                    <List.Item>
                      <List.Icon name='circle outline' size='large' />
                      <List.Content>
                        <div style={bulletHeaderStyles}>
                          EDUCATION
                        </div>
                        <List.List>
                          <List.Item>
                            <List.Content>
                              <List.Description style={bulletDescStyles}>
                                The Amikka Program focuses on progress through the lens of time management, content, and strategy to maximize the rate of improvement for students on the SAT/ACT exam
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {/* <Grid.Column width={2} >
                  <Image avatar src={Method2} size='small' />
                </Grid.Column> */}
                <Grid.Column width={15}>
                  <List>
                    <List.Item>
                      <List.Icon name='circle outline' size='large' />
                      <List.Content>
                        <div style={bulletHeaderStyles}>
                          TIME MANAGEMENT
                        </div>
                        <List.List>
                          <List.Item>
                            <List.Content>
                              <div style={bulletHeaderStyles2}>
                                Increasing Time Constraints
                              </div>
                              <List.Description style={bulletDescStyles}>
                                Quicker problem solving with lower time thresholds
                                {/* We slowly increase time constraints to force our students to work outside of their comfort zone to become quicker at problem solving. */}
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                        <List.List>
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
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {/* <Grid.Column width={2}>
                  <Image avatar src={Method3} size='small' />
                </Grid.Column> */}
                <Grid.Column width={15}>
                  <List>
                    <List.Item>
                      <List.Icon name='circle outline' size='large' />
                      <List.Content>
                        <div style={bulletHeaderStyles}>
                          STRATEGY
                        </div>
                        <List.List>
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
                        </List.List>
                        <List.List>
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
                        </List.List>
                        <List.List>
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
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {/* <Grid.Column width={2}>
                  <Image avatar src={Method4} size='small' />
                </Grid.Column> */}
                <Grid.Column width={15}>
                  <List>
                    <List.Item>
                      <List.Icon name='circle outline' size='large' />
                      <List.Content>
                        <div style={bulletHeaderStyles}>
                          CONTENT
                        </div>
                        <List.List>
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
                        </List.List>
                        <List.List>
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
                        </List.List>
                        <List.List>
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
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                {/* <Grid.Column width={2}>
                  <Image avatar src={Method5} size='small' />
                </Grid.Column> */}
                <Grid.Column width={15}>
                  <List>
                    <List.Item>
                      <List.Icon name='circle outline' size='large' />
                      <List.Content>
                        <div style={bulletHeaderStyles}>
                          THEORY
                        </div>
                        <List.List>
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
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}