import React from "react";
import "./Footer.css";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import logo from "../Assets/logo.png"

export default function Footer() {
  return (
    <div className="main_footer">
      <div className="container">
        <div className="row">
          <div className="col-2 ">
          <img src={logo} className=" logo_adjsutment" alt="" />
          </div>

          <div className="col-md-3">
            <a className="footer_links" href="https://docs.intelliquantcoin.com/" target="_blank">
              <li>What is $INQU?</li>
            </a>
            <a className="footer_links" href="https://docs.intelliquantcoin.com/how-to-buy" target="_blank">
              <li>How to Buy</li>
            </a>
            <a className="footer_links" href="https://docs.intelliquantcoin.com/roadmap" target="_blank">
              <li>Roadmap</li>
            </a>
            <a className="footer_links" href="https://docs.intelliquantcoin.com/usdinqu-vs-competition" target="_blank">
              <li>COMPARISONS</li>
            </a>
            {/* <a className="footer_links" href="">
              <li>Comparisons</li>
            </a> */}
            <a className="footer_links" href="https://docs.intelliquantcoin.com/faq" target="_blank">
              <li>FAQ</li>
            </a>
          </div>
          {/* <div className="col-md-3">
            <a className="footer_links pt-0" href="">
              <li>Terms of Service</li>
            </a>
            <a className="footer_links" href="">
              <li>Privacy Policy</li>
            </a>
            <a className="footer_links" href="">
              <li>Cookies</li>
            </a>
          </div> */}
          <div className="col-md-4 text-md-end text-start">
            {/* <p className="footer_links">International Business</p> */}
            {/* <p className="footer_links">Centre, Rue du Gabian,</p> */}
            {/* <p className="footer_links">98000 Monaco</p> */}
            {/* <p className="footer_links">contact@bitcoinbsc.io</p> */}

            <div className="mt-5">
              {/* <p className="footer_links">BITCOIN ETH CORP</p> */}
              {/* <p className="footer_links">TVA: FR26337867214</p> */}
              <p className="footer_links d-flex ">
                <span className="d-flex">
                  {" "}
                <a href=" https://t.me/IntelliQuantOfficial/4" target="_blank">  <BsTelegram className="soical_icons"></BsTelegram></a>
                </span>
                <span className="mx-2 ">
                  {" "}
                  <span>
                  <a href="https://twitter.com/IntelliQuant" target="_blank">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-ng-c3098143052=""
                      aria-hidden="true"
                      className="x_logo"
                    >
                      <path
                        d="M1.05085 0L9.55754 10.4866L0.997238 19.0127H2.92397L10.4187 11.5478L16.474 19.0127H23.0302L14.0447 7.93638L22.0127 0H20.086L13.184 6.87483L7.60714 0H1.05085ZM3.8842 1.30836H6.89612L20.1965 17.7044H17.1846L3.8842 1.30836Z"
                        fill="white"
                        _ngcontent-ng-c3098143052=""
                      ></path>
                    </svg>
                    </a>
                  </span>
                </span>
                © ∞ IntelliQuant - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="lower">
            <p>
              Disclaimer: Cryptocurrencies are volatile and could go down as
              well as up in value. Profits may be subject to capital gains or
              other taxes applicable in your jurisdiction. Always do your own
              research and only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
