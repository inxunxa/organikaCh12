const todoReducer = (slice = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      var copy = [...slice];
      copy.push(action.payload);
      return copy;

    default:
      return slice;
  }
};

export default todoReducer;
