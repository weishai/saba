import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MiconAdd from 'material-ui/lib/svg-icons/content/add';
import MiconRemove from 'material-ui/lib/svg-icons/content/remove-circle';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

const voteTypeItems = [
  <MenuItem key={1} value={1} primaryText="单选"/>,
  <MenuItem key={2} value={2} primaryText="多选"/>
]

const styles = {
  removeBtnStyle: {
    verticalAlign: 'bottom',
    padding: '0',
    width: '40px',
    height: '40px'
  },
  btnAdd: {
    marginTop: '8px'
  },
  btnAddIcon: {
    marginLeft: '0'
  },
  removeIconStyle: {
    width: '20px',
    height: '20px'
  },
  btnSubmitWrap: {
    margin: '40px 0 20px',
    textAlign: 'center'
  }
}

class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1}
  }

  voteTypeChange(event, index, value) {
    this.setState({value})
  }

  render() {
    return (
      <div className="form-wrap">
        <TextField
          hintText="请输入你的问题描述"
          floatingLabelText="投票问题"
          fullWidth={true}
        />
        <SelectField
          value={this.state.value}
          onChange={this.voteTypeChange.bind(this)}
          floatingLabelText="选项类型"
        >
          {voteTypeItems}
        </SelectField>
        <TextField
          hintText="请输入你的选项描述"
          floatingLabelText="选项1"
        />
        <IconButton
          iconStyle={styles.removeIconStyle}
          style={styles.removeBtnStyle}
        >
          <MiconRemove color={Colors.grey500} />
        </IconButton>
        <TextField
          hintText="请输入你的选项描述"
          floatingLabelText="选项2"
        />
        <IconButton
          iconStyle={styles.removeIconStyle}
          style={styles.removeBtnStyle}
        >
          <MiconRemove color={Colors.grey500} />
        </IconButton>
        <FlatButton
          label="添加选项"
          style={styles.btnAdd}
          secondary={true}
          icon={<MiconAdd style={styles.btnAddIcon} color={Colors.grey100} />}
        />
        <div style={styles.btnSubmitWrap}>
          <RaisedButton label="生成投票" secondary={true}/>
        </div>
      </div>
    )
  }
}

export default AddForm
