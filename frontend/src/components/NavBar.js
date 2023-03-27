import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const navigate = useNavigate();
  const { setUser, APP_API_URL } = useContext(UserContext);

  const logOut = async () => {
    sessionStorage.removeItem("doMeToken");
    setUser(false);
    let payload = { type: "logout" };
    const response = await axios.post(`${APP_API_URL}/login`, payload);
    console.log(response.data.msg);
    navigate("/");
  };
  return (
    <Link className="app-name" to="/">
      <div className="flex justify-between items-center px-2 md:px-6 py-2 mb-10 bg-white shadow-sm w-full">
        <div className="text-slate-100 text-xl md:text-3xl font-thin bg-[#1f84d7] pt-[6px] pb-[7px] px-5 rounded-[20px]">
          Diurnal
        </div>
        <div>
          <Link to="/history">History</Link>
          <button className="log-out-btn" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NavBar;
