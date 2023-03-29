import { useState, useEffect } from "react";

import Typewriter from "typewriter-effect";
import StarfieldAnimation from "react-starfield-animation";
import background from "../assets/background-star.jpg";

function Galaxy() {
  const [step, setStep] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [content, setContent] = useState("Kita sudah sampai di ruang angkasa!");

  const handleNext = () => {
    console.log(step);
    switch (step) {
      case 0:
        setContent("bagus kan?");
        setStep((prev) => prev + 1);
        break;
      case 1:
        setContent("bintangnya banyak");
        setStep((prev) => prev + 1);
        break;
      case 2:
        setContent("dan indah..");
        setStep((prev) => prev + 1);
        break;
      case 3:
        setContent("seperti kamu.. xixixi 😝");
        setStep((prev) => prev + 1);
        break;
      case 4:
        setContent("jangan kebanyakan ngambek ya!");
        setStep((prev) => prev + 1);
        break;
      case 5:
        setContent("selamat berbuka puasa!");
        setStep((prev) => prev + 1);
        break;
      case 6:
        setContent("Love You! ❤️❤️❤️");
        setStep((prev) => prev + 1);
        break;
      default:
        window.open(
          "https://wa.me/085156552582?text=maaf%20ya%20sayang.%20i%20love%20you."
        );
        break;
    }
  };

  return (
    <>
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: "stretch",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div>
          <h2>{content}</h2>

          {/* ///////////////////////// */}
          <div
            style={{
              fontSize: 12,
              color: "salmon",
              fontWeight: 700,
              cursor: "pointer",
              position: "relative",
              zIndex: 99999,
            }}
            onClick={() => handleNext()}
          >
            Next
          </div>
        </div>
        <StarfieldAnimation
          numParticles={400}
          style={{
            position: "absolute",
            zIndex: 1001,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </div>
    </>
  );
}

export default Galaxy;
