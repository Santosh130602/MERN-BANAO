
import React from 'react'
import Logo from '../assets/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import "../App.css"

const Header = () => {
  return (
    <div className="header-container container d-lg-flex align-items-center justify-content-between p-3">
      <div className="header-img m-1" style={{ zIndex: 1 }}>
        <img
          src={Logo}
          width="250.57px"
          height="35px"
          alt="Logo"
        />
      </div>
      <div className="header-form flex-grow-1">
          <form
            className="d-flex "
          >
            <button className="custom-search border-0 " type="submit">
            <IoMdSearch fontSize={"22px"} />
            </button>
            <input
              className="input-form-search border-0 custom-input-search flex-grow-1"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
        </div>
      <div className="header-button">
        <button
          id="show"
          className="btn custom-btn-create p-0 m-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          fdprocessedid="hd62ne"
        >
          create Account.{" "}
          <span className="text-primary fw-bold">
            It's Free!
            {/* <img
                className="rounded-circle"
                alt="Profile"
                src={arrow}
              /> */}
            <IoMdArrowDropdown />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Header
