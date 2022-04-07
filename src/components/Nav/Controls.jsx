import {Component} from 'react'
import './Nav.css';

export default class Controls extends Component {
  state = {
    active: 'all'
  }

  isActive = (name) =>{
      this.setState({active : name})
  }

  render(){

  const {openModal, changeFilter, allTasks, unDoneTasks, doneTasks } = this.props;
  const {active} = this.state;

  return (
    <nav className="nav">
      <button className="add-task" onClick={() => openModal('Add')} value="Add" >
        <i className="fa-solid fa-plus"></i>Add
      </button>
      <button onClick={() => { allTasks(); this.isActive('all')}} name="all" value="all" className={active === 'all' ? 'active' : 'btn'} >
        All
      </button>
      <button onClick={() => { unDoneTasks(); this.isActive('undone')}} name="undone" value="UnDone" className={active === 'undone' ? 'active' : 'btn'}>
        UnDone
      </button>
      <button onClick={() => { doneTasks(); this.isActive('done')}} name="done" value="Done" className={active === 'done' ? 'active' : 'btn'}>
        Done
      </button>
      <select name="filter" defaultValue="filter" onChange={changeFilter}>
        <option value="Filter">Filter</option>
        <option value="Doing">Doing</option>
        <option value="To Do">To Do</option>
        <option value="Web">Web</option>
      </select>
    </nav>
  );
}
}