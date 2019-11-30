import React, { Component } from 'react'
import { Button, Grid, Transition, Segment } from 'semantic-ui-react'

import Statements from './Statements'

const descriptionStyles = {
  fontFamily: 'raleway',
  fontSize: '15px',
  lineHeight: 1.8,
  fontWeight: 'bold',
  color: 'white',
}

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: Statements,
      activeIndex: 1,
      time: 0,
    }
    this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick.bind(this);
  }

  handleLeftButtonClick = () => {
    const { activeIndex, statements } = this.state;
    if (activeIndex === 1) {
      this.setState((prevState) => ({ activeIndex: statements.length }))
    } else {
      this.setState((prevState) => ({ activeIndex: activeIndex - 1 }))
    }
  }

  handleRightButtonClick = () => {
    const { activeIndex, statements } = this.state;
    if (activeIndex === statements.length) {
      this.setState((prevState) => ({ activeIndex: 1 }))
    } else {
      this.setState((prevState) => ({ activeIndex: activeIndex + 1 }))
    }
  }

  render() {
    const { activeIndex, statements } = this.state;
    return (
      <div>
        <Grid verticalAlign='middle' columns={4} centered>
          <Grid.Row >

            <Grid.Column textAlign='center'>
              <Button icon='caret left' inverted color='blue' circular onClick={this.handleLeftButtonClick} />
            </Grid.Column>


            <Grid.Column width={8} textAlign='center'>

              {statements.filter(item => item.id === activeIndex).map(item => (
                <Transition
                  duration={1000}
                  animation='fade'
                  transitionOnMount
                >
                  <Segment raised style={{ background: 'rgba(23, 120, 186, 0.8)' }}>
                    <div style={{ paddingTop: '5%', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                      <div style={descriptionStyles}>
                        "{item.statement}"
                      </div>
                      <br />
                      <div style={descriptionStyles}>
                        - {item.name}
                      </div>
                    </div>
                  </Segment>
                </Transition>
              ))}

            </Grid.Column>


            <Grid.Column textAlign='center'>
              <Button icon='caret right' inverted color='blue' circular onClick={this.handleRightButtonClick} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div >
    )
  }
}