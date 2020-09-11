
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
   render() {
      const { background, color, width } = this.props
      return (
         <div>
            <button style={{
               width: `${width}px`,
               color,
               background
            }} onClick={() => this.props.changeWidth(200)}>
               {this.props.children}
            </button>
         </div>
      )
   }
};

Button.propTypes = {
   background: PropTypes.number.isRequired
}

export default Button