import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [mouseEnterFirstIcon, setMouseEnterFirstIcon] = useState(false);
  const [mouseEnterSecondIcon, setMouseEnterSecondIcon] = useState(false);

  let mouseEnterFuncFirstIcon = () => {
    setMouseEnterFirstIcon(true);
  };

  let mouseLeaveFuncFirstIcon = () => {
    setMouseEnterFirstIcon(false);
  };

  let mouseEnterSecondIconFunc = () => {
    setMouseEnterSecondIcon(true);
  };

  let mouseLeaveSecondIconFunc = () => {
    setMouseEnterSecondIcon(false);
  };

  return (
    <div className="2xl:container">
      <div className="bg-white dark:bg-slate-800 p-2 flex justify-between items-center shadow-sm fixed top-0 w-full z-10">
        <div className="w-2/4">
          <Link
            to="/"
            className="text-gray-700 font-mono text-2xl drop-shadow-md"
          >
            Peanut🥜City
          </Link>
        </div>
        <div className="w-2/4 flex justify-end items-center">
          <div className="relative">
            <NotificationsIcon
              className="w-6 h-6 text-gray-500 mx-2 cursor-pointer"
              onMouseEnter={mouseEnterFuncFirstIcon}
              onMouseLeave={mouseLeaveFuncFirstIcon}
            />
            <span
              className={`absolute ${
                mouseEnterFirstIcon ? "-top-3" : "-top-2"
              } right-0 text-xs bg-sky-500 text-white w-4 h-4 rounded-full flex items-center justify-center`}
            >
              2
            </span>
          </div>
          <div className="relative">
            <LanguageIcon
              className="w-6 h-6 text-gray-500 mx-2 cursor-pointer"
              onMouseEnter={mouseEnterSecondIconFunc}
              onMouseLeave={mouseLeaveSecondIconFunc}
            />
            <span
              className={`absolute ${
                mouseEnterSecondIcon ? "-top-3" : "-top-2"
              } right-0 text-xs bg-sky-500 text-white w-4 h-4 rounded-full flex items-center justify-center`}
            >
              4
            </span>
          </div>
          <ModeNightIcon className="w-6 h-6 text-gray-500 mx-2 cursor-pointer" />
          <Link to="/settings">
            <SettingsIcon className="w-6 h-6 text-gray-500 mx-2 cursor-pointer" />
          </Link>
          <img
            src="/images/person-120x120.jpg"
            alt="Prodile Dashboard"
            className="w-12 h-12 rounded-full mx-2 border-2 border-sky-500"
          />
        </div>
      </div>
    </div>
  );
}
