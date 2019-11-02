
import React from 'react'
import './empty.scss'

const Empty = () => {
    return (
        <div className='empty d-flex justify-content-center align-items-center'>
            <img src='https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png' alt='Empty' />
            <h3>Sorry, no products matched your search!</h3>
            <p>Enter a different keyword and try.</p>
        </div>
    )
}

export default Empty
