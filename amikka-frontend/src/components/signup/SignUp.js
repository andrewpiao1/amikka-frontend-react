import React from 'react'
import { Form, Grid, Button, Transition, Segment, Icon, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { signUp } from '../../redux/actions/AuthActions'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  color: 'white',
}

const headerStyles2 = {
  fontFamily: 'raleway',
  fontSize: '30px',
}

const headerStyles3 = {
  fontFamily: 'raleway',
  fontSize: '15px',
}

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  onChange = (stateName, value) => {
    this.setState({
      [stateName]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  render() {
    return (
      <div>
        <Grid centered padded>

          <Grid.Row style={{ paddingTop: '5%', paddingBottom: '5%' }} color='blue'>
            <Grid.Column textAlign='center'>
              <div style={headerStyles}>
                Welcome!
							</div>
            </Grid.Column>
          </Grid.Row>

          <Transition animation='fade up' duration='700' transitionOnMount>
            <Grid.Row centered style={{ paddingTop: '3%' }}>
              <Grid.Column centered textAlign='center' width={5}>
                <Segment raised>
                  <Grid width={6} style={{ paddingTop: '5%', paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
                    <Grid.Row centered>
                      <Grid.Column textAlign='center'>
                        <div style={headerStyles3}>
                          Sign up with
											</div>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={3} style={{ paddingTop: '1%' }}>
                      <Grid.Column textAlign='right'>
                        <Icon size='large' circular bordered name='google' link onClick={e => e.preventDefault()} />
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                        <Icon size='large' circular bordered name='facebook' link onClick={e => e.preventDefault()} />
                      </Grid.Column>
                      <Grid.Column textAlign='left'>
                        <Icon size='large' circular bordered name='twitter' link onClick={e => e.preventDefault()} />
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered style={{ paddingTop: '5%' }}>
                      <Grid.Column centered textAlign='center'>
                        <div style={headerStyles3}>
                          Or sign up with credentials
												</div>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered style={{ paddingTop: '2%' }}>
                      <Grid.Column>
                        <Form size='big'>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='First Name' onChange={e => this.onChange('firstName', e.target.value)} />
                          </Form.Group>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='Last Name' onChange={e => this.onChange('lastName', e.target.value)} />
                          </Form.Group>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='Email' onChange={e => this.onChange('email', e.target.value)} />
                          </Form.Group>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='Password' type='password' onChange={e => this.onChange('password', e.target.value)} />
                          </Form.Group>
                        </Form>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered style={{ paddingTop: '2%' }}>
                      <Button
                        inverted
                        size='big'
                        color='blue'
                        floated='right'
                        onClick={this.handleSubmit}
                      >
                        Create Account
											</Button>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Grid.Row columns={1} >
                  <Grid.Column textAlign='left'>
                    <Label basic as={Link} to='/auth/login'>
                      Sign In
										</Label>
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Transition>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => ({
  signUp: (newUser) => dispatch(signUp(newUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);