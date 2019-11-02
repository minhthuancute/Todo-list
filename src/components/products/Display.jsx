
import React from 'react'
import './display.scss'

const Display = (props) => {
    return (

        <div className='wrap d-flex justify-content-center align-items-center'>
            <div className='display-product d-flex justify-content-center align-items-center'>
                <i onClick={() => props.isHide()} className="fas fa-times"></i>
                <div onClick={() => props.isDisplay()}>
                    <img src={`/assets//${props.src}.jpg`} alt={props.name} title={props.name} />
                    <div className='des d-flex align-items-center'>
                        <p className='name'>{props.name}</p>
                        <p className='cost'>$: {props.cost}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Display
