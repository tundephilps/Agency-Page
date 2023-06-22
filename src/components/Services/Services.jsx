import React from "react";
import "./Services.css";
import sections from "../../constants/data";
//import SingleService from "./SingleService";

import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

const Services = () => {
  const gradient = "url(#blue-gradient)";
  return (
    <section className="services section-p bg-md-black" id="services">
      <div className="container">
        <div className="services-content">
          <svg width="1em" height="1em">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#55b3d5" offset="0%" />
              <stop stopColor="#5764de" offset="100%" />
            </linearGradient>
          </svg>

          <div className="item-list grid text-white text-center">
            <div className=" item bg-dark translate-effect lg:flex lg:flex-col flex flex-col ">
              <span className="item-icon">
                <FaPaperPlane style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Trade Show</h4>
              <p className="fs-19 text text-center">
                "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>

            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <FaRocket style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Digital Marketing</h4>
              <p className="fs-19 text text-center">
                "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>

            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <BiDollarCircle style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Branding </h4>
              <p className="fs-19 text text-center">
                "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <FaEdit style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Content Creation</h4>
              <p className="fs-19 text text-center">
                "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <ImMagicWand style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Grpahic Design</h4>
              <p className="fs-19 text text-center">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <FaShoppingCart style={{ fill: gradient }} />
              </span>
              <h4 className="item-title fs-25">Media Buying</h4>
              <p className="fs-19 text text-center">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
