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

  handleChange = (e) => {        
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {    
    return (
      <div className="form">        
        <TextInput placeholder={'Write here your task'} onChange={this.handleChange} value={this.state.text} name="text" label="Task Description"/>        
        <DateInput onChange={this.handleChange} name="deadline" value={this.state.deadline} label="Deadline"/>        
        <TextInput placeholder={'Who should accomplish this task?'} onChange={this.handleChange} name="owner" value={this.state.owner} label="Task Owner"/>        
        <button onClick={() => {this.props.saveTask(this.state); this.props.closeModal() }} className="btn medium primary">Save</button>
        <button onClick={() => this.props.closeModal()} className="btn medium danger">Cancel</button>
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskForm);