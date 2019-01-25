import React, { Component } from 'react';
import TextInput from '../../util/TextInput/TextInput';
import './task-form.css';
import DateInput from '../../util/DateInput/DateInput';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalManager';
import { saveTask } from '../../actions/tasks';
import moment from 'moment';

const mapState = (state) => ({
  modals: state.modals,
  tasks: state.tasks
});

const actions = {
  closeModal,
  saveTask
}

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      createdAt: moment().toDate(),
      text: '',
      deadline: moment().format('YYYY-MM-DD'),
      finished: false,
      finishedAt: '',
      started: false,
      startedAt: '',
      owner: ''
    }
  }

  handleChange = (field, value) => {    
    this.setState({ [field]: value });
  }

  componentDidMount(){
    this.handleChange('id', this.props.tasks['list']?this.props.tasks.list.length:0);
  }

  render() {    
    return (
      <div className="form">
        <label>Task Description</label>
        <TextInput placeholder={'Write here your task'} change={this.handleChange} field={'text'} value={this.state.text} />
        <label>Deadline</label>
        <DateInput change={this.handleChange} field={"deadline"} value={this.state.deadline} />
        <label>Task Owner</label>
        <TextInput placeholder={'Who should accomplish this task?'} change={this.handleChange} field={'owner'} value={this.state.owner} />
        <button onClick={() => this.props.closeModal()} className="btn medium danger">Cancel</button>
        <button onClick={() => {this.props.saveTask(this.state); this.props.closeModal() }} className="btn medium primary">Save</button>
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskForm);