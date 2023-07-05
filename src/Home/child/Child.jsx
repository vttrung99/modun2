import React from 'react'
import {child} from '../../component/data'
import { convertToVND } from '@mieuteacher/meomeojs'
import './Child.scss'
export default function Child() {
  return (
    <div className='child'>
        {child.map((value,index)=>{
                return <div key={index} className="card">
                <img
                    src={value.img}
                    className="card-img-top"
                    alt="Fissure in Sandstone"
                    style={{width:"190px"}}
                />
                <div className="card-body">
                    <h5 className="card-title">{convertToVND(value.price)}</h5>
                    <p className="card-text">
                       {value.name}
                    </p>
                    <a href="#!" className="btn btn-primary">
                        Thêm Vào Giỏ
                    </a>
                </div>
            </div>
            })}
            
    </div>
  )
}
