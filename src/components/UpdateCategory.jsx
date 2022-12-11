import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nhom7Service from "../services/Nhom7Service";

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: id,
    name: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Nhom7Service.getCategoryById(category.id);
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCategory = (e) => {
    e.preventDefault();
    console.log(category);
    Nhom7Service.updateCategory(category, id)
      .then((response) => {
        navigate("/categoryList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section class="row">
      <div class="col-6 offset-3 mt-4">
        <form id="addOrEdit">
          <h2>Cập nhật thông tin loại sản phẩm có ID = {category.id}</h2>
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
          <button
            type="reset"
            className="btn btn-warning"
            onClick={() => navigate("/categoryList")}
          >
            Hủy bỏ
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={updateCategory}
          >
            Cập nhật
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateCategory;
