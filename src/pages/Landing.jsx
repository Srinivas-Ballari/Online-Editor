import React from 'react';
import './Landing.css';
import { provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navbar, Button, Container } from 'react-bootstrap';
import logoImage from '../images/njac-logo.jpeg';


export function LandingPage() {


    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const googleSignIn = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
        
    }

    const gotoLocation = (element)=>{
        element === "about" ? window.scrollTo(0,1100) : window.scrollTo(0,3000);
    }

    return (

        <div className="App">

            <Navbar bg="dark" variant="dark" className="navtop">

                <Container>
                    <Navbar.Brand href="/">
                        <img src={logoImage} alt="Loading..." style={{ "width": "60px", "height": "60px", borderRadius: "10%", marginRight: "20px", marginLeft: "20px" }} />
                        NJAC-Editor
                    </Navbar.Brand>
                </Container>

                <Button variant="info" style={{ "marginRight": "15px" , "marginTop": "7px"}} >Home</Button>
                <Button variant="info" style={{ "marginRight": "15px" ,"marginTop": "7px" }} onClick={()=>{gotoLocation("about")}} >About</Button>
                <Button variant="info" style={{ "marginRight": "30px" ,"marginTop": "7px" }} onClick={()=>{gotoLocation("contact")}}>Contact</Button>
            </Navbar>

            <section className="hero" >
                <h1 className="hero-title">Welcome to NJAC Editor</h1>
                <p className="hero-description">NJAC Editor is "NOT JUST A CODE EDITOR", it is a tool that allows you to compile source code and run it in several different programming languages online as well as to store the code snippets of users.</p>
                <button className="hero-button" onClick={googleSignIn}>Get Started</button>
                <img className="hero-image" src={"https://uploads-ssl.webflow.com/612e545fdda38481883243da/624610c87ca2ba4b588f47b7_lawyer%20coder.png"} alt="Loading..."/>
            </section>

            <section className="about" id='about'>
                <h4 className='hero-title'>About NJAC Editor</h4>
                <p style={{ textAlign: "center" }}>For text online compilers and code editors, the main objective is to implement code without installing a compiler on the system, directly allowing the code to be compiled and run. An online compiler has the same basic functionality as a conventional compiler, but with one significant difference: all of a project or application's source code is stored and executed online via a web browser.</p>
            </section>

            <section >
                <div className="row">
                    <div className="icons col-lg-4">
                        <i className="fa-solid fa-code fa-3x iconText"></i>
                        <h4 className='hero-title'>Code Effectively</h4>
                        <p  className="hero-description">supports 4 different languages</p>
                    </div>
                    <div className="icons col-lg-4">
                        <i className="fa-solid fa-file-code fa-3x iconText"></i>
                        <h4 className='hero-title'>Save Code Snippet's</h4>
                        <p  className="hero-description">capture your learning's in one click</p>
                    </div>

                </div>

                <div className='row'>

                    <div className="icons col-lg-4">
                        <i className="fa-solid fab fa-leanpub fa-3x iconText"></i>
                        <h4 className='hero-title'>Review</h4>
                        <p  className="hero-description">learn from the saved code file's.</p>
                    </div>
                </div>
            </section>


            <section className="contact" id='contact'>
                <h4 className='hero-title'>Contact Us</h4>
                <p  className="hero-description">For any queries, please reach out to us at <a href="mailto:support@njaceditor.com">support@njaceditor.com</a>.</p>
            </section>

            <footer className="footer">
                <p>© NJAC Editor. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
