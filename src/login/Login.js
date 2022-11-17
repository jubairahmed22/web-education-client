import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../contexts/Authprovider/AuthProvider';

import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'





const Login = () => {
    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/tutorial/:id';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {

                console.error(error)
                setError(error.message)
            })
    }
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSingIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='fullCard'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='emailtxt'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='emailtxt'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mt-1' variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className='errormsg'>
                    {error}
                </Form.Text>
            </Form>
            <Button onClick={handleGoogleSignIn} className='space' variant="dark">Google Sign In</Button>{' '}
            <Button onClick={handleGithubSingIn} className='space' variant="dark">Github Sign In</Button>{' '}

        </div>
    );
};

export default Login;