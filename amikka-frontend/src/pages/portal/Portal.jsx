import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../../components/sidebar/Sidebar'
import PortalRoutes from '../../constants/PortalRoutes'

// Image imports
import Blue from '../../images/backgrounds/blue-trianglify.png'


class Portal extends React.Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/user') {
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
    });
  };

  render() {
    if (!this.props.loggedIn) {
      console.log(this.props.loggedIn)
      return <Redirect to='/auth/login' />;
    }
    return (
      <div>
        <Grid width={16}>
          <Grid.Row columns={2} style={{minHeight: '100vh'}}>
            <Grid.Column width={3} style={{minHeight: '100vh'}}>
              <Sidebar
                {...this.props}
                PortalRoutes={PortalRoutes}
                style={{minHeight: '100vh'}}
              />
            </Grid.Column>
            <Grid.Column width={13} stretched>
              <Switch>{this.getRoutes(PortalRoutes)}</Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(Portal);