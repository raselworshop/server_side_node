import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All phones are here: {phones.length}</h2>
            {
                phones.map(phone => <li key={phone.id}>
                    <Link to={`/phones/${phone.id}`}>{phone.brand}</Link>
                </li>)
            }
        </div>
    );
};

export default Phones;