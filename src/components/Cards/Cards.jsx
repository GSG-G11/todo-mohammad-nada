import Card from './Card';
import './Cards.css';
import noTask from './noTask.svg';

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
        {tasks.length ? (
          tasks.map((task, index) => {
            return (
              <Card
                key={index}
                openModal={openModal}
                task={task}
                changeCheck={changeCheck}
                deleteTask={deleteTask}
              />
            );
          })
        ) : (
          <div className="no-task">
            <img src={noTask} alt="no task" className="no-task-img" />
            <p className="no-task-p">No Tasks</p>
            <p className="no-task-desc">Start now to add your tasks</p>
          </div>
        )}
      </ul>
    </section>
  );
}
