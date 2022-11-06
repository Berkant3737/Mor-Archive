import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <section className='about-us'>
      <div className="container-fluid p-0">
        {/* Banner */}
        <div className="text-center pages-banner">
        <h1 className='text-center pt-2 fw-bold'>Hakkımızda</h1>
                <ul className='m-0 p-0 d-flex justify-content-center'>
                    <li><a href="/" className='text-muted'>AnaSayfa</a></li>
                    <li><AiOutlineRight/></li>
                    <li><a href="/about-us" className='text-muted'>İletişim</a></li>
                </ul>
            </div>
        </div>
      {/* Banner */}
      <div className="about-us-contents text-center text-lg-start">
        <div className="container">
          <h2 className='text-danger text-center fw-bold mt-5'>Hakkımızda</h2>
          <div className="text-gray fw-normal">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum perferendis cupiditate distinctio obcaecati, dolores esse, officia id corporis tempora, facilis delectus. Maxime ad debitis commodi earum voluptates deserunt quidem voluptatum, ducimus eveniet. Cupiditate totam voluptatem recusandae eum sapiente velit facere dolorum animi, officiis asperiores est, magni cumque possimus maxime dolor voluptas quod nulla minima debitis iure laboriosam eos tenetur? Accusantium perferendis maxime dicta magni ipsam hic dolor quibusdam numquam repellat! Laboriosam odit quibusdam mollitia ratione nisi libero unde quod nulla officia atque consequatur temporibus omnis, obcaecati aliquam dicta veritatis quos accusamus error, est saepe iusto aperiam! Omnis, fugit quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum perferendis cupiditate distinctio obcaecati, dolores esse, officia id corporis tempora, facilis delectus. Maxime ad debitis commodi earum voluptates deserunt quidem voluptatum, ducimus eveniet. Cupiditate totam voluptatem recusandae eum sapiente velit facere dolorum animi, officiis asperiores est, magni cumque possimus maxime dolor voluptas quod nulla minima debitis iure laboriosam eos tenetur? Accusantium perferendis maxime dicta magni ipsam hic dolor quibusdam numquam repellat! Laboriosam odit quibusdam mollitia ratione nisi libero unde quod nulla officia atque consequatur temporibus omnis, obcaecati aliquam dicta veritatis quos accusamus error, est saepe iusto aperiam! Omnis, fugit quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum perferendis cupiditate distinctio obcaecati, dolores esse, officia id corporis tempora, facilis delectus. Maxime ad debitis commodi earum voluptates deserunt quidem voluptatum, ducimus eveniet. Cupiditate totam voluptatem recusandae eum sapiente velit facere dolorum animi, officiis asperiores est, magni cumque possimus maxime dolor voluptas quod nulla minima debitis iure laboriosam eos tenetur? Accusantium perferendis maxime dicta magni ipsam hic dolor quibusdam numquam repellat! Laboriosam odit quibusdam mollitia ratione nisi libero unde quod nulla officia atque consequatur temporibus omnis, obcaecati aliquam dicta veritatis quos accusamus error, est saepe iusto aperiam! Omnis, fugit quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum perferendis cupiditate distinctio obcaecati, dolores esse, officia id corporis tempora, facilis delectus. Maxime ad debitis commodi earum voluptates deserunt quidem voluptatum, ducimus eveniet. Cupiditate totam voluptatem recusandae eum sapiente velit facere dolorum animi, officiis asperiores est, magni cumque possimus maxime dolor voluptas quod nulla minima debitis iure laboriosam eos tenetur? Accusantium perferendis maxime dicta magni ipsam hic dolor quibusdam numquam repellat! Laboriosam odit quibusdam mollitia ratione nisi libero unde quod nulla officia atque consequatur temporibus omnis, obcaecati aliquam dicta veritatis quos accusamus error, est saepe iusto aperiam! Omnis, fugit quisquam.</p>
          </div>
          <div className="about-us-cards text-center">
            <div className="card-title">
            <span className='text-gray fs-4 fw-bolder d-block'>Eleven ile Yükselişe Geçin</span>
              <div className="row d-flex">
                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fab fa-google p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Her Sektöre Uygun</p>
                                <p class="fw-bold fs-5 p-0 m-0">Google Adwords</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}

                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fa-solid fa-cart-shopping p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Pazarlama Projesi</p>
                                <p class="fw-bold fs-5 p-0 m-0">E-Ticaret Yönetimi</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}

                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fa-solid fa-code p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Pazarlama Projesi</p>
                                <p class="fw-bold fs-5 p-0 m-0">E-Ticaret Yönetimi</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}

                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fa-solid fa-user p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Projelerinizi Kodlayalım</p>
                                <p class="fw-bold fs-5 p-0 m-0">Yazılım Danışmanlığı</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}

                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fa-solid fa-laptop-code p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Proje Yönetimi</p>
                                <p class="fw-bold fs-5 p-0 m-0">Kalite Yönetimi</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}
                {/* COLUMN */}
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio--item p-3">
                        <div class="portfolio--item-top d-flex align-items-center">
                            <div class="portfolio--item-icon me-3">
                                <i class="fa-solid fa-chart-pie p-3"></i>
                            </div>
                            <div class="portfolio--item-info text-start">
                                <p class="text-secondary p-0 m-0">Modern Çizim</p>
                                <p class="fw-bold fs-5 p-0 m-0">Web Tasarım</p>
                            </div>
                        </div>
                        <div class="portfolio--item-text">
                            <p class="text-secondary mt-4">Euismod amet amet quam est tempus quis ementum mi vel pulvinar</p>
                        </div>
                    </div>
                </div>
                {/* COLUMN */}

              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
    <Footer/>
      </div>
  )
}

export default AboutUs
