import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start text-white">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Nhóm 7</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <p>Trần Lê Nguyên Khánh</p>
              </li>
              <li>
                <p>Nguyễn Huỳnh Anh</p>
              </li>
              <li>
                <p>Nguyễn Minh Hảo</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
