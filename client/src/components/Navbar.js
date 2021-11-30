import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Facts</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>
    </div>
  );
};
export default Navbar;
