export default function Modal({ labels, addTask, isEditing }) {
  let defaultTitle = '';
  let defaultDesc = '';
  let defaultTime = '';
  let defaultLabel = 'select a label';
  let defaultCheck = false;
  let wordBtn = 'Add';
  let onSubmitFunc = addTask;

  if (isEditing) {
    defaultTitle = '';
    defaultDesc = '';
    defaultTime = '';
    defaultLabel = 'select a label';
    defaultCheck = false;
    wordBtn = 'Add';
    onSubmitFunc = '';
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

        <label>
          <input type="checkbox" defaultChecked={defaultCheck} name="isDone" />
        </label>
        <button name="action" value={wordBtn} type="submit">
          {wordBtn}
        </button>
      </form>
    </div>
  );
}
