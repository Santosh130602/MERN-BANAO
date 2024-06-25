import React from 'react'
// import arrow from '../assets/arrow.jpg';
import { IoMdArrowDropdown } from "react-icons/io";
// import join from '../assets/join.jpg'
import { MdGroupAdd } from "react-icons/md";

const Nav = () => {
  return (
    <div className="container2">
    <div
      className="d-none d-lg-flex justify-content-between mx-auto align-items-center container"
      style={{
        maxWidth: "1040px",
        height: "68px",
        background: "rgb(255, 255, 255)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <ul className="nav my-2 nav-underline">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            All Posts (32)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Article
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Event
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Job
          </a>
        </li>
      </ul>
      <div className="d-flex my-2 align-items-center">
        <button
          className="btn"
          aria-label="write-post"
          style={{ background: "rgb(242, 242, 242)" }}
        >
          Write Post
          {/* <img
            src={arrow}
            alt="arrow down"
          /> */}
          <IoMdArrowDropdown />
        </button>
        <button
          className="btn btn-primary ms-2 gap-2 d-flex align-items-center"
          aria-label="Join group"
          style={{ border: "0.8px solid rgb(152, 152, 153)" }}
        >
          {/* <img
            src={join}
            alt="Join group"
          /> */}
          <MdGroupAdd />
          Join Group
        </button>
      </div>
    </div>
  </div>
  )
}

export default Nav