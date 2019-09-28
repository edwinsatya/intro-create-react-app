import React, { Component } from 'react'
import YoutubeComponent from '../../Component/YoutubeComponent/YoutubeComponent'
import Product from '../Product/Product'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>youtube component</p>
                <hr />
                <YoutubeComponent time="7.11" title="satu" desc="satusatu" button="1" />
                <YoutubeComponent time="8.11" title="dua" desc="duadua" button="2" />
                <YoutubeComponent time="9.11" title="tiga" desc="tigatiga" button="3" />
                <YoutubeComponent /> */}
                <p>counter</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home;