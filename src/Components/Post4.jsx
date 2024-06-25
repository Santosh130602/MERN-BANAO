import React from 'react'
// import dots from "../assets/dots.jpg"
// import s from "../assets/s.jpg"
// import share from "../assets/share.jpg"
// import locator from "../assets/locator.png"

import { BsThreeDots } from "react-icons/bs";
import Forthperson from "../assets/forthperson.jpeg"
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";




const Post4 = () => {
  return (
    <div
    className="d-flex flex-column border border-1 rounded-2"
    style={{
      maxWidth: "692px",
      borderColor: "rgb(224, 224, 224)",
      fill: "rgb(255, 255, 255)",
    }}
  >
    <div className="p-4">
      <h3 className="d-flex">💼️ Job</h3>
      <div className="d-flex gap-6 justify-content-between">
        <h4>Software Developer</h4>
        <div className="btn align-self-start">
          <div className="dropdown">
            <div
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <BsThreeDots/>
            </div>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Edit
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Report
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  option 3
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="d-flex align-items-center gap-5 list-unstyled">
        <li className="d-flex align-items-center gap-1">
          
        👜 Innovaccer Analytics Private Ltd.
        </li>
        <li className="d-flex align-items-center gap-1">
        <IoLocationOutline/>
         Noida, India
        </li>
      </ul>
      <button
        className="custom-post-link btn mb-4 fw-semibold border border-secondary"
        style={{ color: "rgb(2, 184, 117)", width: "100%" }}
      >
        Apply on Timejobs
      </button>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            className="rounded-circle"
            alt="Profile"
            src={Forthperson}
            width="48"
            height="48"
          />
          <div className="d-flex flex-column">
            <div className="text-wrapper">Joseph Gray</div>
            <div className="d-lg-none">
             
              <span>👁️‍🗨️1.4k views</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-none d-lg-block pe-4">
          
            <span>👁️‍🗨️1.4k views</span>
          </div>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{ background: "rgb(237, 238, 240)" }}
          >
            <IoShareSocialOutline/>
            <span className="d-lg-none">Share</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post4

