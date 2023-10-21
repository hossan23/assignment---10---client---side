import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Register = () => {
 const { register } = useContext(AuthContext);
 const [regError, setRegError] = useState('');

 const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password.name);
  if (password.length < 6) {
   setRegError('');
   setRegError('Password Should be at least 6 character or longer ');
   return;
  } else if (!/[A-Z]/.test(password)) {
   setRegError('Password Should have at least one Uppercase character');
   return;
  } else if (!/[#?!@$%^&*-]/.test(password)) {
   setRegError('Password Should have at least one Special character');
   return;
  }
  register(email, password)
   .then(result => {
    swal('Account Created!', '', 'success');
    console.log(result.user);
   })
   .catch(error => {
    setRegError(error.message);
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
      <div className="text-center">{regError}</div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Register;
