import React from "react";
import "./Contact.css";
import { BsArrowRightCircle } from "react-icons/bs";
import sections from "../../constants/data";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Info = () => {
  const gradient = "url(#blue-gradient)";

  return (
    <div className="info bg-md-black section-p">
      <div className="container">
        <div className="info-content">
          <div className="item-list grid text-center">
            <div className="item bg-dark translate-effect flex flex-col gap-y-3">
              <span className="item-icon">
                <FaPhoneAlt style={{ fill: gradient }} />
              </span>
              <div className="item-info-text fw-5 text-white">+425 235 712</div>
              <p className="text text-center">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            <div className="item bg-dark translate-effect flex flex-col gap-y-3">
              <span className="item-icon">
                <FaEnvelopeOpen style={{ fill: gradient }} />
              </span>
              <div className="item-info-text fw-5 text-white">
                solnhub@info.com
              </div>
              <p className="text text-center">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            <div className="item bg-dark translate-effect flex flex-col">
              <span className="item-icon">
                <FaMapMarkerAlt style={{ fill: gradient }} />
              </span>
              <div className="item-info-text fw-5 text-white">
                United Kingdom, New Street
              </div>
              <p className="text text-center">
                Lorem ipsum dolor sit mattis amet consectetur adipiscing
              </p>
              <a href="/" className="item-link text-grey">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
