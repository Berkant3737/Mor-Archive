import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <section id="iletisim">
        <div class="container">
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
            <div class="row p-4 text-center">
                <div class="col-12 col-md-4 col-lg-3 mx-auto">
                    <a href="#"><i class="fa-solid fa-envelope fa-2x rounded-circle text-white p-3 mx-auto contact-icon"></i></a>
                    <p class="lead fw-bold mt-3">mail@mail.com</p>
                </div>
                <div class="col-12 col-md-4 col-lg-3 mx-auto">
                    <a href="#"><i class="fa-solid fa-phone fa-2x rounded-circle text-white p-3 mx-auto contact-icon"></i></a>
                    <p class="lead fw-bold mt-3">+90 555 555 55 55</p>
                </div>
                <div class="col-12 col-md-4 col-lg-3 mx-auto">
                    <a href="#"><i class="fa-solid fa-house fa-2x rounded-circle text-white p-3 mx-auto contact-icon"></i></a>
                    <p class="lead fw-bold mt-3">İstanbul,Türkiye</p>
                </div>
            </div>
        </div>
    </section>

    <section id="form">
        <div class="container-fluid bg-light">
            <div class="container">
                <div class="py-5 mt-2 text-center">
                    <h1 class="fw-bold pb-2 mx-auto">
                        Bize Ulaşın
                    </h1>
                    <p class="lead fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aperiam.</p>

                    <form action="">
                        <div class="col-lg-6 col-md-8 col-sm-10 col-10 mx-auto mt-5">
                            <div class="input-icons">
                                <i class="fa-solid fa-user fs-5"></i>
                                <input type="text" name="name" id="name" class="form-control border-0 p-2 py-3 mb-4 input-field" placeholder="İsim Soyisim"/></div>
                            <div class="input-icons">
                                <i class="fa-solid fa-envelope"></i>
                                <input type="email" name="email" id="email" class="form-control border-0 p-2 py-3 mb-4 input-field" placeholder="E-posta Adresi"/></div>
                            <div class="input-icons">
                                <i class="fa-solid fa-phone"></i>
                                <input type="tel" name="tel" id="tel" class="form-control border-0 p-2 py-3 mb-4 input-field" placeholder="Telefon Numarası"/>
                            </div>
                            <div class="input-icons">
                                <i class="fa-solid fa-pen"></i>
                                <input type="text" name="title" id="title" class="form-control border-0 p-2 py-3 mb-4 input-field" placeholder="Mesaj Başlığı"/>
                            </div>
                            <div class="input-icons">
                                <i class="fa-solid fa-comment-dots"></i>
                                <textarea name="message" id="message" class="form-control border-0 p-2 mb-4 py-3 input-field" placeholder="Mesaj içeriği." rows="5"></textarea>
                            </div>
                            <button class="form-control btn p-3 mb-3 fs-5">Gönder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="social">
        <div class="container">
            <div class="">
                <div class="row mx-auto text-center fw-bold social">
                    <div class="col-12 col-md-3 mt-3 py-3 mx-auto">
                        <a href="#" class="text-decoration-none"><i class="fab fa-instagram fa-2x"></i><span class="fs-5 align-text-bottom"> Instagram</span></a>
                    </div>
                    <div class="col-12 col-md-3 mt-3 py-3 mx-auto">
                        <a href="#" class="text-decoration-none"><i class="fab fa-facebook fa-2x"></i><span class="fs-5 align-text-bottom"> Facebook</span></a>
                    </div>
                    <div class="col-12 col-md-3 py-3 mt-3 mx-auto">
                        <a href="#" class="text-decoration-none"><i class="fab fa-twitter fa-2x"></i><span class="fs-5 align-text-bottom"> Twitter</span></a>
                    </div>
                    <div class="col-12 col-md-3 py-3 mt-3 mx-auto">
                        <a href="#" class="text-decoration-none"><i class="fab fa-whatsapp fa-2x"></i><span class="fs-5 align-text-bottom"> WhatsApp</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Contact