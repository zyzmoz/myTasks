import React, { Component } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { connect } from 'react-redux';
import { startTask, finishTask, getTaskArchive } from '../../actions/tasks';


const mapState = (state) => ({
  tasks: state.tasks
});

const actions = {
  startTask,
  finishTask,
  getTaskArchive
}


class Archive extends Component {

  async componentDidMount () {
    await this.props.getTaskArchive();
  }

  render() {
    let { archive } = this.props.tasks;    
    return (
      <div className="content">
        <TaskList list={archive} startTask={this.props.startTask} finishTask={this.props.finishTask} />
      </div>
    );
  }
}

export default connect(mapState, actions)(Archive);