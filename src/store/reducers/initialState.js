//This is to ensure that we can see the entirety of the store

export default {
  authorReducer: {
    authors: [],
  },

  coursesReducer: {
    courses: [],
  },

  selectedCourseReducer: {
    course: undefined,
  },

  postsReducer: {
    posts: {},
  },

  selectedPostReducer: {
    post: undefined,
  },

  apiReducer: {
    apiCallsInProgress: 0,
  },
};
