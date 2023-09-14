import React, { useState } from 'react'
import { Card } from './Card';
import { CardForm } from './CardForm';
import { ToastContainer } from 'react-toastify';

const CreditCardScreen = () => {

    const [data, setData] = useState({
        name: "JANE APPLESEED",
        cardNum: "0000 0000 0000 0000",
        mm: "00", yy: "00",
        cvv: "000"
    });

    return (
        <div className='main'>
            <ToastContainer />
            <Card data={data} />
            <CardForm setData={setData} />
        </div>
    )
}

export { CreditCardScreen }
