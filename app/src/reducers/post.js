const posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          favor: false
        }
      ];
    case "DELETE_POST":
      return state.filter(post => {
        return post.id !== action.deleteId;
      });

    case "FAVOR_POST":
      let changedState = JSON.parse(JSON.stringify(state));
      changedState[action.selectedId].favor = action.favor;
      return changedState;

    default:
      return state;
  }
};

export default posts;
