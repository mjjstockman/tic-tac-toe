import React from 'react';

const Register = () => {
  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' required />
        </div>
        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm-password'
            name='confirm-password'
            required
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
