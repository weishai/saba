import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Main from '../components/Main'
import * as TodoActions from '../actions/todos'
// import '../../www/main.css'

class App extends Component {

  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)