import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import StarfieldAnimation from "react-starfield-animation";
import background from "./assets/background-star.jpg";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [step, setStep] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (step == 1) {
      const timeout = setTimeout(() => {
        setShowImage(false);
      }, 2700);

      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <>
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
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: "stretch",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div>
          {step == 0 && (
            <div style={{ position: "relative", maxWidth: "100%" }}>
              <img
                src="/amplop.gif"
                alt="amplop"
                style={{ width: "60%" }}
                onClick={() => setStep(1)}
              />
              <h2>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Buka Dong!")

                      .start();
                  }}
                />
              </h2>
            </div>
          )}
          {step == 1 &&
            (showImage ? (
              <img
                src="/panda-nabrak.gif"
                alt="Panda Love Sticker - Panda Love Cute Stickers"
              />
            ) : (
              <h2>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Halo sayang..").start();
                  }}
                />
                <button onClick={() => setStep((prev) => prev - 1)}>
                  Back
                </button>
              </h2>
            ))}
        </div> */}
      </div>
    </>
  );
}

export default App;
