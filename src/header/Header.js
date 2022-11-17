import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovider/AuthProvider';
import Login from '../login/Login';
import './Header.css'
import { BeakerIcon, UserIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div >

            <div className='barOne'>
                <div className='webEducation'>
                    <h1 className='web'>Web education</h1>
                </div>

                <div className='meblur'>

                    <Link className='linkcata' to='/category/:id'>Courses</Link>
                    <Link className='linkcata' to='/faq'>FAQ</Link>
                    <Link className='linkcata' to='/blog'>Blog</Link>
                </div>
                <div className='meblur'>
                    {
                        user?.uid ?
                            <>
                                <span className='space'>{user?.displayName}</span>
                                <Button className='logOUt' onClick={handleLogOut} variant="warning">LogOut</Button>{' '}


                            </>
                            :
                            <>
                                <Link className='space' to='/login'>Log in</Link>
                                <Link className='space' to='/register'>Register</Link>
                            </>
                    }

                    {user?.photoURL ?
                        <Image className='logOut' style={{ height: '40px', marginLeft: '5px' }} roundedCircle
                            src={user.photoURL}
                        ></Image>
                        :
                        <UserIcon className='UIcon'></UserIcon>

                    }

                </div>

            </div>


        </div>
    );
};

export default Header; 