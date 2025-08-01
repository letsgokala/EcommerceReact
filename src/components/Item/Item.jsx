import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
      <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price} birr
            </div>
            <div className="item-price-old">
                {props.old_price} birr
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
