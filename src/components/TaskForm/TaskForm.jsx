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

  handleChange = (e) => {    
    console.log(e)
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount(){
    const newTask = { target: {value:this.props.tasks['list']?this.props.tasks.list.length:0, name: 'id'}};    
    this.handleChange(newTask);
  }

  render() {    
    return (
      <div className="form">
        <label>Task Description</label>
        <TextInput placeholder={'Write here your task'} change={this.handleChange} value={this.state.text} name="text"/>
        <label>Deadline</label>
        <DateInput change={this.handleChange} name="deadline" value={this.state.deadline} />
        <label>Task Owner</label>
        <TextInput placeholder={'Who should accomplish this task?'} change={this.handleChange} name="owner" value={this.state.owner} />
        <button onClick={() => this.props.closeModal()} className="btn medium danger">Cancel</button>
        <button onClick={() => {this.props.saveTask(this.state); this.props.closeModal() }} className="btn medium primary">Save</button>
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskForm);