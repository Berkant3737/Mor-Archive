import React from "react";
import footerJson from "../../json/Footer.json";
import { ImWhatsapp, ImFacebook } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import img from "../../images/tt1.png";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="container p-4">
          <div className="col-12">
            <div className="footer-top d-block mb-5">
              <ul className="row p-0 m-0 align-items-center">
              <div className="col-12 col-lg-6">
              <a href="">
                <img src={img} className="mb-3" />
              </a>
              </div>
                <div className="col-12 col-lg-6 d-block d-lg-flex">
                {footerJson.map((footer) => {
                  return (
                    <li className="pb-3">
                      <a href={footer.href}> {footer.contents} </a>
                    </li>
                  );
                })}
                </div>
              </ul>
            </div>

            <div className="footer-bottom d-block d-lg-flex justify-content-between align-items-center">
              <span className="fw-bold">
                © 2022 MorArchive. Tüm Hakları Saklıdır
              </span>
              <div className="social-icons">
                <ul className="m-0 p-0">
                  <li>
                    <a href="https://www.facebook.com/people/MorArchive/100086551535275/">
                      <ImFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/morarchive0/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MorArchive">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+902589110530">
                      <ImWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
