import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
<FaPen />


const AfterHeader = () => {
  const [isJoined, setIsJoined] = useState(false);

  const handleButtonClick = () => {
    setIsJoined((prevIsJoined) => !prevIsJoined);
  };

  return (<>
    <div className="after-header ">
      <FaArrowLeft color="white" />
      <button
        onClick={handleButtonClick}
        className="after-button"
        >
        {isJoined ? "Leave Group" : "Join Group"}
      </button>
    </div>
    <div className="pen-dekho">
    <FaPen size={"20px"}/>
    </div>
          </>
  );
};

export default AfterHeader;
