import React from "react";
import "./styles.css";

interface IProps {}

const Footer: React.FC<IProps> = (props) => {
  return (
    <section className="footer__wrapper">
      This is Footer (Part Three in ReactJS)
    </section>
  );
};

export default Footer;
