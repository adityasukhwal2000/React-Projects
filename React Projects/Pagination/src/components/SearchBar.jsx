import { useGlobalNewsContext } from "../context/newsContext";

const SearchBar = () => {
  const { query, handleQuerySearch } = useGlobalNewsContext();

  return (
    <section className="section-search">
      <h1>Search For Tech News</h1>
      <form>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here"
          autoComplete="off"
          value={query}
          onChange={handleQuerySearch}
        />
      </form>
    </section>
  );
};

export default SearchBar;
