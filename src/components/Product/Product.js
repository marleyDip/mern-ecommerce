import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../data/productsData.json';
import Navbar from '../Shared/Navbar/Navbar';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';

const Product = () =>
{

    const navigate = useNavigate();

    const { id } = useParams();
    const product = products.find( pd => pd.id === id );

    const [ cart, setCart ] = useState( [] );
    const addToCart = ( product ) =>
    {
        ShoppingCart( product );

        Swal.fire( {
            title: 'Successful!',
            text: `You have Added ${ product.name }!`,
            icon: 'success'
        } );
    }

    const ShoppingCart = ( product ) =>
    {
        setCart( [ ...cart, product ] );
        addToDB( product.id );
    }

    const handleClick = ( product ) =>
    {
        ShoppingCart( product );
        navigate( '/shipping' );
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Product Details</h1>

                <div className='row mt-5 justify-content-center align-items-center'>

                    <div className="col-lg-4">
                        <img style={ { borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' } } src={ product.image } className='img-fluid mx-auto d-block' width={ 250 } alt={ product.name } />

                        <div className="d-flex justify-content-center align-items-center mt-2">
                            <button onClick={ () => addToCart( product ) } className='btn btn-dark mt-2'>Add to Cart</button>
                            <button onClick={ () => handleClick( product ) } className='btn btn-success mt-2 ms-2'>Buy Now</button>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div style={ { borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' } } className="bg-white p-5 mt-4 mx-auto">
                            <h2 className='fs-5 fw-bold'>{ product.name }</h2>
                            <hr />
                            <p style={ { textAlign: 'justify' } } className='fs-6'>{ product.description }</p>
                            <hr />
                            <small>Price: <span className='fs-5 fw-bold'>{ product.price }</span> Taka</small>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Product;