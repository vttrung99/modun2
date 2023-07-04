import './App.scss';
import Card from './component/Card/Card';
import Carousel from './component/Carousel/Carousel';
import { data } from './component/data';
import Nav from './component/Nav';
import goft from './component/img/GoftNam.webp'
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <div className='navBars'>
          <Nav></Nav>
        </div>
      </div>
      <div>
        <h1>
          Shop Khánh Lưu
        </h1>
        <p>Giảm Giá 10% <br /> Cho Tất Cả Sản Phẩm</p>

        <div><button>Mua ngay</button></div>
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
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
