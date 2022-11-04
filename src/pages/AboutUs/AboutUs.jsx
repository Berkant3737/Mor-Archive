import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../containers/Navbar/Navbar'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <section className='about-us'>
      <div className="container-fluid">
        {/* Banner */}
        <div className="text-center about-us-banner">
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
              <div className="d-flex">
              <div class="col-12 col-md-6 col-lg-4 shadow-sm">
                    <div class="portfolio__item p-3">
                        <div class="portfolio__item-top d-flex align-items-center">
                            <div class="portfolio__item-icon me-3">
                                <i class="fab fa-google p-3"></i>
                            </div>
                            <div class="portfolio__item-info text-start">
                                <p class="text-secondary p-0 m-0">Lorem, ipsum dolor.</p>
                                <p class="fw-bold fs-5 p-0 m-0">Lorem, ipsum.</p>
                            </div>
                        </div>
                        <div class="portfolio__item-text">
                            <p class="text-secondary mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, ipsum.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>

      </div>
  )
}

export default AboutUs
