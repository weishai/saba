import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/lib/app-bar';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <AppBar
          title="Title"
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
