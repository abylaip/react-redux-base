import React from "react";

const SingleComment = () => {
  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" />
      <input type="submit" hidden />
    </form>
  );
};
export default SingleComment;
