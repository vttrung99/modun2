import React from 'react'
import Carousel from '../component/Carousel/Carousel'
import {data} from '../component/data'
import Card from '../card/Card'
import goft from '../component/img/GoftNam.webp'

export default function Home() {
  return (
    <div>
      <div>
        <h1>
        Shop Khánh Lưu

        </h1>

      </div>
      <div className='containers'>
        <div className='carousel'>
          <div className='carousels'>
            <Carousel></Carousel>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <div className="card-container">
              {data.map((value, index) => {
                return (
                  <div key={index}>
                    <Card value={value}></Card>
                  </div>
                );
              })}
            </div>
            <div >
              <img src={goft} alt="" className='img-container' />
            </div>
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  )
}
