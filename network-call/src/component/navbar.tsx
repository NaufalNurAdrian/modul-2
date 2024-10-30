import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-teal-300 text-white flex text-center items-center justify-center h-[50px] gap-10">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/register">register</Link>
      </div>
    </div>
  );
}
export default Navbar