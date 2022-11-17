import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './chekout.css'



const CheckOut = () => {
    const details = useLoaderData();
    console.log(details.title);



    return (
        <div className='details'>
            <h2> {details.title}</h2>

        </div>
    );
};

export default CheckOut;