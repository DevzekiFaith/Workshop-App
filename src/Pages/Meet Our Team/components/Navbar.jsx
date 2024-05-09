import React, { useState } from "react";
import navImg from "../assets/images/Group 45.png";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <img src={navImg} alt="" />
        <button
          onClick={() => {
            setDropDown(!dropdown);
          }}
          className="rounded-2 border-1 mt-4"
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div className="w-100 d-md-flex justify-content-end py-3 position-relative">
        {dropdown && (
          <ul className="d-flex flex-column gap-2 p-4 align-items-center w-25 rounded-2 position-absolute bg-elements">
            <div className="position-absolute btn2 p-2">
              <button
                className=" m-0 rounded-1 border-1"
                onClick={() => {
                  setDropDown(!true);
                }}
              >
                X
              </button>
            </div>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/about">about</NavLink>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/Method">Our Method</NavLink>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/team">Team</NavLink>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <NavLink to="/Portfolio">Stories</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
