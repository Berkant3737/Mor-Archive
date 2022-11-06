import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
import img from "../../images/example-card.webp"
function Products() {
  return (
    <div>
      <Navbar/>
      {/* Banner */}
      <div className="text-center pages-banner">
                <h1 className='text-center pt-2 fw-bold'>Hakkımızda</h1>
                <ul className='m-0 p-0 d-flex justify-content-center'>
                    <li><a href="/" className='text-muted'>AnaSayfa</a></li>
                    <li><AiOutlineRight/></li>
                    <li><a href="/about-us" className='text-muted'>İletişim</a></li>
                </ul>
              </div>
        {/* Banner */}
        <div className="container">
          <div className="row gy-5">
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
            {/* COLUMN */}
          <div class="col-12 col-md-4">
                <div class="card border-0">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Mobile App Design</h5>
                        <p class="card-text text-muted">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="#" class="btn btn-danger text-white">Görüntüle </a>
                <a href="#" class="btn btn-light">600 tl</a>
                    </div>
                </div>
            </div>
          {/* COLUMN */}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Products