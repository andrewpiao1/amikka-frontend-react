import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import './sidebar.css'

const headerStyles = {
  fontFamily: 'raleway',
  fontSize: '16px',
  display: 'inline-block',
  paddingLeft: '5%'
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    }
    this.activeRoute.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  createSideBarLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <Menu.Item key={key}>
          <div className='navbar-list'>
            <NavLink
              to={`${prop.layout}` + `${prop.path}`}
              activeClassName='active'
              activeStyle={{
                fontWeight: 'bold',
                color: 'rgb(100, 149, 237)'
              }}
            >
              <div style={{ paddingLeft: '5%', paddingTop: '5%' }}>
                <Icon name={prop.icon} />
                <div style={headerStyles}>
                  {prop.name}
                </div>
              </div>
            </NavLink>
          </div>
        </Menu.Item>
      )
    })
  }

  render() {
    const { PortalRoutes } = this.props;
    return (
      <div >
        <Menu fluid secondary vertical style={{ paddingLeft: '5%', paddingTop: '15%' }}>
          {this.createSideBarLinks(PortalRoutes)}
          </Menu>
      </div>
    )
  }
}

Sidebar.defaultProps = {
  PortalRoutes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  PortalRoutes: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Sidebar)