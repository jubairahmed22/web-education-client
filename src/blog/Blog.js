import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <h4>what is cors?</h4>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>What is Node? How does Node work?</h4>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </ListGroup.Item>

            </ListGroup>
        </div>
    );
};

export default Blog; <h2>This is blog</h2>