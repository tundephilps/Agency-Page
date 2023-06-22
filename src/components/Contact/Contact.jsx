import React from "react";
import "./Contact.css";
import images from "../../constants/images";
//import { Formik } from "formik";
import Info from "./Info";
import Map from "./Map";

const Contact = () => {
  return (
    <section className="contact section-p-top bg-black" id="contact">
      <div className="container">
        <div className="contact-content grid text-center">
          <div className="contact-left">
            <div className="section-t">
              <h3>Let's Talk?</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                assumenda quia repellendus architecto culpa nisi?
              </p>
            </div>

            <form>
              <div className="form-elem">
                <input type="text" name="name" className="form-control" />
                <span className="form-control-text"></span>
              </div>

              <div className="form-elem">
                <input type="email" name="email" className="form-control" />
                <span className="form-control-text"></span>
              </div>

              <div className="form-elem">
                <input type="text" name="address" className="form-control" />
                <span className="form-control-text"></span>
              </div>

              <div className="flex flex-start">
                <button type="submit" className="submit-btn">
                  contact us
                </button>
              </div>
            </form>
          </div>

          <div className="contact-right">
            <img src={images.form_main_img} alt="" />
          </div>
        </div>
      </div>

      <Map />
      <Info />
    </section>
  );
};

export default Contact;
