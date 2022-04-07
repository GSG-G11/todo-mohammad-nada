import '../../App.css';
export default function Card({
  task: { id, title, desc, label, time, isDone },
  openModal,
  changeCheck,
  deleteTask,
}) {
  let formatedTime = '';
  // Format Date
  const formatDate = (taskDate) => {
    let d = new Date(taskDate),
      mo = new Intl.DateTimeFormat('en', {
        month: 'short',
      }).format(d),
      da = new Intl.DateTimeFormat('en', {
        day: '2-digit',
      }).format(d);
    let getDateFormat = `${da}-${mo}`;
    return getDateFormat;
  };

  // Format Time
  const formatTime = (taskTime) => {
    let timeformat = taskTime.split(':'),
      hours = timeformat[0],
      minutes = timeformat[1],
      ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  // Format Date and Time
  if (time) {
    formatedTime = `${formatDate(time.split('T')[0])}  ${formatTime(
      time.split('T')[1]
    )}`;
  }

  return (
    <div className="card">
      <p>{title}</p>
      <p>{desc}</p>
      <p>{label !== 'select a label' && label}</p>
      <p>{time && formatedTime} </p>
      <label>
        <input
          type="checkbox"
          defaultChecked={isDone}
          name="isDone"
          onChange={() => {
            changeCheck(id);
          }}
        />
      </label>
      <button
        onClick={() => {
          openModal('Update', id);
        }}
        value="Update"
      >
        Update
      </button>
      <button
        onClick={() => {
          deleteTask(id);
        }}
        value="Delete"
      >
        Delete
      </button>
    </div>
  );
}
