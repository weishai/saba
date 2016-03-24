import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <AppBar
          title={<Link to="/view" style={{color:'#fff', textDecoration: 'inherit'}}>Home</Link>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false} />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header