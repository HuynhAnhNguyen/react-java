import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UpdateCategory from "./components/UpdateCategory";

// Nhúng thư viện của bạn vào dự án

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<CategoryList />} />
          <Route path="/" element={<CategoryList />}></Route>
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/editCategory/:id" element={<UpdateCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
