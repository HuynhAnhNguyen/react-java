import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nhom7Service from "../services/Nhom7Service";

const AddCategory = () => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  const saveCategory = (e) => {
    e.preventDefault();
    Nhom7Service.saveCategory(category)
      .then((response) => {
        console.log(response);
        navigate("/categoryList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCategory({
      id: "",
      name: "",
    });
  };

  return (
    <>
      <section class="row">
        <div class="col-6 offset-3 mt-4">
          <form id="addOrEdit">
            <h2>Thêm loại sản phẩm mới</h2>
            <div class="mb-3">
              <label for="name" class="form-label">
                Tên nhãn hiệu
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                value={category.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <a
              onClick={() => navigate("/")}
              type="button"
              className="btn btn-primary"
            >
              Danh sách
            </a>
            <button type="reset" className="btn btn-warning" onClick={reset}>
              Làm mới
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={saveCategory}
            >
              Thêm mới
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddCategory;
