import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";

const Category = ({ category, deleteCategory }) => {
  const navigate = useNavigate();
  const editCategory = (e, id) => {
    e.preventDefault();
    navigate(`/editCategory/${id}`);
  };

  return (
    <tr key={category.id}>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>
        <a
          onClick={(e, id) => editCategory(e, category.id)}
          className="btn btn-outline-warning"
        >
          <FontAwesomeIcon icon={faWrench} />
        </a>
        <a
          onClick={(e, id) => deleteCategory(e, category.id)}
          className="btn btn-outline-danger"
        >
          <FontAwesomeIcon icon={faTrash} />
        </a>
      </td>
    </tr>
  );
};

export default Category;
