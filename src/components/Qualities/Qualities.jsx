import React from "react";
import sections from "../../constants/data";
import images from "../../constants/images";
import "./Qualities.css";

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

const Qualities = () => {
  const gradient = "url(#blue-gradient)";
  return (
    <section className="qualities section-p bg-md-black" id="qualities">
      <div className="container">
        <div className="qualities-content grid">
          <div className="content-left">
            <div className="section-t ">
              <h3>We are Professionals</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                voluptates deserunt, molestiae soluta cumque eum.
              </p>
            </div>

            <div className="item-list grid text-white">
              <div className="item flex">
                <div className="item-icon flex flex-center">
                  <FaFileAlt style={{ fill: gradient }} />
                </div>
                <div className="item-text">
                  <h3 className="item-title fs-25">Ideas & Plans</h3>
                  <p className="text">
                    {" "}
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    sed do eiusmod"
                  </p>
                </div>
              </div>

              <div className="item flex">
                <div className="item-icon flex flex-center">
                  <AiOutlineReload style={{ fill: gradient }} />
                </div>
                <div className="item-text">
                  <h3 className="item-title fs-25">Prompt Strategies</h3>
                  <p className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    sed do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-right">
            <img src={images.professionals_main_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
