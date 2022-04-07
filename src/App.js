import { Component } from 'react';
import Modal from './components/Modal/Modal';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Controls from './components/Nav/Controls';
import './App.css';
export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Solve Problems',
        desc: 'Lorem Ipsum placeholder text for use in your graphic, print and web layouts',
        time: '2022-07-24T07:32',
        label: 'Web',
        isDone: true,
      },
      {
        id: 2,
        title: 'Design a website',
        desc: 'Lorem Ipsum placeholder text for use in your graphic, print and web layouts placeholder text for use in your graphic, print and web layouts',
        time: '2022-04-24T08:32',
        label: 'Doing',
        isDone: false,
      },
      {
        id: 3,
        title: 'Watch a movie',
        desc: 'Lorem Ipsum placeholder text for use in your graphic, print and web layouts',
        time: '2022-05-20T02:30',
        label: 'To Do',
        isDone: true,
      },
    ],
    labels: ['Doing', 'To Do', 'Web'],
    isOpen: false,
    isEditing: false,
    currentTask: {},
    filteredTasks: [],
    isFiltered: false,
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
      isDone: false,
    };

    this.setState((prevState) => {
      return { tasks: [task, ...prevState.tasks] };
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

  searchByTitle = (word) => {
    if (word === '') {
      this.setState({ isFiltered: false });
    } else {
      const taskAfterFilter = this.state.tasks.filter((task) => {
        return task.title.includes(word);
      });
      this.setState({ filteredTasks: taskAfterFilter, isFiltered: true });
    }
  };

  changeFilter = ({ target: { value } }) => {
    if (value === 'Filter') {
      this.setState({ isFiltered: false });
    } else {
      const taskAfterFilter = this.state.tasks.filter((task) => {
        return task.label === value;
      });
      this.setState({ filteredTasks: taskAfterFilter, isFiltered: true });
    }
  };

  doneTasks = () => {
    const taskAfterFilter = this.state.tasks.filter((task) => {
      return task.isDone === true;
    });
    this.setState({ filteredTasks: taskAfterFilter, isFiltered: true });
  };

  unDoneTasks = () => {
    const taskAfterFilter = this.state.tasks.filter((task) => {
      return task.isDone === false;
    });
    this.setState({ filteredTasks: taskAfterFilter, isFiltered: true });
  };

  allTasks = () => {
    this.setState({ isFiltered: false });
  };

  closeModal = (value) => {
    if (value === 'Update') this.setState({ isEditing: false });
    else this.setState({ isEditing: false });
    this.setState({ isOpen: false });
  };

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
          closeModal={this.closeModal}
        />
      );
    } else if (this.state.isOpen && this.state.isEditing) {
      return (
        <Modal
          editTask={this.editTask}
          labels={this.state.labels}
          isEditing={this.state.isEditing}
          currentTask={this.state.currentTask}
          closeModal={this.closeModal}
        />
      );
    }
  };

  render() {
    const { tasks, filteredTasks, isFiltered } = this.state;
    return (
      <>
        {this.renderModal()}
        <Header
          searchByTitle={this.searchByTitle}
          changeFilter={this.changeFilter}
          openModal={this.openModal}
          doneTasks={this.doneTasks}
          unDoneTasks={this.unDoneTasks}
          allTasks={this.allTasks}
        />
        <section className="main-sections">
          <Controls
            changeFilter={this.changeFilter}
            openModal={this.openModal}
            doneTasks={this.doneTasks}
            unDoneTasks={this.unDoneTasks}
            allTasks={this.allTasks}
          />{' '}
          <Cards
            tasks={tasks}
            openModal={this.openModal}
            changeCheck={this.changeCheck}
            deleteTask={this.deleteTask}
            filteredTasks={filteredTasks}
            isFiltered={isFiltered}
          />
        </section>
      </>
    );
  }
}
