import React from "react";
import "./Contact.scss";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const Contact = (props) => {




    const handleContact = (e)=>{
            e.preventDefault()


                toast.error("Server Down ")


    }




  return (
    <div
      className={
        props.displayContact
          ? "contact animate__animated  animate__fadeInTopLeft"
          : "contact animate__animated animate__fadeOutBottomRight"
      }
    >
      <div
        className="close-button"
        onClick={() => {
          props.setDisplayContact(false);
        }}
      >
        <IoMdClose />
      </div>

      <form className="contact-form">
        <h2> Have Any Query Contact Us</h2>

        <label>Your Email</label>

        <input placeholder="Enter your email here " />

        <label> Your Queries</label>

        <textarea 
        placeholder="Enter Your queries here seperated by commas or in points " />

        <button onClick={handleContact} className="button">submit</button>
      </form>
    </div>
  );
};

export default Contact;
