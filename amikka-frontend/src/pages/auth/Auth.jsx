import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import PortalRoutes from '../../constants/PortalRoutes.js'

class Auth extends React.Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null;
      }
    })
  };

  render() {
    if (this.props.authState.loggedIn) {
      return <Redirect to='/user/dashboard' />
    }
    return (
      <div>
        <Container fluid>
          <Switch>{this.getRoutes(PortalRoutes)}</Switch>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(
  mapStateToProps,
  {}
)(Auth);