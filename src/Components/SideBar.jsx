import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import Firlog from "../assets/firlog.jpeg"
import SecLog from "../assets/seclog.jpeg"
import ThirLog from "../assets/thirlog.jpeg"
import FourLog from "../assets/fourlog.jpeg"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="container d-none d-lg-flex flex-column mt-4 ">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
        {/* <img src={locator} alt="locator" width="13px" height="18px" className='mx-2'/>  */}
        <MdOutlineLocationOn fontSize={"20px"} />
          <input
            type="text"
            placeholder="Enter Your Location"
            className="input-text border-0 outline-none"
          />
        </div>
        <button className="btn">
        <FaPencilAlt />
        </button>
      </div>
      <hr className="my-1" />
      <div className="d-flex align-items-center gap-2 mb-4">
      ⓘ
        <p className="location-info">
          Your location will help us serve better and extend a
          personalised experience.
        </p>
      </div>
      <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
        <FaRegThumbsUp />
        <span className="text-recommended">Recommended Groups</span>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src={Firlog}
              width="36"
              height="36"
            />
            <div className="text-wrapper">Leisure</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src={SecLog}
              width="36"
              height="36"
            />
            <div className="text-wrapper">Activism</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src={ThirLog}
              width="36"
              height="36"
            />
            <div className="text-wrapper">MBA</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              alt="Profile"
              src={FourLog}
              width="36"
              height="36"
            />
            <div className="text-wrapper">Philosophy</div>
          </div>
          <a className="btn follow rounded-5" href="/">
            Follow
          </a>
        </div>
      </div>
      <button className="btn text-end mt-5 text-primary text-capitalize">
        see more...
      </button>
    </div>
  </div>
  )
}

export default SideBar