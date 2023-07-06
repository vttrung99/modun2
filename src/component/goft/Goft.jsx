import React from 'react'
import {goft} from '../../component/data'
import { convertToVND } from '@mieuteacher/meomeojs'
import './Goft.scss'
import Footer from '../footer/Footer'
export default function Goft() {
  return (
    <div className='goft'>
           {goft.map((value,index)=>{
                return <div key={index} className="card">
                <img
                    src={value.img}
                    className="card-img-top"
                    alt="Fissure in Sandstone"
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
            <Footer></Footer>
    </div>
  )
}
