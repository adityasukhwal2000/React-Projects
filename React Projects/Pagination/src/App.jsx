import News from "./components/News";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <section className="main-container">
      <SearchBar />
      <Pagination />
      <News />
    </section>
  );
};

export default App;
