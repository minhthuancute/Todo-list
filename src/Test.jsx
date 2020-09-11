
import React, { Component } from 'react'
import Button from './components/test/Button'

class Test extends Component {
   state = {
      width: 'auto'
   }

   changeWidth = n => {
      this.setState({
         width: n
      })
   }

   render() {
      return (
         <div>

            <Button color='white' width={this.state.width} changeWidth={this.changeWidth}>Thuan cute</Button>

         </div>
      )
   }
}

export default Test
