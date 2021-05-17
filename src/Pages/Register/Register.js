import React from 'react' ;
import './Register.css';
function Register()
{
  


return (
  <div className="Register">
    <h1>Registration</h1>
    <div className="RegisterForm">
    <input
        type="text"
        placeholder="Email...."
        
        
      />
      <input
        type="text"
        placeholder="Username..."
        
        
      />
      <input
        type="password"
        placeholder="Set password..."
        
        
      />
      <button>Register</button>
    </div>
  </div>
);
}
export default Register;