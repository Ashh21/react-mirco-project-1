import React from 'react'


const Card = ({data}) => {
   const {name, cardNum, mm, yy, cvv} = data;
    return (
        <div>
            <div className='card-div'>
                <div className='card-div-1'>
                    <h2> {name} </h2>
                </div>
                <div className='card-div-2'>
                    <div>
                        <p> {cardNum} </p>
                    </div>
                    <div>
                        <p>
                            {mm} / {yy}
                        </p>
                    </div>
                </div>
            </div>
            <div className='card2'>
                <div className='c-div1'>
                </div>
                <div className='c-div2'>
                    <p> {cvv} </p>
                </div>
            </div>
        </div>
    )
}

export { Card }



