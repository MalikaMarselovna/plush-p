import {
  Facebook,
  Instagram,
  LocationOnOutlined,
  LocalPhoneOutlined,
  Pinterest,
  Twitter,
  YouTube,
  EmailOutlined,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import Logo from "./img/logo.svg";

function Footer() {
  const SocialStyle = "m-3 rounded-full cursor-pointer p-2 text-white bg-[#f92e9e] hover:bg-[#16ffbd]";
  return (
    <>
      <div className="flex items-start justify-between p-20 border-b-[2px] border-b-[#f92e9e] ">
        <div className="flex flex-col flex-wrap p-2 w-[35%]">
          {/* Store information */}
          <div className="logo font-bold text-lg mb-10">
            <img src={Logo} alt="" className="w-[70%] cursor-pointer " />
          </div>
          <h1 className="text-[25px] mb-[20px] text-[#16ffbd]">
            Crochet stuffed toys shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            eveniet cum, earum laudantium harum, qui ipsam rem suscipit sit
            laborum dolore totam impedit voluptates. Sunt sapiente vel commodi
            amet expedita.
          </p>
          <div className="flex items-center justify-center mt-3 self-start">
            <a href="#" className={SocialStyle}>
              <Facebook />
            </a>
            <a href="#" className={SocialStyle}>
              <Instagram />
            </a>
            <a href="#" className={SocialStyle}>
              <Twitter />
            </a>
            <a href="#" className={SocialStyle}>
              <YouTube />
            </a>
            <a href="#" className={SocialStyle}>
              <Pinterest />
            </a>
          </div>
        </div>
        <div className="flex flex-col p-2 items-start justify-center">
          <h4 className="flex justify-center items-start mb-5 text-[25px] text-[#f92e9e] ml-4">Contact us</h4>
          <div className="flex m-3">
            <LocationOnOutlined className="text-[#f92e9e]" />
            <a
              href="https://maps.app.goo.gl/jEnMYyCj8hDEcnic8"
              className="pl-3 hover:text-[#16ffbd]"
            >
              State of Karakol
            </a>
          </div>
          <div className="flex m-3 ">
            <EmailOutlined className="text-[#f92e9e]" />
            <a
              href="mailto:mmukashova1@gmail.com"
              className="pl-3 hover:text-[#16ffbd]"
            >
              plushp@gmail.com
            </a>
          </div>
          <div className="flex m-3">
            <LocalPhoneOutlined className="text-[#f92e9e] " />
            <a href="tel:+996704884698" className="pl-3 hover:text-[#16ffbd]">
              +996-704-884-698
            </a>
          </div>
          <div className="flex m-3">
            <WhatsApp className="text-[#f92e9e]" />
            <a
              href="https://wa.me/+996704884698"
              className="pl-3 hover:text-[#16ffbd]"
            >
              +996-704-884-698
            </a>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <h4 className="flex items-start mb-5 text-[25px] text-[#f92e9e] ">Our location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.396313828574!2d78.38404677593776!3d42.48312647118172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sru!2skg!4v1715444746148!5m2!1sru!2skg"
            className="w-[600px] h-[350px] border-0"
          ></iframe>
        </div>
      </div>
      <div className="p-5 bg-[#f92e9e]">
        <p className="flex items-center justify-center text-[#16ffbd]">© 2024 Plush Paradise. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;

