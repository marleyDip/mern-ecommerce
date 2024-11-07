import React, { useState } from 'react';
import products from '../../data/productsData.json'
import { Link, useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';

const TopProducts = () =>
{
    const Navigate = useNavigate();

    let topProducts = [];
    for ( let i = 0; i < 3; i++ )
    {
        const number = Math.floor( Math.random() * products.length );
        if ( !topProducts.includes( products[ number ] ) )
        {
            topProducts.push( products[ number ] );
        }
        else
        {
            i--;
        }
    }

    const [cart, setCart] = useState ([]);
    const addToCart = ( product ) =>
    {
        setCart([...cart, product]);
        addToDB(product.id);
        Swal.fire ( {
            title: 'Successful!',
            text: `You have Added ${ product.name }!`,
            icon: 'success'
        } );
        Navigate('/cart');
    }

    return (
        <section>
            <h1 style={ { fontSize: '22px', color: '#212529', fontWeight: '700' } } className='mt-3'>Top Products of this week</h1>

            <div className='row products-container justify-content-center align-items-center'>
                {
                    topProducts.map( product =>
                    {
                        return (
                            <div key={ product.id } className="cart-deck my-2 col-lg-3 col-md-5 col-sm-8 mx-1">
                                <div className="cart">

                                    <Link to={ `/product/${ product.id }` } className='text-decoration-none text-black'>
                                        <img src={ product.image } className='cart-img-top img-fluid mx-auto d-block' alt={ product.name } />
                                    </Link>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="cart-body col-sm-6">
                                            <h5 className='cart-title'>{ product.name }</h5>
                                            <p className='cart-text'>Price: { product.price } Taka</p>
                                        </div>

                                        <div className="d-flex col-sm-6">
                                            <div onClick={ () =>
                                            {
                                                Navigate( `/product/${ product.id }` )
                                            } } className="col-sm-6 ">
                                                <button className='btn btn-outline-dark my-3'>Details</button>
                                            </div>

                                            <div className="col-sm-6 mx-3">
                                                <button onClick={ () => addToCart( product ) } className='btn btn-outline-secondary my-3'>Cart</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </section>
    );
};

export default TopProducts;