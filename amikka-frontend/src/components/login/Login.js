import React from 'react'
import { Form, Grid, Button, Transition, Segment, Icon, Label } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/AuthActions'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '30px',
  color: 'white',
}

const headerStyles3 = {
  fontFamily: 'raleway',
  fontSize: '15px',
}

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (stateName, value) => {
    this.setState({
      [stateName]: value
    })
  }

  handleLoginClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state)
  }

  render() {
    const { authError } = this.props;
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
                          Sign in with
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
                          Or sign in with credentials
												</div>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered style={{ paddingTop: '2%' }}>
                      <Grid.Column>
                        <Form size='big'>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='Email' onChange={e => this.onChange('email', e.target.value)} />
                          </Form.Group>
                          <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='Password' type='password' onChange={e => this.onChange('password', e.target.value)} />
                          </Form.Group>
                        </Form>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} centered>
                      <Grid.Column textAlign='center'>
                        {authError ? <p>{authError}</p> : null}
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2} textAlign='center' centered style={{ paddingTop: '2%' }}>
                      <Grid.Column>
                        <Button inverted size='big' color='blue' floated='right' as={Link} to='/auth/register'>
                          Sign Up
											  </Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Button inverted size='big' color='blue' floated='left' onClick={this.handleLoginClick}>
                          Login
											</Button>
                      </Grid.Column>
                    </Grid.Row>

                  </Grid>
                </Segment>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div style={{ paddingRight: '10px' }}>
                      <Label basic as={Link} to='/auth/pw-forget'>
                        Forgot password?
										</Label>
                    </div>
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);