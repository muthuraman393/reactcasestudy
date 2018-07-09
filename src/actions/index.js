import fetch from 'cross-fetch';
let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const requestheroeslt = ()=>({
  type:"REQUESTHEROESLT"
});
export const receiveheroeslt = (json)=>({
  type:"RECEIVEHEROESLT",
  heroitems:json.data.children.map(child => child.data),
  heroeslastupdated : Date.now()
});


export const fetchPosts = (dispatch) => {
  dispatch(requestheroeslt());
  return fetch(`https://www.reddit.com/r/reactjs.json`)
    .then(response => response.json(),
    error => console.log('An error occurred.', error)
  )
    .then(json => dispatch(receiveheroeslt(json)));
};

const shouldFetchPosts = (state) => {
  const posts = state.herolistreducer;
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return true;
}

export const fetchPostsIfNeeded = (dispatch, getState) => {
  console.log('fetchPostsIfNeeded action function');
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
}
