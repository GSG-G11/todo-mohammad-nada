// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'hi',
        desc: 'desc',
        time: '',
        label: '',
        isDone: false,
      },
    ],
    labels: ['Doing', 'To Do', 'Web'],
    isOpen: false,
    isEditing: false,
    currentTask: {
      id: 1,
      title: 'sdf',
      desc: 'sdf',
      time: 'sdf',
      label: 'sdf',
      isDone: false,
    },
  };

  addTask = (e) => {
    e.preventDefault();
    const { title, desc, time, label, isDone } = e.target;
    const task = {
      id: Date.now(),
      title: title.value,
      desc: desc.value,
      time: time.value,
      label: label.value,
      isDone: isDone.checked,
    };

    this.setState((prevState) => {
      return { tasks: [...prevState.tasks, task] };
    });

    this.closeModal(e);
  };

  closeModal({
    target: {
      action: { value },
    },
  }) {
    console.log(value);
    if (value === 'Update') this.setState({ isEditing: false });
    else this.setState({ isEditing: false });
    this.setState({ isOpen: false });
  }

  openModal = ({ target: { value } }, id = 1) => {
    if (value === 'Update') {
      this.setState({ isEditing: true });
      const currentTask = this.state.tasks.filter((task) => task.id == id)[0];
      this.setState({ currentTask: currentTask });
    } else this.setState({ isEditing: false });
    this.setState({ isOpen: true });
  };

  render() {
    const { labels, isEditing, currentTask, isOpen } = this.state;
    return (
      <div>
        <button onClick={this.openModal} value="Add">
          Add
        </button>
        <button onClick={this.openModal} value="Update">
          Update
        </button>
        {isOpen && (
          <Modal addTask={this.addTask} labels={labels} isEditing={isEditing} />
        )}
      </div>
    );
  }
}
