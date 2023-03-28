import { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { setUser, setTasks, APP_API_URL } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Hi! from loading");
    sessionStorage.removeItem("doMeToken");
    setUser(false);
  }, [setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName.length === 0) {
      alert("Must provide username");
      return;
    }
    if (pass.length === 0) {
      alert("Must provide password");
      return;
    }
    // console.log(userName)
    let payload = { type: "login", username: userName, password: pass };
    let response = await axios.post(`${APP_API_URL}/login`, payload);
    // console.log('response')
    // console.log(response.data.msg)
    // console.log(response.data.id)
    if (response.data.msg === "invalid") {
      alert("Invalid username and/or password");
      return;
    }
    setUser(true);
    sessionStorage.setItem("doMeToken", response.data.msg);
    sessionStorage.setItem("id", response.data.id);
    let head = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("doMeToken")}`,
      },
    };
    payload = { type: "load", userId: sessionStorage.getItem("id") };
    response = await axios.post(`${APP_API_URL}/tasks`, payload, head);
    setTasks(response.data.tasks);
    navigate("/");
  };

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 flex flex-col justify-center bg-black/10">
      <div className="fixed flex justify-center top-0 left-0 right-0 text-4xl md:text-5xl my-6 text-[#0062A8]">
        <Link className="" to="/">
          <div>Diurnal</div>
        </Link>
      </div>
      <div className="flex justify-center h-[80%] md:h-[70%]">
        <div className="relative flex flex-col items-center justify-around h-[100%] cool-green rounded-[40px] md:w-[28.5%] w-[90%]">
          <h1 className="absolute top-[10%] text-3xl text-white">Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-entry off-black-font">
              <label htmlFor="username">username</label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="username"
                id="userName"
                name="userName"
              />
            </div>
            <div className="form-entry off-black-font">
              <label htmlFor="password">password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
            </div>
            <button type="submit">Log In</button>
          </form>
          <footer className="login-footer">
            <p>
              Don't have an account? Register{" "}
              <Link to="/register" className="underline">
                here
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
