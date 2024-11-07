import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import googleImages from '../../images/google.png'
import githubImages from '../../images/github.png'

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () =>
{

  let navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || '/products';

  const { user, google, github, login, error } = useAuth();

  user.email && navigate( from, { replace: true } );

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>
  {
    login( data.email, data.password );
  }


  return (
    <section className='bg-brand bg-brand-container'>
      <Navbar />

      <div className="container">
        <h1 className='fs-4 text-center mt-5'>Sign In</h1>

        <div className='col-md-6 col-sm-8 mx-auto d-block'>

          <form onSubmit={ handleSubmit( onSubmit ) }>

            <div className="form-group mt-2">
              <label htmlFor="email" className='p-1'>Email</label>
              <input type="email" className="form-control p-2" { ...register( "email", { required: true } ) } />
              { errors.email && <span className='text-danger'>This field is required</span> }
            </div>

            <div className="form-group mt-2">
              <label htmlFor="password" className='p-1'>Password</label>
              <input type="password" className="form-control p-2" { ...register( "password", { required: true } ) } />
              { errors.password && <span span className='text-danger'>This feild is required</span> }
            </div>

            <p><small className="form-text text-muted">We'll never share your information with anyone else!</small></p>

            <input className='btn btn-dark p-2 mt-2' type="submit" value='Sign In' />

          </form>

          <div className="mt-3">
            <Link to='/register' className='text-black text-decoration-none'>
              Don't have an account? <span className='text-decoration-underline text-primary'>Register as a new user</span>
            </Link>
          </div>

        </div>

        <p>{ error }</p>

        <div className="d-flex justify-content-center align-items-center mt-3">

          <div className="col-md-2">
            <hr />
          </div>

          <p className='text-center mt-3 px-3'>Or Sign Using</p>

          <div className="col-md-2">
            <hr />
          </div>

        </div>

        <div className="d-flex justify-content-center align-items-center p-2">

          <button onClick={ google } style={ { minHeight: '60px' } } className='btn d-flex justify-center align-items-center mt-2 p-2   '>
            <img src={ googleImages } width={ 50 } alt="google" className='mx-auto d-block' />Google
          </button>

          <button onClick={ github } style={ { minHeight: '60px' } } className='btn d-flex justify-center align-items-center mt-2 ms-2'>
            <img src={ githubImages } width={ 40 } alt="github" className='mx-auto d-block' /><p className='mt-3 ps-2'>GitHub</p>
          </button>

        </div>

      </div >
    </section >
  );
};

export default Login;