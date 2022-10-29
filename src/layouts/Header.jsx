import React from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "./../routes/About";

const Header = () => {
  const navigate = useNavigate();
  const isLogined = false;
  return (
    <header>
      <div className="flex justify-between navbar bg-base-100 border-b shadow-md ">
        {/* 메인 로고 Home으로 가는 로고 시작*/}
        <div>
          <div
            className="flex btn btn-ghost normal-case text-xl hover:bg-transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fi fi-brands-youtube text-red-500 mt-2"></i>
            <div className="ml-2">MyTube</div>
          </div>
        </div>
        {/* 메인 로고 Home으로 가는 로고 끝*/}
        {/* 검색창 시작*/}
        <div className="flex-1 justify-end gap-2 mal-auto">
          <div className="form-control mx-auto w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-gray-400"
            />
          </div>
        </div>
        {/* 검색창 끝*/}
        {/* 홈 버튼 로그아웃 버튼 등등 시작*/}
        <div>
          {isLogined ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-24 rounded-full">
                  <img
                    src="https://placeimg.com/192/192/people"
                    alt="profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">
                    <div>Homepage</div>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <div>about</div>
                  </Link>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-4">
              <div>
                <Link to="/Signup">회원가입</Link>
              </div>
              <div className="mr-2">
                <Link to="/Login">로그인</Link>
              </div>
            </div>
          )}
        </div>
        {/* 홈 버튼 로그아웃 버튼 등등 끝*/}
      </div>
    </header>
  );
};

export default Header;
