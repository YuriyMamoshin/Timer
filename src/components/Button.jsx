import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";

export default function Button({ callback, name }) {
  let styles =
    "w-40 h-9 rounded-lg text-white text-[15px] mt-4 first-of-type:mt-[39px] flex justify-center items-center";
  let iconSource = "";

  switch (name) {
    case "Play":
      styles += " bg-[#00AE1C]";
      iconSource = playIcon;
      break;
    case "Pause":
      styles += " bg-[#099AC8]";
      iconSource = pauseIcon;
      break;

    case "Reset":
      styles += " bg-[#EF9919]";
  }

  return (
    <button onClick={() => callback()} className={styles}>
      <img src={iconSource} className="mr-2" /> {name}
    </button>
  );
}
