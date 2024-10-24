const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_NEWS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "SET_QUERY_SEARCH":
      return {
        ...state,
        query: action.payload,
      };

    case "SET_NEXT_PAGE": {
      let pageNum = state.page + 1;

      if (pageNum >= state.nbPages) {
        pageNum = 0;
      }

      return {
        ...state,
        page: pageNum,
      };
    }

    case "SET_PREV_PAGE": {
      const pageNum = state.page <= 0 ? 0 : state.page - 1;

      return {
        ...state,
        page: pageNum,
      };
    }

    case "SET_REMOVE_NEWS":
      return {
        ...state,
        hits: state.hits.filter(
          (currNews) => currNews.objectID !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default newsReducer;
