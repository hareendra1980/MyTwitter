let nextPostId = 0;
export const addPost = text => ({
  type: "ADD_POST",
  id: nextPostId++,
  text,
  favor: false
});

export const deletePost = id => ({
  type: "DELETE_POST",
  deleteId: id
});

export const favorPost = (id, favor) => ({
  type: "FAVOR_POST",
  selectedId: id,
  favor: !favor
});
