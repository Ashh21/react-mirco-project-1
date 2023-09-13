import React from 'react'

const Card = ({ data }) => {
    const { name, cardNum, mm, yy, cvv } = data;
    return (

        <div className='card'>
            <div className='card1'>
                <div className='card-div-1'>
                    <h2> {cardNum} </h2>
                </div>
                <div className='card-div-2'>
                    <div>
                        <h2> {name} </h2>
                    </div>
                    <div>
                        <h2>
                            {mm} / {yy}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card2'>
                <div className='card2-div1'>
                </div>
                <div className='card2-div2'>
                    <p> {cvv} </p>
                </div>
            </div>
        </div>
    )
}

export { Card }



