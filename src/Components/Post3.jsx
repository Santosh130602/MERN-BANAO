import React from 'react'
import Third from "../assets/third.jpeg"
import { BsThreeDots } from "react-icons/bs";
import ThirdPerson from "../assets/thirdperson.jpeg"
import { IoLocationOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";


const Post3 = () => {
  return (
    <div
    className="d-flex flex-column border border-1 rounded-2"
    style={{
      maxWidth: "692px",
      borderColor: "rgb(224, 224, 224)",
      fill: "rgb(255, 255, 255)",
    }}
  >
    <img
      src={Third}
      alt="Nature"
      className="imagePost"
    />
    <div className="p-4">
      <h3 className="d-flex">🗓️ Meetup</h3>
      <div className="d-flex gap-6 justify-content-between">
        <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>
        <div className="btn align-self-start">
          <div className="dropdown">
            <div
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img
                src={dots}
                alt="more details"
                height="28px"
                width="28px"
              /> */}
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
        
         📅 Fri, 12 Oct, 2018
        </li>
        <li className="d-flex align-items-center gap-1">
        {/* <img src={locator} alt="locator" width="13px" height="18px" />  */}
        <IoLocationOutline/>
         Ahmedabad, India
        </li>
      </ul>
      <button
        className="custom-post-link btn mb-4 fw-semibold border border-secondary"
        style={{ color: "rgb(229, 97, 53)", width: "100%" }}
      >
        Visit WebSite
      </button>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            className="rounded-circle"
            alt="Profile"
            src={ThirdPerson}
            width="48"
            height="48"
          />
          <div className="d-flex flex-column">
            <div className="text-wrapper">Ronal Jones</div>
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
            className="btn d-flex align-items-center gap-2 "
            style={{ background: "rgb(237, 238, 240)" }}
          >
            {/* <img
              src={share}
              alt="share"
            /> */}
            <IoShareSocialOutline/>
            
          </button>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Post3

