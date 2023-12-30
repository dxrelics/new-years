import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Bye 2023!",
    "2024 ALL IN PRABOWO",
    "@daffaarapp_",
    "Bayar hutang lo kntl",
    "kak? aku gpp",
    "atasan dikit sayang",
    "ngejar gak si?",
    "250k + kandang?",
    "kairi kumar",
    "cape jadi fans mu",
    "mls keluar banyak aerox",
    "cuma evossss",
    "anselma hamil",
    "bapak ku garena",
    "gausa sok keren, lu bukan gwe",
    "tahun baru, anak baru hehehe"
  ]);
  const particlesInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
            typeSpeed={65}
            deleteSpeed={50}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["Happy", "Fucking", "New", "Years", "2024"])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
