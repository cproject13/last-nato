import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitFaceBook = () => {
    window.location = "https://www.facebook.com/ernest.zape";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dpb0wztgv/image/upload/v1652637264/avatars/xrj2g9ty0gcp5oewr5fy.jpg"
              alt="Manager"
            />
            <Typography>Ernes Zape</Typography>
            <Button onClick={visitFaceBook} color="primary">
              Visit Facebook
            </Button>
            <span>
              Artoftri is a clothing branding that caters to the streetwear community in the Philippines. We aim to express our deepest desire to put art into shirt designs. Utilizing aesthetic apperance and incorporate sysmbols with various representations.
              We aim to express our deepest desire to put art into shirt designs. Utilizing aesthetic apperance and incorporate sysmbols with various representations.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Artoftri Clothing Co.</Typography>
            <a
              href="https://www.instagram.com/artoftriclothing/"
              target="blank">
              <InstagramIcon className="youtubeSvgIcon" />
            </a>
            <a href="https://www.facebook.com/Artoftri.clothing/" target="blank">
              <FacebookIcon className="FacebookSvgIcon" />
            </a>
<h2>Contact us at:</h2>
<p className="emailToContact">Cproject.website@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
