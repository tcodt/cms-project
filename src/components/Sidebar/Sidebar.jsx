import "./Sidebar.css";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltOutlined from "@mui/icons-material/PersonAddAltOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutline from "@mui/icons-material/MailOutline";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Logout from "@mui/icons-material/Logout";
import ImportContacts from "@mui/icons-material/ImportContacts";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import SupportAgent from "@mui/icons-material/SupportAgent";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="bg-white px-4 pt-4 pb-8 fixed shadow-lg overflow-scroll w-60 z-20 h-full">
        <div className="relative"></div>
        <div className="mb-4">
          <h4 className="mb-2 text-gray-400 font-bold font-sans text-sm">
            Dashboard
          </h4>
          <ul className="flex flex-col">
            <Link to="/">
              <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
                <HomeOutlined color="primary" />
                &nbsp; Home
              </li>
            </Link>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <TimelineIcon color="primary" />
              &nbsp; Analytics
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <TrendingUpIcon color="primary" />
              &nbsp; Sales
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-gray-400 font-bold font-sans text-sm">
            Quick Menu
          </h4>
          <ul className="flex flex-col">
            <Link to="/users">
              <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
                <PeopleAltOutlined color="primary" />
                &nbsp; Users
              </li>
            </Link>
            <Link to="/newUser">
              <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
                <PersonAddAltOutlined color="primary" />
                &nbsp; NewUser
              </li>
            </Link>
            <Link to="/products">
              <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
                <StorefrontIcon color="primary" />
                &nbsp; Prosucts
              </li>
            </Link>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <AttachMoneyIcon color="primary" />
              &nbsp; Transactions
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <BarChartIcon color="primary" />
              &nbsp; Reports
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-gray-400 font-bold font-sans text-sm">
            Notifications
          </h4>
          <ul className="flex flex-col">
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <MailOutline color="primary" />
              &nbsp; Mail
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <FeedbackOutlined color="primary" />
              &nbsp; Feedback
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <ChatBubbleOutlineIcon color="primary" />
              &nbsp; Messages
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-gray-400 font-bold font-sans text-sm">
            Stuffs
          </h4>
          <ul className="flex flex-col">
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <ImportContacts color="primary" />
              &nbsp; About us
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <AlternateEmail color="primary" />
              &nbsp; Mail us
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <SupportAgent color="primary" />
              &nbsp; Support team
            </li>
            <li className="flex items-center mb-1 font-medium font-sans text-base rounded-2xl hover:bg-gray-100 active:bg-gray-200 p-2 cursor-pointer transition">
              <Logout color="primary" />
              &nbsp; Exit
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
