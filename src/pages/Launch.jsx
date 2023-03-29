import { useState, useEffect } from "react";
import background from "../assets/home-bg-2.png";
import rocket from "../assets/rocket.png";
import "animate.css";
import { useNavigate } from "react-router-dom";

function LaunchRocket() {
  let navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/galaxy");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style jsx>
        {`
          .rocket2 {
            animation: zoomOutUp;
            animation-duration: 2s;
          }
          .image-gif {
            margin-top: 50px;
            width: 100%;
            max-width: 200px;
            object-fit: contain;
            height: 150px;
          }
          .main-text {
            color: salmon;
          }
          .wrapper-text {
            max-width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
      <div
        style={{
          background: `url(${background})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100svh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={rocket}
          alt="rocket2"
          className="rocket2"
          style={{
            position: "absolute",
            bottom: "20px",
            // left: 120,
            left: 0,
            right: 0,
            height: "30%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </>
  );
}

export default LaunchRocket;
