import { Logo } from "../../atoms/Logo";

const Footer = () => {
  return (
    <footer className="footer border-t-2 py-5 ">
      <div className="container items-center flex justify-between mx-auto">
        <Logo />

        <p className="text-gray-600">
          © 2025 Bankrupt Bank. All rights reserved.
        </p>
        <div className="links">
          <a href="#" className="link pr-3 text-gray-400">
            Terms
          </a>
          <a href="#" className="link pr-3   text-gray-400">
            Privacy
          </a>
          <a href="#" className="link  text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};  

export default Footer;
