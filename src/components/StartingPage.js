import React, { useState } from "react";
import "./home2.css"
import { useHistory } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import 'font-awesome/css/font-awesome.min.css'

import Check from "@material-ui/icons/CheckCircle"
import Code from "@material-ui/icons/CodeRounded"
import Group from "@material-ui/icons/GroupRounded"
// import ScrollAnimation from 'react-animate-on-scroll';
// import cyduck from "./circle-cropped2.png"

import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import TwitterIcon from '@material-ui/icons/Twitter';
// import TypeWriter from 'react-typewriter';
// import biz from "./images/bizinsider.png"
// import dog from "./images/dog-img.jpg"
// import lady from "./images/lady-img.jpg"
// import mashable from "./images/mashable.png"
// import tech from "./images/TechCrunch.png"
// import tnw from "./images/tnw.png"


// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core"

import "animate.css"

// import { Animated } from "react-animated-css";



function StartingPage() {


    var tkn = localStorage.getItem('usertoken');
    console.log(tkn)
    let history = useHistory();


    function gotofile(event) {
        event.preventDefault()

        history.push("/file")
    }

    function gotosign(event) {
        event.preventDefault()
        history.push("/signin")
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div className="homediv">

            <section class="colored-section" id="title">

                <div class="container-fluid">

                    <div className="writer" >
                        <h2 style={{ fontSize: "90px" }}>CyDuck</h2>
                    </div>





                    <div class="row">

                        <div class="col-lg-6">
                            <h1 class="big-heading">Creating an inclusive community for education to prosper.</h1>
                            <a type="button" class="btn btn-outline-light btn-lg download-button" href={tkn === null ? `/signin` : `/file`} >
                                Ask Question </a>
                            <a type="button" class="btn btn-outline-light btn-lg download-button" href={tkn === null ? `/signin` : `community`} >
                                Answer Question </a>
                        </div>

                        <div class="col-lg-6">

                        </div>

                    </div>

                </div>

            </section>




            <section class="white-section" id="features">

                <div class="container-fluid" style={{ textAlign: "center" }}>

                    <div class="row">
                        <div class="feature-box col-lg-4" >
                            <Code style={{ width: "50px", height: "50px" }} />

                            <h3 class="feature-title" >Easy to use.</h3>
                            <p >Easy to use UI with useful features to ask questions seamlessly .</p>
                        </div>

                        <div class="feature-box col-lg-4"  >
                            <Group style={{ width: "50px", height: "50px" }} />
                            <h3 class="feature-title">Classrooms</h3>
                            <p>Learn and collaborate in groups.</p>
                        </div>

                        <div class="feature-box col-lg-4"  >
                            <Check style={{ width: "50px", height: "50px" }} />
                            <h3 class="feature-title">Guaranteed answers.</h3>
                            <p>Find the solution of your doubts in limited time frame.</p>
                        </div>
                    </div>


                </div>
            </section>



            <div><p className="wded">What we do</p></div>
            <section class="colored-section" id="testimonials" style={{ height: "500px", }}>


                <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item style={{ backgroundColor: "#142F43" }} >
                        <h1>Help you in getting answers.</h1>
                        <p className="carousel_content">Get answers to your questions faster. </p>
                        <p className="carousel_content">Connect with the best teachers from across the country. </p>
                        <p className="carousel_content">Connect with other students to discuss ideas and questions. </p>
                        <p className="carousel_content">Answer others' questions and help others in learning. </p>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: "#142F43" }}>

                        <h1>Cyduck helps you in Solving your query</h1>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ backgroundColor: "#142F43" }}>

                        <h1>Cyduck helps you in Solving your query</h1>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p className="carousel_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </section>




            {/* <section class="colored-section" id="press">
                <img class="press-logo" src={tech} alt="tc-logo" />
                <img class="press-logo" src={tnw} alt="tnw-logo" />
                <img class="press-logo" src={biz} alt="biz-insider-logo" />
                <img class="press-logo" src={mashable} alt="mashable-logo" />

            </section> */}

            <footer class="colored-section" id="footer">
                <div class="container-fluid">
                    <div className="footer-right">
                        <ul className="list-inline">
                            <h3><li className="list-inline-item"><a href="#" style={{ color: 'white', cursor: "pointer", marginLeft: "27px" }}>Get in Touch</a></li></h3>
                        </ul>
                        <div className="social">
                            <a href="https://t.me/joinchat/xrbUyk1degk5OTll" target="_blank"><i style={{ color: "white" }} className="icon ion-social-instagram" ><TelegramIcon /></i></a>
                            <a href="https://www.linkedin.com/company/cyduck/" target="_blank"><i style={{ color: "white" }} className="icon ion-social-youtube-outline" ><LinkedInIcon /></i></a>
                            <a ><i className="icon ion-social-twitter" ></i><TwitterIcon /></a>
                            <a href="#" href="https://discord.gg/XJNPaF4b" target="_blank">D</a>
                        </div>
                    </div>
                    <p className="copyright" style={{ color: 'white' }}>© Copyright 2021 Cyduck</p>
                </div>
            </footer >

        </div >
    )
}



export default StartingPage
