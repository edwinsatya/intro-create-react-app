import React, { Component, Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            < Fragment >
                <div className="header">
                    <div className="troley">
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment >
        )
    }
}

export default Product; 