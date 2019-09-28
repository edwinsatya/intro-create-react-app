import React from 'react'
import './YoutubeComponent.css'
import Button from '@material-ui/core/Button'

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
            <Button variant="contained" color="primary">{props.button}</Button>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: '00.00',
    title: 'title here',
    desc: 'desc here',
    button: '-'
}

export default YoutubeComponent;