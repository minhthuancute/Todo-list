
import React, { Component } from 'react'
import { CardTitle, Container, Row, Col, CardImg } from 'reactstrap'
import './products.scss'

import Display from './Display'

class ShowProduct extends Component {

   state = {
      isDisplay: false,
      src: '',
      cost: '',
      name: '',
      inputValue: '',
   }

   isHide = () => {
      this.setState({
         isDisplay: false
      })
   }

   isDisplay = () => {
      this.setState({
         isDisplay: true
      })
   }

   getValue = (src, cost, name) => {
      this.setState({
         isDisplay: true,
         src, cost, name,
      })
   }

   handleChange = (e) => {
      e.preventDefault();
      this.props.disable();
      this.setState({
         inputValue: e.target.value
      }, () => {
         this.props.isChange()
      })
   }

   render() {
      const { src, cost, name, inputValue } = this.state;
      return (
         <div>
            <div className="products">
               <Container>
                  {this.state.isDisplay &&
                     <Display src={src} cost={cost} name={name} isHide={this.isHide} isDisplay={this.isDisplay} />}
                  <Row>
                     {this.props.products.map((product, index) => (
                        <Col className='product' md='3' sm='6' key={index}>
                           <div className="item">
                              <div className='list-img'>
                                 <div onClick={() => this.getValue(product.src, product.cost, product.name)}>
                                    <CardImg style={{
                                       width: '150px',
                                       cursor: 'zoom-in'
                                    }} src={`/assets/${product.src}.jpg`} title={product.name} />
                                 </div>
                              </div>

                              <div className='title'>
                                 <CardTitle>{product.name}</CardTitle>
                                 <p>$: {product.cost}</p>
                              </div>

                              <div className='edit-cart d-flex align-items-center justify-content-between'>
                                 <button onClick={() => this.props.handleIncre(index, this.state.inputValue)} className='incre btn'>
                                    <i className="fas fa-plus"></i>
                                 </button>
                                 <form onSubmit={this.handleChange}>
                                    <input onChange={this.handleChange} value={!this.props.value === true ? null : product.count} className='text-center' type='number'></input>
                                 </form>
                                 <button className='decre btn' onClick={() => this.props.handleDecre(index, this.state.inputValue)}>
                                    <i className="fas fa-minus"></i>
                                 </button>
                              </div>

                              <div className='add'>
                                 <button onClick={() => this.props.getValue(product.name, index, inputValue)} className='btn'>ADD TO CART</button>
                              </div>
                           </div>
                        </Col>
                     ))}
                  </Row>
               </Container>
            </div>
         </div >
      )
   }
}

export default ShowProduct