import { InputMask } from 'primereact/inputmask'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ setData }) => {
    const [name, setName] = useState('')
    const [cardNum, setCardNum] = useState('');
    const [mm, setMm] = useState('');
    const [yy, setYy] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState("")

    const notify = () => toast('Success!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (name.length === 0) {
            newErrors.name = 'Card holder name required';
        }

        if (cardNum.length < 16) {
            newErrors.cardNum = ' Card number required';
        }

        if (!mm) {
            newErrors.mm = 'month is required';
        }

        if (!yy) {
            newErrors.yy = 'year is required';
        }

        if (isNaN(cvv) || cvv.length < 3) {
            newErrors.cvv = 'CVV is required'
        }

        if (Object.keys(newErrors).length === 0) {
            const newData = { name, cardNum, mm, yy, cvv }
            setData(newData)
            notify()
            setName('');
            setCardNum('');
            setMm("");
            setYy('');
            setCvv("")
            setErrors("");
        }
        else {
            setErrors(newErrors);
        }
    }

    return (
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
                    <span className="error">{errors.name}</span>
                </div>
                <div className='form-div flex1'>
                    <label>CARD NUMBER </label>
                    <InputMask className='input' mask='9999 9999 9999 9999' maskChar=" " placeholder='e.g. 1234 5678 9123 0000' type='text'
                        value={cardNum}
                        onChange={(e) => {
                            setCardNum(e.target.value)
                        }}

                    />
                    <span className="error">{errors.cardNum}</span>
                </div>

                <div className='flex'>
                    <div className='form-div flex1'>
                        <label>EXP.  DATE ( MM / YY)</label>
                        <div className='input-div'>
                            <div className='exp-input'>
                                <InputMask className='exp-input-1' type='text' mask='99' placeholder='MM' pattern="(0?[1-9]|1[0-2])" value={mm} maxLength={2}
                                    onChange={(e) => {
                                        setMm(e.target.value)
                                    }}
                                />
                                <span className="error">{errors.mm}</span>
                            </div>

                            <div className='exp-input'>
                                <InputMask className='exp-input-1' maxLength={2} type='text' mask='99' placeholder='YY' value={yy}
                                    onChange={(e) => {
                                        setYy(e.target.value)
                                    }}
                                />
                                <span className="error">{errors.yy}</span>
                            </div>

                        </div>
                    </div>
                    <div className='form-div flex1'>
                        <label>CVV</label>
                        <InputMask type='text' maxLength={3} className='cvv-input' placeholder='e.g. 123' value={cvv} mask="999"
                            onChange={(e) => {
                                setCvv(e.target.value)
                            }}
                        />
                        <span className="error">{errors.cvv}</span>
                    </div>
                </div>
                <div>
                    <button type='submit' className='btn'>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Form