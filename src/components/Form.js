import React, { useState } from 'react'
import { Card } from './Card';


const Form = () => {
    let [name, setName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [mm, setMm] = useState('');
    const [yy, setYy] = useState('');
    const [cvv, setCvv] = useState('');
    const [data, sendData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        const newData = { name, cardNum, mm, yy, cvv }
        sendData(newData);
        setName(''); setCardNum(''); setMm("");
        setYy(''); setCvv("")
    }

    return (
        <div className='main'>
            <div className='card'>
                <Card data={data} />
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-div flex1'>
                        <label>CARDHOLDER NAME</label>
                        <input className='input' placeholder='e.g. Jane Appleseed' type='text'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className='form-div flex1'>
                        <label>CARD NUMBER </label>
                        <input className='input' placeholder='e.g. 1234 5678 9123 0000' type='text' value={cardNum}
                            onChange={(e) => {
                                setCardNum(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex'>
                        <div className='form-div flex1'>
                            <label>EXP.  DATE ( MM / YY)</label>
                            <div className='input-div'>
                                <div>
                                    <input className='exp-input' type='text' maxLength={2} placeholder='MM' value={mm}
                                        onChange={(e) => {
                                            setMm(e.target.value)
                                        }}
                                    />
                                </div>
                                <div>
                                    <input className='exp-input' type='text' maxLength={2} placeholder='YY' value={yy}
                                        onChange={(e) => {
                                            setYy(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-div flex1'>
                            <label>CVV</label>
                            <input type='text' maxLength={3} className='cvv-input' placeholder='e.g. 123' value={cvv}
                                onChange={(e) => {
                                    setCvv(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn'>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { Form }