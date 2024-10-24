import { useGlobalNewsContext } from "../context/newsContext";

const Pagination = () => {
  const { page, nbPages, previousPage, nextPage } = useGlobalNewsContext();

  return (
    <section className="section-pagination">
      <button onClick={previousPage}>Prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={nextPage}>Next</button>
    </section>
  );
};

export default Pagination;
