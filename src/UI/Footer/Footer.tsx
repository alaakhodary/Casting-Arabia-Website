import logo from "../../assest/images/logo.webp";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mt-12 flex h-auto w-full max-w-full items-center gap-[32px] bg-white px-6 py-6">
        <img
          src={logo}
          alt="logo"
          className="h-[40px] w-[130px] object-cover"
        />
        <ul className="flex items-center gap-[32px]">
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
