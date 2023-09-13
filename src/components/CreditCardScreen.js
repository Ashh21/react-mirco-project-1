import React, { useState } from 'react'
import { Card } from './Card';
import Form from './Form';

const CreditCardScreen = () => {

    const [data, setData] = useState({
        name: "Xyz",
        cardNum: "0000 0000 0000 0000",
        mm: "05", yy: "25",
        cvv: "123"
    });

    return (
        <div className='main'>
            <Card data={data} />
            <Form setData={setData} />
        </div>
    )
}

export { CreditCardScreen }
