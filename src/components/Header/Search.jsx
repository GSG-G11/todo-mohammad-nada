export default function Search({ searchByTitle }) {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        placeholder="Search by title of task.."
        type="search"
        onChange={({ target }) => searchByTitle(target.value)}
      />
    </div>
  );
}
