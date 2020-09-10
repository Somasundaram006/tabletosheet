import React, { Component } from "react";
import "../assets/css/footer.css";
// import { base_image_url } from "../common/constants";

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footerWrapper">
                    <div className="footerDivider">
                        <div className="headStyle">
                            <h4 className="footerHeading">Quick links</h4>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    About Us
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Leadership
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Careers
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Blog
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    White Papers
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Privacy Policy
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Terms and conditions
              </a>
                            </div>
                        </div>
                        <div className="compCopyright">
                            {new Date().getFullYear()}, CapeStart Inc. All rights reserved.
                        </div>
                    </div>
                    <div className="footerDivider">
                        <div className="headStyle">
                            <h4 className="footerHeading">Products</h4>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Machine Learning Platforms
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Machine Learning Datasets
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Prebuilt Machine Learning Models
              </a>
                            </div>
                        </div>
                        <div className="headStyle">
                            <h4 className="footerHeading2">Industries</h4>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Healthcare
              </a>
                            </div>
                            <div className="footerPages">
                                {" "}
                                <a to="/" className="footerLinks">
                                    Other Industries
              </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="headStyle">
                            <h4 className="footerHeading">Services</h4>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Software Development
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Data Preparation
              </a>
                            </div>
                        </div>
                        <div className="headStyle">
                            <h4 className="footerHeading2">Technologies</h4>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Computer Vision
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Chatbots
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Robotic Process Automation
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Natural Language Processing
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Speech Recognition
              </a>
                            </div>
                            <div className="footerPages">
                                <a to="" className="footerLinks">
                                    Machine Learning
              </a>
                            </div>
                        </div>
                    </div>
                    <div className="footerDivider">
                        <div className="headStyle">
                            <h4 className="footerHeading">Connect With Us</h4>
                        </div>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://image.pngaaa.com/317/67317-small.png"
                                alt="facebook"
                                className="socialIcon"
                            />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.kindpng.com/picc/m/220-2201160_line-clipart-computer-icons-social-media-facebook-small.png"
                                alt=" twitter"
                                className="socialIcon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-512/linkedin-160-461814.png"
                                alt=" linkedin"
                                className="socialIcon"
                            />
                        </a>
                    </div>
                </div>
            </>
        );
    }
}
export default Footer;
