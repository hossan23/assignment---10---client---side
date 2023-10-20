import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Register = () => {
 const { register } = useContext(AuthContext);

 const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password.name);
  register(email, password)
   .then(result => {
    console.log(result.user);
   })
   .catch(error => {
    console.log(error);
   });
  form.reset();
 };

 return (
  <div className="hero h-screen  bg-base-200">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h1 className="text-center font-medium text-lg pt-4">Register</h1>
     <form onSubmit={handleRegister} className="card-body">
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
       <label className="label"></label>
      </div>
      <div className="form-control ">
       <button className="btn btn-primary capitalize">Register</button>
      </div>
      <Link className="text-center" to="/login">
       Already have an account?
      </Link>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Register;
