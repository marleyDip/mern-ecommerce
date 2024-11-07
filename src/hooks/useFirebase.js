import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>
{

    const [ user, setUser ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const google = () =>
    {
        signInWithPopup( auth, googleProvider )

            .then( ( result ) =>
            {
                setUser( result.user );


            } )

            .catch( ( error ) =>
            {
                setError( error.message );

            } );
    }

    const github = () =>
    {
        signInWithPopup( auth, githubProvider )
            .then( ( result ) =>
            {
                setUser( result.user );

            } )

            .catch( ( error ) =>
            {
                setError( error.message );

            } );
    }


    const registerUser = ( name, image, email, password ) =>
    {
        createUserWithEmailAndPassword( auth, email, password )
            .then( ( result ) =>
            {
                setUser( result.user );
                userUpdate( name, image );
            } )

            .catch( ( error ) =>
            {
                setError( error.message );

            } );
    }


    
    const userUpdate = ( name, image ) =>
    {
        updateProfile( auth.currentUser, {
            displayName: name, photoURL: image
        } ).then( () => 
        {
        } ).catch( ( error ) =>
        {
            setError( error.message );
        } );
    }



    const login = ( email, password ) =>
    {
        signInWithEmailAndPassword( auth, email, password )
            .then( ( userCredential ) =>
            {
            
                const user = userCredential.user;
                setUser(user);
            } )
            .catch( ( error ) =>
            {
                setError( error.message );
            } );
    }



    useEffect( () =>
    {
        onAuthStateChanged( auth, ( user ) =>
        {
            if ( user )
            {

                setUser( user );
            } else
            {
                setUser( {} );
            }
        } );

    }, [ auth ] )



    const logOut = () =>
    {
        signOut( auth ).then( () =>
        {
            setUser( {} );
        } )
    }

    return {
        user,
        error,
        google,
        github,
        logOut,
        registerUser,
        login
    }

}

export default useFirebase;