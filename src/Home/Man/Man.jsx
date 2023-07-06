import React from 'react'
import './Man.scss'
import { man } from '../../component/data'
import { convertToVND } from '@mieuteacher/meomeojs'
import Footer from '../../component/footer/Footer'

export default function Man() {
    return (
        <div className='man'>
            {/* {man.map((value,index)=>{
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
            })} */}

            {man.map((value, index) => (
                <div key={index} className="card">
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
            ))}

            <Footer></Footer>
        </div>
    )
}
