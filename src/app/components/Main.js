import React, { Component, PropTypes } from 'react'
import AddForm from './AddForm';
import VoteView from './VoteView';
import VoteResult from './VoteResult';

class Main extends Component {
  
  render(){
    return (
      <div className="form-wrap">
        <VoteView />
      </div>
    )
  }

}

// Main.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

export default Main
