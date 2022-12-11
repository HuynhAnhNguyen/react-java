import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nhom7Service from "../services/Nhom7Service";
import Category from "./Category";

const CategoryList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Nhom7Service.getCategories();
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCategory = (e, id) => {
    e.preventDefault();
    Nhom7Service.deleteCategory(id).then((res) => {
      if (categories) {
        setCategories((prevElement) => {
          return prevElement.filter((category) => category.id !== id);
        });
      }
    });
  };

  return (
    <section className="row">
      <div className="col-6 offset-3 mt-4">
        <div>
          <a
            onClick={() => navigate("/addCategory")}
            className="btn btn-primary"
            type="button"
          >
            Thêm mới nhãn hiệu
          </a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID nhãn hiệu</th>
              <th scope="col">Tên nhãn hiệu</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="">
              {categories.map((category) => (
                <Category
                  category={category}
                  deleteCategory={deleteCategory}
                  key={category.id}
                ></Category>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <br />
    </section>
  );
};

export default CategoryList;
