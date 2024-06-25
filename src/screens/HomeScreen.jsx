import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Background from "../Components/Background";
import Nav from "../Components/Nav";
import Posts from "../Components/Posts";
import SideBar from "../Components/SideBar";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import SigLog from "../assets/siglog.png"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import AfterHeader from "../Components/AfterHeader";


const HomeScreen = () => {
  const [createFormVisible, setCreateFormVisible] = useState(false);
  const [hideForSignIn1Visible, setHideForSignIn1Visible] = useState(true);
  const [hideForSignIn2Visible, setHideForSignIn2Visible] = useState(true);
  const [updateText, setUpdateText] = useState("Create Account");
  const [update1Text, setUpdate1Text] = useState("Create Account");

  useEffect(() => {
    const handleShowClick = () => {
      setCreateFormVisible(true);
    };

    const handleCloseClick = () => {
      setCreateFormVisible(false);
      setHideForSignIn1Visible(true);
      setHideForSignIn2Visible(true);
      setUpdateText("Create Account");
      setUpdate1Text("Create Account");
    };

    const handleSignInClick = () => {
      setHideForSignIn1Visible((prev) => !prev);
      setHideForSignIn2Visible((prev) => !prev);
      setUpdateText((prevText) =>
        prevText === "Create Account" ? "Sign In" : "Create Account"
      );
      setUpdate1Text((prevText) =>
        prevText === "Create Account" ? "Sign In" : "Create Account"
      );
    };


    document.getElementById("show").addEventListener("click", handleShowClick);


    document
      .getElementById("close-form")
      .addEventListener("click", handleCloseClick);

    document
      .getElementById("sign-in")
      .addEventListener("click", handleSignInClick);

    // Cleanup function
    return () => {
      document
        .getElementById("show")
        .removeEventListener("click", handleShowClick);
      document
        .getElementById("close-form")
        .removeEventListener("click", handleCloseClick);
      document
        .getElementById("sign-in")
        .removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div>
      <Header />
      <AfterHeader/>

      <div
        id="create-form"
        style={{
          display: createFormVisible ? "block" : "none",
          zIndex: 2,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingTop: "40px",
        }}
      > 
      
      <IoMdCloseCircleOutline id="close-form" className="close-form-btn"/>
        <div
          className="create-account"
          style={{
            width: "70%",
            margin: "auto",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            position: "relative",
            zIndex: 3,
          }}
        >

          
          <div className="modal-content">

            <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
              Let's learn, share &amp; inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              
            </div>
            <hr className="hr-line" />
            
            <div className="px-4">
              <div className="d-flex justify-content-between  align-items-center mb-4">
                <h4 className="d-flex fw-bold" id="update">
                  {updateText}
                </h4>
                <button className="btn btn-siglig" fdprocessedid="n1c408" id="sign-in">
                  {updateText === "Create Account" ? (
                    <>
                      Already have an account?{" "}
                      <span className="text-primary">Sign In</span>
                    </>
                  ) : (
                    <>
                      Don't have an account yet?{" "}
                      <span className="text-primary">Create new for free!</span>
                    </>
                  )}

                </button>
              </div>
              <div className="container text-center">
                <div className="d-flex">
                  <div className="col">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="First Name"
                          style={{
                            display: hideForSignIn1Visible ? "block" : "none",
                          }}
                        />
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Last Name"
                          style={{
                            display: hideForSignIn2Visible ? "block" : "none",
                          }}
                        />
                      </div>
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                      <div className="d-flex align-items-center justify-content-between gap-2  position-relative">
                        <input
                          type="password"
                          className="form-control custom-input"
                          placeholder="Password"
                        />
                        <button
                          className="btn position-absolute"
                          style={{ right: "10px" }}
                        >
                          <MdOutlineRemoveRedEye/>
                        </button>
                      </div>
                      <input
                        type="password"
                        className="form-control mb-4 custom-input"
                        placeholder="Confirm password"
                      />
                      
                      
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                        id="update1"
                      >
                        
                        {update1Text}
                      </button>
                      <div className="d-flex flex-column gap-2">
                        <div className=" logisigi btn  d-flex align-items-center justify-content-center gap-2 button-signup-group border-1">
                          <FaFacebook fontSize={"20px"}/>
                          Sign Up with Facebook
                        </div>

                        <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                          
                          <FaGoogle fontSize={"19px"} />

                          Sign Up with Google
                        </button>
                        {/* <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                          Forgot Password?
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="right-sig col">
                    <div className="d-flex flex-column">
                      <img className="siglog-img"
                        src={SigLog}
                        alt="atg-illustration"
                      />
                      <p className="info-signup text-xs">
                        By signing up, you agree to our Terms &amp; conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Background />

      <Nav />

      <hr className="mx-auto mt-0" style={{ maxWidth: "1040px" }} />

      <div className="container3">
        <div
          className="mx-auto d-flex  justify-content-center"
          style={{ maxWidth: "1040px" }}
        >
          {/* <Posts /> */}
          <div className="container mx-5">
            <div className="row">
              <div className="col">
                <Posts />
              </div>
            </div>
          </div>

          <SideBar />


        </div>
      </div>
      <br />
      
    </div>
  );
};

export default HomeScreen;












// import React, { useState, useEffect } from "react";
// import Header from "../Components/Header";
// import Background from "../Components/Background";
// import Nav from "../Components/Nav";
// import Posts from "../Components/Posts";
// import SideBar from "../Components/SideBar";
// import { FaGoogle, FaFacebook } from "react-icons/fa";
// import SigLog from "../assets/siglog.png";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import "../App.css"

// const HomeScreen = () => {
//   const [createFormVisible, setCreateFormVisible] = useState(false);
//   const [hideForSignIn1Visible, setHideForSignIn1Visible] = useState(true);
//   const [hideForSignIn2Visible, setHideForSignIn2Visible] = useState(true);
//   const [updateText, setUpdateText] = useState("Create Account");
//   const [update1Text, setUpdate1Text] = useState("Create Account");
//   const [isNavSticky, setIsNavSticky] = useState(false); // State to track if Nav should be sticky

//   useEffect(() => {
//     const handleShowClick = () => {
//       setCreateFormVisible(true);
//     };

//     const handleCloseClick = () => {
//       setCreateFormVisible(false);
//       setHideForSignIn1Visible(true);
//       setHideForSignIn2Visible(true);
//       setUpdateText("Create Account");
//       setUpdate1Text("Create Account");
//     };

//     const handleSignInClick = () => {
//       setHideForSignIn1Visible((prev) => !prev);
//       setHideForSignIn2Visible((prev) => !prev);
//       setUpdateText((prevText) =>
//         prevText === "Create Account" ? "Sign In" : "Create Account"
//       );
//       setUpdate1Text((prevText) =>
//         prevText === "Create Account" ? "Sign In" : "Create Account"
//       );
//     };

//     const handleScroll = () => {
//       const position = window.pageYOffset;

//       // Check if the Nav should be sticky
//       if (position >= window.innerHeight) {
//         setIsNavSticky(true);
//       } else {
//         setIsNavSticky(false);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <Header />

//       <div
//         id="create-form"
//         style={{
//           display: createFormVisible ? "block" : "none",
//           zIndex: 2,
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           paddingTop: "40px",
//         }}
//       >
//         <IoMdCloseCircleOutline id="close-form" className="close-form-btn" />
//         <div
//           className="create-account"
//           style={{
//             width: "70%",
//             margin: "auto",
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//             position: "relative",
//             zIndex: 3,
//           }}
//         >
//           <div className="modal-content">
//             <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
//               Let's learn, share & inspire each other with our passion for
//               computer engineering. Sign up now 🤘🏼
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             </div>
//             <hr className="hr-line" />
//             <div className="px-4">
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h4 className="d-flex fw-bold" id="update">
//                   {updateText}
//                 </h4>
//                 <button className="btn" fdprocessedid="n1c408" id="sign-in">
//                   {updateText === "Create Account" ? (
//                     <>
//                       Already have an account?{" "}
//                       <span className="text-primary">Sign In</span>
//                     </>
//                   ) : (
//                     <>
//                       Don't have an account yet?{" "}
//                       <span className="text-primary">Create new for free!</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//               <div className="container text-center">
//                 <div className="d-flex">
//                   <div className="col">
//                     <div className="d-flex flex-column gap-2">
//                       <div className="d-flex">
//                         <input
//                           type="text"
//                           className="form-control custom-input"
//                           placeholder="First Name"
//                           style={{
//                             display: hideForSignIn1Visible ? "block" : "none",
//                           }}
//                         />
//                         <input
//                           type="text"
//                           className="form-control custom-input"
//                           placeholder="Last Name"
//                           style={{
//                             display: hideForSignIn2Visible ? "block" : "none",
//                           }}
//                         />
//                       </div>
//                       <input
//                         type="email"
//                         className="form-control custom-input"
//                         placeholder="Email"
//                       />
//                       <div className="d-flex align-items-center justify-content-between gap-2 position-relative">
//                         <input
//                           type="password"
//                           className="form-control custom-input"
//                           placeholder="Password"
//                         />
//                         <button
//                           className="btn position-absolute"
//                           style={{ right: "10px" }}
//                         >
//                           <MdOutlineRemoveRedEye />
//                         </button>
//                       </div>
//                       <input
//                         type="password"
//                         className="form-control mb-4 custom-input"
//                         placeholder="Confirm password"
//                       />
//                       <button
//                         className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
//                         data-bs-dismiss="modal"
//                         id="update1"
//                       >
//                         {update1Text}
//                       </button>
//                       <div className="d-flex flex-column gap-2">
//                         <div className="logisigi btn d-flex align-items-center justify-content-center gap-2 button-signup-group border-1">
//                           <FaFacebook fontSize={"20px"} />
//                           Sign Up with Facebook
//                         </div>

//                         <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
//                           <FaGoogle fontSize={"19px"} />
//                           Sign Up with Google
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col">
//                     <div className="d-flex flex-column">
//                       <img
//                         className="siglog-img"
//                         src={SigLog}
//                         alt="atg-illustration"
//                       />
//                       <p className="info-signup text-xs">
//                         By signing up, you agree to our Terms & conditions,
//                         Privacy policy
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Background />

//       {/* Apply sticky class to Nav component based on isNavSticky state */}
//       <Nav className={isNavSticky ? "sticky-nav" : ""} />

//       <hr className="mx-auto mt-0" style={{ maxWidth: "1040px" }} />

//       <div className="container3">
//         <div
//           className="mx-auto d-flex justify-content-center"
//           style={{ maxWidth: "1040px" }}
//         >
//           <div className="container mx-5">
//             <div className="row">
//               <div className="col">
//                 <Posts />
//               </div>
//             </div>
//           </div>

//           <SideBar />
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default HomeScreen;






// // import React, { useState, useEffect } from "react";
// // import Header from "../Components/Header";
// // import Background from "../Components/Background";
// // import Nav from "../Components/Nav";
// // import Posts from "../Components/Posts";
// // import SideBar from "../Components/SideBar";
// // import { FaGoogle, FaFacebook } from "react-icons/fa";
// // import SigLog from "../assets/siglog.png";
// // import { IoMdCloseCircleOutline } from "react-icons/io";
// // import { MdOutlineRemoveRedEye } from "react-icons/md";
// // import "../App.css"
// // import AfterHeader from "../Components/AfterHeader";

// // const HomeScreen = () => {
// //   const [createFormVisible, setCreateFormVisible] = useState(false);
// //   const [hideForSignIn1Visible, setHideForSignIn1Visible] = useState(true);
// //   const [hideForSignIn2Visible, setHideForSignIn2Visible] = useState(true);
// //   const [updateText, setUpdateText] = useState("Create Account");
// //   const [update1Text, setUpdate1Text] = useState("Create Account");
// //   const [isSticky, setIsSticky] = useState(false); // State to track if Nav should be sticky

// //   useEffect(() => {
// //     const handleShowClick = () => {
// //       setCreateFormVisible(true);
// //     };

// //     const handleCloseClick = () => {
// //       setCreateFormVisible(false);
// //       setHideForSignIn1Visible(true);
// //       setHideForSignIn2Visible(true);
// //       setUpdateText("Create Account");
// //       setUpdate1Text("Create Account");
// //     };

// //     const handleSignInClick = () => {
// //       setHideForSignIn1Visible((prev) => !prev);
// //       setHideForSignIn2Visible((prev) => !prev);
// //       setUpdateText((prevText) =>
// //         prevText === "Create Account" ? "Sign In" : "Create Account"
// //       );
// //       setUpdate1Text((prevText) =>
// //         prevText === "Create Account" ? "Sign In" : "Create Account"
// //       );
// //     };

// //     const handleScroll = () => {
// //       const position = window.pageYOffset;

// //       // Check if the scroll position is at the top of the window
// //       setIsSticky(position === window.top);
// //     };

// //     // Add scroll event listener
// //     window.addEventListener("scroll", handleScroll);

// //     // Cleanup function
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <Header/>
// //       <AfterHeader/>

// //       <div
// //         id="create-form"
// //         style={{
// //           display: createFormVisible ? "block" : "none",
// //           zIndex: 2,
// //           position: "fixed",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "100%",
// //           backgroundColor: "rgba(0, 0, 0, 0.5)",
// //           paddingTop: "40px",
// //         }}
// //       >
// //         <IoMdCloseCircleOutline id="close-form" className="close-form-btn" />
// //         <div
// //           className="create-account"
// //           style={{
// //             width: "70%",
// //             margin: "auto",
// //             backgroundColor: "white",
// //             padding: "20px",
// //             borderRadius: "10px",
// //             position: "relative",
// //             zIndex: 3,
// //           }}
// //         >
// //           <div className="modal-content">
// //             <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
// //               Let's learn, share & inspire each other with our passion for
// //               computer engineering. Sign up now 🤘🏼
// //               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// //             </div>
// //             <hr className="hr-line" />
// //             <div className="px-4">
// //               <div className="d-flex justify-content-between align-items-center mb-4">
// //                 <h4 className="d-flex fw-bold" id="update">
// //                   {updateText}
// //                 </h4>
// //                 <button className="btn" fdprocessedid="n1c408" id="sign-in">
// //                   {updateText === "Create Account" ? (
// //                     <>
// //                       Already have an account?{" "}
// //                       <span className="text-primary">Sign In</span>
// //                     </>
// //                   ) : (
// //                     <>
// //                       Don't have an account yet?{" "}
// //                       <span className="text-primary">Create new for free!</span>
// //                     </>
// //                   )}
// //                 </button>
// //               </div>
// //               <div className="container text-center">
// //                 <div className="d-flex">
// //                   <div className="col">
// //                     <div className="d-flex flex-column gap-2">
// //                       <div className="d-flex">
// //                         <input
// //                           type="text"
// //                           className="form-control custom-input"
// //                           placeholder="First Name"
// //                           style={{
// //                             display: hideForSignIn1Visible ? "block" : "none",
// //                           }}
// //                         />
// //                         <input
// //                           type="text"
// //                           className="form-control custom-input"
// //                           placeholder="Last Name"
// //                           style={{
// //                             display: hideForSignIn2Visible ? "block" : "none",
// //                           }}
// //                         />
// //                       </div>
// //                       <input
// //                         type="email"
// //                         className="form-control custom-input"
// //                         placeholder="Email"
// //                       />
// //                       <div className="d-flex align-items-center justify-content-between gap-2 position-relative">
// //                         <input
// //                           type="password"
// //                           className="form-control custom-input"
// //                           placeholder="Password"
// //                         />
// //                         <button
// //                           className="btn position-absolute"
// //                           style={{ right: "10px" }}
// //                         >
// //                           <MdOutlineRemoveRedEye />
// //                         </button>
// //                       </div>
// //                       <input
// //                         type="password"
// //                         className="form-control mb-4 custom-input"
// //                         placeholder="Confirm password"
// //                       />
// //                       <button
// //                         className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
// //                         data-bs-dismiss="modal"
// //                         id="update1"
// //                       >
// //                         {update1Text}
// //                       </button>
// //                       <div className="d-flex flex-column gap-2">
// //                         <div className="logisigi btn d-flex align-items-center justify-content-center gap-2 button-signup-group border-1">
// //                           <FaFacebook fontSize={"20px"} />
// //                           Sign Up with Facebook
// //                         </div>

// //                         <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
// //                           <FaGoogle fontSize={"19px"} />
// //                           Sign Up with Google
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="col">
// //                     <div className="d-flex flex-column">
// //                       <img
// //                         className="siglog-img"
// //                         src={SigLog}
// //                         alt="atg-illustration"
// //                       />
// //                       <p className="info-signup text-xs">
// //                         By signing up, you agree to our Terms & conditions,
// //                         Privacy policy
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Background />

// //       <Nav isSticky={isSticky} />

// //       <hr className="mx-auto mt-0" style={{ maxWidth: "1040px" }} />

// //       <div className="container3">
// //         <div
// //           className="mx-auto d-flex justify-content-center"
// //           style={{ maxWidth: "1040px" }}
// //         >
// //           <div className="container mx-5">
// //             <div className="row">
// //               <div className="col">
// //                 <Posts />
// //               </div>
// //             </div>
// //           </div>

// //           <SideBar />
// //         </div>
// //       </div>
// //       <br />
// //     </div>
// //   );
// // };

// // export default HomeScreen;
