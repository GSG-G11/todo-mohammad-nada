export default function Modal({
  labels,
  addTask,
  isEditing,
  editTask,
  currentTask = {},
}) {
  let defaultTitle = '';
  let defaultDesc = '';
  let defaultTime = '';
  let defaultLabel = 'select a label';
  let wordBtn = 'Add';
  let onSubmitFunc = addTask;

  if (isEditing) {
    const { title, desc, label, time } = currentTask;
    defaultTitle = title;
    defaultDesc = desc;
    defaultTime = time;
    defaultLabel = label;
    wordBtn = 'Update';
    onSubmitFunc = editTask;
  }
  return (
    <div>
      <form onSubmit={onSubmitFunc}>
        <label>
          Title
          <input defaultValue={defaultTitle} name="title" required />
        </label>

        <label>
          Description
          <input defaultValue={defaultDesc} name="desc" required />
        </label>

        <label>
          Time
          <input defaultValue={defaultTime} name="time" type="datetime-local" />
        </label>

        <label>
          Label
          <select defaultValue={defaultLabel} name="label">
            <option key={0} value="select a label">
              Select a label
            </option>
            {labels.map((label) => {
              return (
                <option key={label} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
        </label>

        <button name="action" value={wordBtn} type="submit">
          {wordBtn}
        </button>
      </form>
    </div>
  );
}
