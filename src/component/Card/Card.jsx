import React from 'react'
import './Card.scss'
import img1 from '../img/giay1.jpg'
export default function Card(props) {
  return (
    <div className='card'>
        <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={props.value.img}  alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      {props.value.name}
    </p>
    <a href="#" className="btn btn-primary">
      Add to card
    </a>
  </div>
</div>

    </div>
  )
}
