export default function Search({ searchByTitle }) {
  return (
    <div>
      <input
        type="search"
        onChange={({ target }) => searchByTitle(target.value)}
      />
    </div>
  );
}
