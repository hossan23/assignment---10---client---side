import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
 const { login, googleLogin } = useContext(AuthContext);
 const location = useLocation();
 const navigate = useNavigate();

 const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const myData = {
   email,
   password,
  };
  console.log(myData);
  login(email, password)
   .then(result => {
    console.log(result.user);
    navigate(location?.state ? location.state : '/');
   })
   .catch(error => {
    console.log(error.message);
   });
  form.reset();
 };

 const handleGoogle = e => {
  e.preventDefault();
  googleLogin().then(result => {
   console.log(result);
   navigate(location?.state ? location.state : '/');
  });
 };
 return (
  <div className="hero h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handleLogin} className="card-body">
      <div className="form-control">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="email" name="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Password</span>
       </label>
       <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       <label className="label">
        <a href="#" className="label-text-alt link link-hover">
         Forgot password?
        </a>
       </label>
      </div>
      <div className="form-control mt-6">
       <button className="btn btn-neutral capitalize">Login</button>
      </div>
      <Link className="text-center" to="/register">
       Do not have an account?
      </Link>
     </form>
     <div className="text-center">
      <button onClick={handleGoogle} className="btn btn-accent w-fit mb-6 capitalize">
       Google
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;
