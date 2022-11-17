import React from 'react';

const CheckOutTwo = ({ allDetails }) => {
    console.log(allDetails);
    return (
        <div>
            <h2>This is checkout{allDetails.title}</h2>
        </div>
    );
};

export default CheckOutTwo;