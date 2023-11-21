/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item_delete" onClick={() => onDelete(id)}>
      <FiDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
