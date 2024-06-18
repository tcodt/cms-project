import { newMembers } from "../../Datas";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="bg-white flex-1 p-2 rounded shadow-lg hover:shadow-sm transition m-8 relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
      <span className="text-lg font-bold text-gray-500 mb-3 block">
        New Users
      </span>
      <hr />
      <ul className="flex flex-col items-center mt-4">
        {newMembers.map((member) => (
          <li
            className="px-2 py-1 mb-3 border-s-2 border-sky-500 rounded w-full flex items-center justify-between hover:bg-gray-100 transition"
            key={member.id}
          >
            <div className="flex">
              <img
                src={member.img}
                alt="Member Profile"
                className="w-12 h-12 rounded-full mx-2 border-2 border-sky-500"
              />
              <div className="flex flex-col justify-center items-start ms-2">
                <span className="text-base font-sans text-gray-700 font-semibold">
                  {member.username}
                </span>
                <span className="text-base font-sm text-gray-500 font-normal">
                  {member.role}
                </span>
              </div>
            </div>
            <button className="bg-gray-300 hover:bg-gray-400 transition p-1 rounded-xl">
              <VisibilityIcon className="text-xl" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
