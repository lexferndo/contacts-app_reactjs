/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FiDelete } from "react-icons/fi";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item_delete" onClick={() => onDelete(id)}>
      <FiDelete />
    </button>
  );
}

export default DeleteButton;
