import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./Features.css";

export default function Features() {
  return (
    <div className="flex justify-evenly items-center mx-4 mt-8">
      <div className="bg-white p-8 shadow-lg rounded flex-1 mx-4 cursor-pointer hover:shadow-sm transition relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
        <span className="text-xl text-gray-700 font-sans mb-4 block">
          Revenue
        </span>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-medium text-gray-600 mx-2">
            $2,415
          </span>
          <span className="text-base font-medium text-gray-600 mx-2">
            -11.4 <ArrowDownwardIcon color="error" />
          </span>
        </div>
        <span className="text-base text-gray-500 font-sans">
          Compared to last month
        </span>
      </div>
      <div className="bg-white p-8 shadow-lg rounded flex-1 mx-4 cursor-pointer hover:shadow-sm transition relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
        <span className="text-xl text-gray-700 font-sans mb-4 block">
          Sales
        </span>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-medium text-gray-600 mx-2">
            $4,415
          </span>
          <span className="text-base font-medium text-gray-600 mx-2">
            -1.4 <ArrowDownwardIcon color="error" />
          </span>
        </div>
        <span className="text-base text-gray-500 font-sans">
          Compared to last month
        </span>
      </div>
      <div className="bg-white p-8 shadow-lg rounded flex-1 mx-4 cursor-pointer hover:shadow-sm transition relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
        <span className="text-xl text-gray-700 font-sans mb-4 block">Cost</span>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-medium text-gray-600 mx-2">
            $2,225
          </span>
          <span className="text-base font-medium text-gray-600 mx-2">
            +2.7 <ArrowUpwardIcon color="success" />
          </span>
        </div>
        <span className="text-base text-gray-500 font-sans">
          Compared to last month
        </span>
      </div>
    </div>
  );
}
