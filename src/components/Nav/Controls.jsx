import './Nav.css';
export default function Controls({
  changeFilter,
  openModal,
  doneTasks,
  unDoneTasks,
  allTasks,
}) {
  return (
    <nav className="nav">
      <button className="add-task" onClick={() => openModal('Add')} value="Add">
        <i className="fa-solid fa-plus"></i>Add
      </button>
      <button onClick={allTasks} name="all" value="all">
        All
      </button>
      <button onClick={unDoneTasks} name="undone" value="UnDone">
        UnDone
      </button>
      <button onClick={doneTasks} name="done" value="Done">
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
