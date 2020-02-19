import React from 'react'
import loaderSrc from '../../assets/loading.gif'
const Loader = props => {
    return (
        <div>
            <img
                style={{ width: 75 }}
                alt="loading icon"
                src={loaderSrc}
                />
        </div>
    )
}

export default Loader