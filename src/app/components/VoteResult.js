import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import LinearProgress from 'material-ui/lib/linear-progress'

const styles = {
  LinearProgress: {
    height: '10px'
  }
}

class VoteResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vote-result">
        <h3>我们要投票的问题将会显示在这里？</h3>
        <table className="table-voteresult">
          <tbody>
            <tr>
              <td className="item-name">唱k</td>
              <td className="item-area"><LinearProgress style={styles.LinearProgress} mode="determinate" value={70} /></td>
              <td className="item-info">70% (70票)</td>
            </tr>
            <tr>
              <td className="item-name">卡丁车</td>
              <td className="item-area"><LinearProgress style={styles.LinearProgress} mode="determinate" value={36} /></td>
              <td className="item-info">36% (36票)</td>
            </tr>
            <tr>
              <td className="item-name">大夫山烧烤踩单车吃饭麻将</td>
              <td className="item-area"><LinearProgress style={styles.LinearProgress} mode="determinate" value={36} /></td>
              <td className="item-info">36% (36票)</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default VoteResult