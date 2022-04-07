import Card from './Card';

export default function Cards({
  tasks,
  openModal,
  changeCheck,
  deleteTask,
  isFiltered,
  filteredTasks,
}) {
  if (isFiltered) {
    tasks = filteredTasks;
  }

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <Card
            key={index}
            openModal={openModal}
            task={task}
            changeCheck={changeCheck}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
