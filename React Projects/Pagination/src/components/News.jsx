import { useGlobalNewsContext } from "../context/newsContext";

const News = () => {
  const { isLoading, hits, handleRemoveNews } = useGlobalNewsContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (hits.length === 0) {
    return <h1>No news found.</h1>;
  }

  return (
    <section className="section-news">
      {hits.map((currNews) => {
        const { title, author, num_comments, url, objectID } = currNews;

        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <span onClick={() => handleRemoveNews(objectID)}>Remove</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default News;
