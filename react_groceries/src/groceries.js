import React, { Component } from "react";

// Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)

// Make inputs so that new items can be added

// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)

// Add some style to your app

class Groceries extends Component {
    state = {
        groceries: []
    };


    handleChange = event => {
        // computed property names
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.state.groceries.push({
            item: this.state.item,
            quantity: this.state.quantity,
            units: this.state.units,
            isPurchased: false,
        })
        this.setState({
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        })

    }

    render() {
        // {
        //     item: '',
        //     units: '',
        //     quantity: 0,
        //     isPurchased: false
        //   }
        return (
            <div>
                <h1> Make a list</h1>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="item">Item:</label>
                    <input
                        id="item"
                        onChange={this.handleChange}
                        value={this.state.item}
                        type='text'
                    />

                    <label htmlFor="units">Units:</label>
                    <input
                        id="units"
                        onChange={this.handleChange}
                        value={this.state.units}
                        type="text"
                    />

                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        id="quantity"
                        onChange={this.handleChange}
                        value={this.state.quantity}
                        type="text"
                    />
                    <button>Submit</button>

                </form>

                <div>
                    <h2>Your Cart</h2>
                    <ol className='ol_info'>
              {this.state.groceries.map((grocery, idx) => (
                <li key={idx}>
                  Item:{' ' + grocery.item + ' '}
                  Units:{grocery.units + ' '}
                  Quantity:{' ' + grocery.quantity + ' '}
                </li>
              ))}
            </ol>


                </div>
            </div>

        );

    }
}

export default Groceries