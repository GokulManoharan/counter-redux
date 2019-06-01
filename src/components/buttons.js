import React from 'react'
import { connect } from 'react-redux'

import { incrementCount, decrementCount } from '../actions/count'

const Buttons = (props) => {
    const handleClick = (action) => {
        if(action == 'up'){
            props.dispatch(incrementCount())
        }
        if(action == 'down'){
            props.dispatch(decrementCount())
        }
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={() => {handleClick('up')}} >Up</button>
            <button className="btn btn-primary" onClick={() => {handleClick('down')}}>Down</button>
        </div>
    )
}

export default connect()(Buttons)
