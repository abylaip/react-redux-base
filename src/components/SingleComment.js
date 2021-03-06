import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "../redux/actions";

const SingleComment = ({ data }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setComment(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(comment, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={comment} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};
export default SingleComment;
