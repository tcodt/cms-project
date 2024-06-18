import { useState } from "react";
import { AddAPhoto } from "@mui/icons-material";
import { newMembers, userRows } from "../../Datas";
import "./newUser.css";

export default function NewUser() {
  const [userName, setUserName] = useState("Name");
  const [userRole, setUserRole] = useState("Role");
  const [userImage, setUserImage] = useState("/images/person-120x120.jpg");
  // const [updateUsers, setUpdateUsers] = useState(newMembers);

  //TODO: Sets the user profile
  let fileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUserImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  let userFormHandler = (e) => {
    e.preventDefault();

    let newUser = {
      id: newMembers.length + 1,
      img: userImage,
      username: userName,
      role: userRole,
    };
    newMembers.push(newUser);
    userRows.push(newUser);
    console.log(newMembers);
  };

  return (
    <div className="new-user-box">
      <div className="bg-white p-2 ps-8 flex-1 rounded shadow-lg hover:shadow-sm transition m-8 relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
        <div className="flex justify-between">
          <div className="flex gap-5 flex-col border-e-2 pe-8">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex flex-col gap-5 items-center">
                <img
                  src={userImage}
                  alt="Upload Image"
                  className="h-24 w-h-24 rounded-full border-2 border-sky-500 object-cover"
                />
                <div className="text-center">
                  <h4 className="text-stone-700 text-lg font-bold font-sans">
                    {userName}
                  </h4>
                  <span className="text-stone-500 text-base font-medium font-sans">
                    {userRole}
                  </span>
                </div>
                <div className="h-10 w-10 rounded-full relative overflow-hidden cursor-pointer">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={fileHandler}
                  />
                  <div className="h-full w-full flex items-center justify-center bg-sky-500 text-white">
                    <AddAPhoto className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <form onSubmit={userFormHandler} className="flex flex-col gap-3">
              <div className="gap-3 flex items-center">
                <label
                  htmlFor="userName"
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  // placeholder="Amir..."
                  autoComplete="off"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="gap-3 flex items-center">
                <label
                  htmlFor="userRole"
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  Role:
                </label>
                <input
                  type="text"
                  className="py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  // placeholder="Role"
                  autoComplete="off"
                  id="userRole"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                />
              </div>
              <button
                className="border-none outline-none py-1 px-2 bg-sky-600 hover:bg-sky-700 text-white rounded text-base font-sans font-medium"
                // onClick={}
              >
                Add User
              </button>
            </form>
          </div>
          <div>Other side</div>
        </div>
      </div>
    </div>
  );
}
