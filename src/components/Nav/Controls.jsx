export default function Controls({
  changeFilter,
  openModal,
  doneTasks,
  unDoneTasks,
  allTasks,
}) {
  return (
    <div>
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
      <button onClick={() => openModal('Add')} value="Add">
        Add
      </button>
    </div>
  );
}
