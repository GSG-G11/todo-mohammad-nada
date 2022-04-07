import Card from './Card';
import './Cards.css';

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
    <section className="wrap-cards">
      <ul className="grid-cards">
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
    </section>
  );
}
