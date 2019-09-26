import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
   state = {
      counters: [
         { id: 1, value: 0 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 0 },
      ]
   };

   // Funtion delete item
   handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
      console.log('thuan cute', counterId);
   }

   // Create Html
   render() {
      return (
         <div>
            {
               this.state.counters.map(counters =>
                  <Counter
                     key={counters.id}
                     value={counters.value}
                     onDelete={this.handleDelete}
                     counters={counters}
                  />
               )
            }
         </div>
      );
   }
}

export default Counters;
