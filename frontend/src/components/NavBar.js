import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link className="app-name" to="/">
      <div className="text-[#4689CC] text-3xl font-thin px-6 py-3 bg-white shadow-sm">
        Diurnal
      </div>
    </Link>
  );
};

export default NavBar;
