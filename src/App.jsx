import { useState, useEffect } from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import background from "./assets/home-bg-2.png";
import rocket from "./assets/rocket.png";
import panda1 from "./assets/panda1.gif";
import panda2 from "./assets/panda2.gif";
import panda3 from "./assets/panda3.gif";
import panda4 from "./assets/panda4.gif";
import panda5 from "./assets/panda5.gif";
import panda6 from "./assets/panda6.gif";
import panda7 from "./assets/panda7.gif";
import panda8 from "./assets/panda8.gif";
import panda10 from "./assets/panda10.gif";
import Galaxy from "./pages/Galaxy";
import sound from "./assets/backsound.mp3";
import "animate.css";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [answer, setAnswer] = useState(null);
  const [rocketClass, setRocketClass] = useState("");

  // useEffect(() => {
  //   if (step == 1) {
  //     const timeout = setTimeout(() => {
  //       setShowImage(false);
  //     }, 2700);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [step]);

  function playSound() {
    new Audio(sound).play();
    setStep(1);
  }

  const handleRocket = () => {
    // step == 10 ? (window.location.href = "/launch") : console.log("hehe");
    step == 10 ? navigate("/launch") : console.log("lolo");
  };

  return (
    <>
      <style jsx>
        {`
          .rocket2 {
            animation: zoominUp; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s; /* don't forget to set a duration! */
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
          color: "white",
        }}
      >
        <audio
          src="https://feeldreams.github.io/audio/seandainya.mp3"
          id="linkmp3"
          class="sembunyi"
        ></audio>

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
            zIndex: 10,
          }}
          onClick={() => handleRocket()}
        />

        <div style={{ width: "100%" }}>
          {step == 0 && (
            <div>
              <button
                class="animate__animated animate__bounce"
                style={{
                  backgroundColor: "salmon",
                  position: "absolute",
                  maxWidth: "fit-content",
                  top: "40%",
                  left: 0,
                  right: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "40px",
                  color: "white",
                }}
                onClick={playSound}
              >
                Start
              </button>
            </div>
          )}
          {step == 1 && (
            <div className="wrapper-text">
              <img src={panda1} alt="panda1" className="image-gif" />

              <h2>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter.typeString("Halo sayang..").start();
                  // }}
                  className="main-text"
                  options={{
                    strings: "halo sayang..",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h2>
            </div>
          )}
          {step == 2 && (
            <div className="wrapper-text">
              <img src={panda2} alt="panda2" className="image-gif" />

              <h2>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter.typeString("Halo sayang..").start();
                  // }}
                  className="main-text"
                  options={{
                    strings: "jangan marah-marah terus doong..",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h2>
            </div>
          )}
          {step == 3 && (
            <div className="wrapper-text">
              <img src={panda3} alt="panda3" className="image-gif" />

              <h2>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter.typeString("Halo sayang..").start();
                  // }}
                  className="main-text"
                  options={{
                    strings: "nanti tua-nya jelek. heheee",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h2>
            </div>
          )}
          {step == 4 && (
            <div className="wrapper-text">
              <img src={panda4} alt="panda4" className="image-gif" />

              <h2>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter.typeString("Halo sayang..").start();
                  // }}
                  className="main-text"
                  options={{
                    strings: "maaf yaa bikin kamu kesel terus",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h2>
            </div>
          )}
          {step == 5 && (
            <div className="wrapper-text">
              <img src={panda5} alt="panda5" className="image-gif" />

              <h2>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter.typeString("Halo sayang..").start();
                  // }}
                  className="main-text"
                  options={{
                    strings: "ninggalin kamu terus",
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h2>
            </div>
          )}
          {step == 6 && (
            <div className="wrapper-text">
              <img src={panda6} alt="panda6" className="image-gif" />
            </div>
          )}
          {step == 7 && (
            <div className="wrapper-text">
              <img src={panda7} alt="panda7" className="image-gif" />
              <h2>
                biar kamu seneng, aku mau ngajak kamu jalan-jalan ke luar
                angkasa!
              </h2>
            </div>
          )}
          {step == 8 && (
            <div className="wrapper-text">
              <img src={panda8} alt="panda8" className="image-gif" />
              <h2>seneng ga?</h2>
            </div>
          )}
          {step == 8 && (
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <button
                style={{
                  fontSize: 12,
                  backgroundColor: "salmon",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setStep((prev) => prev + 1);
                  setAnswer(true);
                }}
              >
                seneng!
              </button>
              <button
                style={{
                  fontSize: 12,
                  backgroundColor: "salmon",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setStep((prev) => prev + 1);
                  setAnswer(false);
                }}
              >
                ga!
              </button>
            </div>
          )}
          {step == 9 && (
            <div className="wrapper-text">
              <img src={panda8} alt="panda8" className="image-gif" />
              <h2>{answer == false ? "bodoamat :p" : "mantap!"}</h2>
            </div>
          )}

          {step == 10 && (
            <div className="wrapper-text">
              <img src={panda10} alt="panda10" className="image-gif" />
              <h2>Ayo kita berangkat!</h2>
              <h2>klik roketnya!</h2>
            </div>
          )}

          {step !== 0 && step !== 8 && step !== 10 && (
            <div
              style={{
                fontSize: 12,
                color: "salmon",
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => setStep((prev) => prev + 1)}
            >
              Next
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
