import React, { Component } from 'react'
import { Button, Grid, Transition, Image, Container, Icon, Label } from 'semantic-ui-react'

import Statements from './Statements'
import Quotes from '../../images/misc/quotes.png'

const descriptionStyles = {
  fontFamily: 'raleway',
  fontSize: '13px',
  lineHeight: 1.8,
  fontWeight: 'bold',
  fontDisplay: 'block',
  color: 'black',
  paddingBottom: '5%',
  paddingLeft: '5%',
  paddingRight: '5%'
}

const imageStyles = {
  position: 'relative',
  textAlign: 'center',
}

const bulletStyles = {
  paddingLeft: '5px',
  paddingRight: '5px',
  display: 'inline-block',
}

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: Statements,
      activeIndex: 1,
      time: 0,
      visible: true,
      active: true,
    }
    this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick.bind(this);
  }

  handleLeftButtonClick = (e) => {
    const { activeIndex, statements } = this.state;
    activeIndex <= 2
      ?
      this.setState(prevState => ({ activeIndex: statements.length - 2, visible: !prevState.visible,  }))
      :
      this.setState(prevState => ({ activeIndex: activeIndex - 3, visible: !prevState.visible,  }))
  }

  handleRightButtonClick = (e) => {
    const { activeIndex, statements } = this.state;
    activeIndex >= statements.length - 2
      ?
      this.setState(prevState => ({ activeIndex: 1, visible: !prevState.visible,  }))
      :
      this.setState(prevState => ({ activeIndex: activeIndex + 3, visible: !prevState.visible,  }))
  }

  onStart = () => this.setState(prevState => ({ visible: true }))

  toggleVisibility = (e, { name }) => this.setState(prevState => ({ visible: !prevState.visible, activeItem: name }))

  onStart = () => this.setState(prevState => ({ visible: true }))

  render() {
    const { activeIndex, statements, visible, active } = this.state;
    return (
      <Grid >
        <Grid.Row verticalAlign='top' columns={3}>

          <Grid.Column>
            {statements.filter(item => item.id === activeIndex).map(item => (
              <Transition visible={visible} animation='drop' duration={300} unmountOnHide={true} onStart={this.onStart}>
                <div>
                  <Container>
                    <Image src={Quotes} size='mini' />
                    <div style={descriptionStyles}>
                      <div>
                        "{item.statement}"
                        </div>
                      <br />
                      <div style={{ textAlign: 'center' }}>
                        - {item.name}
                      </div>
                    </div>
                  </Container>
                </div>
              </Transition>
            ))}
          </Grid.Column>

          <Grid.Column>
            {statements.filter(item => (activeIndex < statements.length - 1) ? (item.id === activeIndex + 1) : (item.id === statements.length - statements.length + 1)).map(item => (
              <Transition visible={visible} animation='drop' duration={300} unmountOnHide={true} onStart={this.onStart}>
                <div>
                  <Container>
                    <Image src={Quotes} size='mini' />
                    <div style={descriptionStyles}>
                      <div>
                        "{item.statement}"
                        </div>
                      <br />
                      <div style={{ textAlign: 'center' }}>
                        - {item.name}
                      </div>
                    </div>
                  </Container>
                </div>
              </Transition>
            ))}
          </Grid.Column>

          <Grid.Column>
            {statements.filter(item => (activeIndex < statements.length - 2) ? (item.id === activeIndex + 2) : (item.id === statements.length - statements.length + 2)).map(item => (
              <Transition visible={visible} animation='drop' duration={300} unmountOnHide={true} onStart={this.onStart}>
                <div>
                  <Container>
                    <Image src={Quotes} size='mini' />
                    <div style={descriptionStyles}>
                      <div>
                        "{item.statement}"
                        </div>
                      <br />
                      <div style={{ textAlign: 'center' }}>
                        - {item.name}
                      </div>
                    </div>
                  </Container>
                </div>
              </Transition>
            ))}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={1}>
          <Grid.Column verticalAlign='middle'>
            <div style={{ paddingRight: '5%', display: 'inline-block' }}>
              <Button active={!active} icon='caret left' basic color='blue' circular onClick={this.handleLeftButtonClick} />
            </div>
            <div style={{ paddingLeft: '5%', display: 'inline-block' }}>
              <Button active={!active} icon='caret right' basic color='blue' circular onClick={this.handleRightButtonClick} />
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}