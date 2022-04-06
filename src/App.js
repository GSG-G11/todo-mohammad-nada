// import logo from './logo.svg';
import { Component } from 'react';
import Modal from './components/Modal/Modal';
import Cards from './components/Modal/Cards';
import './App.css';
export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1515515,
        title: 'hi',
        desc: 'desc',
        time: '2022-04-24T08:32',
        label: '',
        isDone: false,
      },
    ],
    labels: ['Doing', 'To Do', 'Web'],
    isOpen: false,
    isEditing: false,
    currentTask: {},
  };

  addTask = (e) => {
    e.preventDefault();
    const { title, desc, time, label } = e.target;
    const task = {
      id: Date.now(),
      title: title.value,
      desc: desc.value,
      time: time.value,
      label: label.value,
    };

    this.setState((prevState) => {
      return { tasks: [...prevState.tasks, task] };
    });

    this.closeModal('Add');
  };

  editTask = (e) => {
    e.preventDefault();
    const { title, desc, time, label } = e.target;
    const {
      currentTask: { id },
    } = this.state;
    const updatedTask = {
      id,
      title: title.value,
      desc: desc.value,
      time: time.value,
      label: label.value,
    };
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) return updatedTask;
      else return task;
    });
    this.setState({ tasks: tasks });
    this.closeModal('Update');
  };

  changeCheck = (id) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) task.isDone = !task.isDone;
      return task;
    });
    this.setState({ tasks: tasks });
  };

  deleteTask = (id) => {
    const tasksAfterDeleted = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: tasksAfterDeleted });
  };

  closeModal(value) {
    if (value === 'Update') this.setState({ isEditing: false });
    else this.setState({ isEditing: false });
    this.setState({ isOpen: false });
  }

  openModal = (value, id) => {
    if (value === 'Update') {
      this.setState({ isEditing: true });
      const currentTask = this.state.tasks.filter((task) => task.id === id)[0];
      this.setState({ currentTask: currentTask });
    } else this.setState({ isEditing: false });
    this.setState({ isOpen: true });
  };

  renderModal = () => {
    if (this.state.isOpen && !this.state.isEditing) {
      return (
        <Modal
          addTask={this.addTask}
          labels={this.state.labels}
          isEditing={this.state.isEditing}
        />
      );
    } else if (this.state.isOpen && this.state.isEditing) {
      return (
        <Modal
          editTask={this.editTask}
          labels={this.state.labels}
          isEditing={this.state.isEditing}
          currentTask={this.state.currentTask}
        />
      );
    }
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <button onClick={() => this.openModal('Add')} value="Add">
          Add
        </button>
        {this.renderModal()}
        <Cards
          tasks={tasks}
          openModal={this.openModal}
          changeCheck={this.changeCheck}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}
