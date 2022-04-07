import './Cards.css';

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
      <p className="desc">{desc}</p>
      <div className="wrap-label-time">
        <p className={label !== 'select a label' ? 'label-time' : ''}>
          {label !== 'select a label' && label}
        </p>
        <p className={time ? 'label-time' : ''}>{time && formatedTime} </p>
      </div>
      <div className="wrap-controls">
        <label>
          <input
            type="checkbox"
            checked={isDone}
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
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          onClick={() => {
            deleteTask(id);
          }}
          value="Delete"
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
