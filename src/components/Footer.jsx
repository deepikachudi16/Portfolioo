import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-1 text-center ">
      <Container style={{ color: 'black'}}>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/deepikachudi16"
          aria-label="My GitHub"
        >
        
          Deepika Reddy Chudi
        </a>{" "}
        
        
      </Container>
    </footer>
  );
};

export default Footer;
