import Card from './Card';

export default function Cards({
  tasks,
  openModal,
  changeCheck,
  deleteTask,
  isFilterd,
  filteredTasks,
}) {

  if (isFilterd) {
    tasks = filteredTasks;
  }

  return (
    <ul>
      {tasks.reverse().map((task, index) => {
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
