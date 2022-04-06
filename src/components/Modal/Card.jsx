import '../../App.css';
export default function Card({
  task: { id, title, desc, label, time, isDone },
  openModal,
  changeCheck,
}) {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{desc}</p>
      <p>{label !== 'select a label' && label}</p>
      <p>{time}</p>
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
    </div>
  );
}
