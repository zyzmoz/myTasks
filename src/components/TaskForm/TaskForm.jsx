import React, { Component } from 'react';
import TextInput from '../../util/TextInput/TextInput';
import './task-form.css';
import DateInput from '../../util/DateInput/DateInput';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalManager';

const mapState = (state) => ({
  modals: state.modalReducer
});

const actions = {
  closeModal
}

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      createdAt: '',
      text: '',
      deadline: '',
      finished: false,
      finishedAt: '',
      started: false,
      startedAt: '',
      owner: ''
    }
  }
  render() {
    return (
      <div className="form">
        <label>Task Description</label>
        <TextInput placeholder={'Write here your task'} />
        <label>Deadline</label>
        <DateInput placeholder={'Who should accomplish this task?'} />
        <label>Task Owner</label>
        <TextInput placeholder={'Who should accomplish this task?'} />
        <button onClick={() => this.props.closeModal()} className="btn medium danger">Cancel</button>
        <button onClick={() => this.props.closeModal()} className="btn medium primary">Save</button>
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskForm);