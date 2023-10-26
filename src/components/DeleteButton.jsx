/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item_delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
