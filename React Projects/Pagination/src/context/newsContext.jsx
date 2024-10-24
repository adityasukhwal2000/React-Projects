import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/newsReducer";

//? warehouse
const NewsContext = createContext();

const apiURL = "http://hn.algolia.com/api/v1/search";

const initialState = {
  isLoading: true,
  query: "HTML",
  hits: [],
  page: 0,
  nbPages: 0,
};

//? provider
const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async (url) => {
    //* Before getting api data will get null. So, loading effect
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "SET_NEWS",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //? Search Bar
  const handleQuerySearch = (e) => {
    const searchValue = e.target.value;
    dispatch({ type: "SET_QUERY_SEARCH", payload: searchValue });
  };

  //? Pagination
  const previousPage = () => {
    dispatch({ type: "SET_PREV_PAGE" });
  };

  const nextPage = () => {
    dispatch({ type: "SET_NEXT_PAGE" });
  };

  //? Remove Functionality
  const handleRemoveNews = (currId) => {
    dispatch({
      type: "SET_REMOVE_NEWS",
      payload: currId,
    });
  };

  //? Will load every time when user 'search query' or do 'pagination'
  useEffect(() => {
    fetchNews(`${apiURL}?query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <NewsContext.Provider
      value={{
        ...state,
        handleRemoveNews,
        handleQuerySearch,
        previousPage,
        nextPage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

//? consumer
const useGlobalNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContext, NewsProvider, useGlobalNewsContext };
