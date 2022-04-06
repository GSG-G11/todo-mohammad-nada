import Card from './Card';

export default function Cards({ tasks, openModal, changeCheck }) {
  return (
    <ul>
      {tasks.reverse().map((task, index) => {
        return (
          <Card
            key={index}
            openModal={openModal}
            task={task}
            changeCheck={changeCheck}
          />
        );
      })}
    </ul>
  );
}
