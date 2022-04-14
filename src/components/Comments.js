import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import SingleComment from "./SingleComment";
import { commentCreate } from "../redux/actions";

const Comments = () => {
  const dispatch = useDispatch();
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
};
export default Comments;
