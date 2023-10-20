import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {
 const { logout, user } = useContext(AuthContext);

 const navigate = useNavigate();

 const handleLogout = e => {
  e.preventDefault();
  logout();
  swal('Logged Out!', '', 'success');

  navigate('/');
 };

 const link = (
  <>
   <div className="lg:flex font-semibold md:text-lg">
    <li>
     <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/addProduct">Add Product</Link>
    </li>
    <li>
     <Link to="/myCart">My Cart</Link>
    </li>
   </div>
  </>
 );
 return (
  <div className="navbar bg-base-100 my-4">
   <div className="navbar-start">
    <div className="dropdown">
     <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
     </label>
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {link}
     </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
     <img src="https://i.ibb.co/XJZJnSR/hatchback.png" alt="" />
     AutoMotive
    </Link>
   </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 block">{link}</ul>
   </div>
   <div className="navbar-end">
    {user ? (
     <button className="btn btn-primary capitalize" onClick={handleLogout}>
      {user.displayName}

      <p className="text-red-400">logout</p>
     </button>
    ) : (
     <button className="btn btn-secondary">
      <Link to="/login">Login</Link>
     </button>
    )}
   </div>
  </div>
 );
};

export default Navbar;
