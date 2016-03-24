import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import RaisedButton from 'material-ui/lib/raised-button'

const styles = {
  td: {
    paddingLeft: '4px'
  },
  btnSubmitWrap: {
    margin: '20px 0 10px',
    textAlign: 'center'
  }
}

class VoteView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>我们要投票的问题将会显示在这里？</p>
        <Table className="table-vote">
          <TableBody deselectOnClickaway={false}>
            <TableRow>
              <TableRowColumn>选项一测试一下超长的文字会如何哈哈哈哈哈</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>选项二</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <div style={styles.btnSubmitWrap}>
          <RaisedButton label="确定投票" secondary={true}/>
        </div>
      </div>
    )
  }

}

export default VoteView