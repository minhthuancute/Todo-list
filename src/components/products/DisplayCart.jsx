
import './displaycart.scss'

import React, { Component } from 'react'
class DisplayCart extends Component {

    render() {
        const { arrCart } = this.props;
        return (
            <div className='display-cart d-flex justify-content-center align-items-center'>
                <div className='wrap-display'>
                    {arrCart.length === 0 ?
                        <div className='empty'>
                            <img src='/assets/empty-cart.png' alt='Empty Cart' />
                            <p className='text-center ml-3'>You cart is empty!</p>
                        </div>
                        : <div className='list-products d-flex'>
                            {arrCart.map((item, index) => (
                                <div className='item d-flex align-items-center' key={index + 5}>
                                    <i onClick={() => this.props.handleDelete(item.name)} className="fas fa-times"></i>
                                    <div className='left d-flex'>
                                        <img src={`/assets/${item.src}.jpg`} alt={item.name} />
                                        <div>
                                            <p>{item.name}</p> <br />
                                            <p className='cost'>$: {item.cost}</p>
                                        </div>
                                    </div>

                                    <div className='right'>
                                        <p>No.</p>
                                        <p className='cost'>$: {item.cost * item.count}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default DisplayCart