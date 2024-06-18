import { useState } from "react";
import Switch from "@mui/material/Switch";
import "./Settings.css";

export default function Settings() {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebarStatus = (e) => {
    setShowSidebar(e.target.checked);
    if (e.target.checked) {
      console.log("ON");
    } else {
      console.log("OFF");
    }
  };

  return (
    <>
      <div className="bg-white p-2 ps-8 rounded shadow-lg hover:shadow-sm transition m-8 relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300 settings-box">
        <div className="grid grid-cols-2 grid-rows-1">
          <div>
            <span className="block my-4 text-neutral-700 text-xl font-bold font-sans">
              Basic Settings
            </span>
            <div className="grid grid-cols-1 grid-rows-3 gap-3">
              <div>
                <div className="text-gray-600 text-base font-medium font-sans flex gap-2 items-center">
                  Show Sidebar:
                  <Switch
                    checked={showSidebar}
                    onChange={handleSidebarStatus}
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </>
  );
}
