
import React, { Component } from 'react'
import DisplayCart from './DisplayCart'
import './cart.scss'

class Cart extends Component {

   state = {
      isDisplayCart: false,
      isEmptyCart: false,
      arrayCart: []
   }

   isDisplay = () => {
      this.setState({
         isDisplayCart: !this.state.isDisplayCart
      })
   }

   render() {
      const { products, index, arrCart, total, countItem } = this.props;

      return (
         <div>
            <div className='bag'>
               <div className='sub'>
                  <p>No. of items: {countItem}</p>
                  <p>Sub Total: {total}</p>
               </div>

               <div onClick={this.isDisplay}>
                  <img src='/assets/bag.png' alt='bag' />
               </div>

               {this.state.isDisplayCart &&
                  <DisplayCart
                     products={products}
                     index={index}
                     arrCart={arrCart}
                     isEmptyCart={this.state.isEmptyCart}
                     handleDelete={this.props.handleDelete}
                  />}
            </div>
         </div>
      )
   }
}

export default Cart