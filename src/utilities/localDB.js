import Swal from "sweetalert2";

// use local Storage to Manage Cart Data

const addToDB = id =>
{
    let cart = {};

    const storedCart = localStorage.getItem( 'cart' );
    if ( storedCart )
    {
        cart = JSON.parse( storedCart );
    }

    // Add Quantity

    if ( cart[ id ] )
    {
        cart[ id ] = cart[ id ] + 1;
    } else
    {
        cart[ id ] = 1;
    }
    localStorage.setItem( 'cart', JSON.stringify( cart ) );
}

// Get Cart from local Storage

const getStoredCart = () =>
{
    let cart = {};

    const storedCart = localStorage.getItem( 'cart' );
    if ( storedCart )
    {
        cart = JSON.parse( storedCart );
    }

    return cart;
}

//Remove product from local Storage

const removeFromDB = id =>
{
    let cart = {};

    const storedCart = localStorage.getItem( 'cart' );
    if ( storedCart )
    {
        cart = JSON.parse( storedCart );
    }

    delete cart[ id ];

    localStorage.setItem( 'cart', JSON.stringify( cart ) );
    Swal.fire ( {
        title: 'Product Removed!',
        text: `You have Removed a Product!`,
        icon: 'Info'
    } );

    setTimeout( () => window.location.reload(), 1000 );
}

// Delete Shopping Cart from local Storage

const deleteShoppingCart = () =>
{
    localStorage.removeItem( 'cart' );
    window.location.reload();
}


export
{
    addToDB,
    getStoredCart,
    removeFromDB,
    deleteShoppingCart
}