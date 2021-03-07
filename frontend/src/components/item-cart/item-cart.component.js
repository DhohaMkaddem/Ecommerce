import React from 'react'
import "./item-cart.style.scss"


const ItemCart = ({item}) => {
    const {name, price, imageUrl} = item
return(
    <div className='item-cart'>
<div className='image'
style={{
    background:`url(${imageUrl})`
}}>

</div>
    <div className='cart-footer'>
<span>{name}</span>
<span>{price}</span>
    </div>
    </div>
)
}

export default ItemCart