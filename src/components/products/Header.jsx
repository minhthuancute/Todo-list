
import { CardImg } from 'reactstrap'
import './header.scss'
import React, { Component } from 'react'
import Cart from './Cart'

class Header extends Component {

   state = {
      keyWord: '',
      isEmptyCart: true
   }

   getKeyWord = e => {
      this.setState({
         keyWord: e.target.value
      }, () => {
         this.props.handleChange(this.state.keyWord)
      })
   }

   submit = e => {
      e.preventDefault();
   }

   render() {
      const { products, index, arrCart, total, countItem } = this.props;

      return (
         <div className='head d-flex justify-content-center align-items-center'>
            <div className='wraper container d-flex justify-content-between'>
               <div className='ava'>
                  <CardImg src='/assets/Veggy.png' />
               </div>

               <form className='d-flex' onSubmit={this.submit}>
                  <input onChange={this.getKeyWord} placeholder='Search for Vegetables and Fruits'></input>
                  <button className='btn'>
                     <i className="fas fa-search"></i>
                  </button>
               </form>

               <div className='show-cart'>
                  <Cart
                     countItem={countItem}
                     total={total}
                     products={products}
                     index={index}
                     arrCart={arrCart}
                     handleDelete={this.props.handleDelete}
                  />
               </div>
            </div>
         </div>
      )
   }
}

export default Header