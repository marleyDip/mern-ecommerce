import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () =>
{

    const { registerUser, user, error } = useAuth();

    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/profile";
    user.email && navigate( from, { replace: true } );



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>
    {
        registerUser( data.name, data.image, data.email, data.password );
    }




    return (
        <section className='bg-brand bg-brand-container'>
            <div className="container mt-5">
                <h1 className='fs-4 text-center'>Register</h1>

                <div className='col-md-6 col-sm-8 mx-auto d-block'>

                    <form onSubmit={ handleSubmit( onSubmit ) }>

                        <div className="form-group mt-2">
                            <label htmlFor="name" className='p-1'>Name</label>
                            <input type="text" className="form-control p-2" { ...register( "name", { required: true } ) } />
                            { errors.name && <span className='text-danger'>This field is required</span> }
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="email" className='p-1'>Copy your Profile Picture Link from the Internet </label>
                            <input type="text" className="form-control p-2" { ...register( "image", { required: true } ) } />
                            { errors.image && <span className='text-danger'>This field is required</span> }
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="email" className='p-1'>Email</label>
                            <input type="email" className="form-control p-2" { ...register( "email", { required: true } ) } />
                            { errors.email && <span className='text-danger'>This field is required</span> }
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="Password" className='p-1'>Password</label>
                            <input type="password" className="form-control p-2" { ...register( "password", { required: true } ) } />
                            { errors.password && <span span className='text-danger'>This feild is required</span> }
                        </div>

                        <p><small className="form-text text-muted">We'll never share your information with anyone else!</small></p>
                        <p>{ error }</p>
                        <input className='btn btn-dark p-2 mt-2' type="submit" value='Register' />

                    </form>

                    <div className="mt-3">
                        <Link to='/login' className='text-black text-decoration-none'>
                            Already have an account? <span className='text-decoration-underline text-primary'>Sign In</span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Register;