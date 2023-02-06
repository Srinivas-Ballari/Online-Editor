import {provider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { auth } from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navbar, Button, Container} from 'react-bootstrap';
import { signOut } from 'firebase/auth';

export const MyNavbar = () =>{
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const googleSignIn = async ()=>{
        const result = await signInWithPopup(auth,provider);
        navigate("/");
    }
    const userSignOut = async() =>{
        await signOut(auth);
        navigate("/");
    }

    return (
        <div className = "loginPage">
            {
                !user &&
                <>
                     <Navbar bg="dark" variant="dark" className="navtop">
                        <Container>
                            <Navbar.Brand href="/">
                                NjAc Editor
                            </Navbar.Brand>

                            <Button variant="outline-success" onClick={googleSignIn}>Sign-In</Button>
                        </Container>
                    </Navbar>
                </>

            }

            {
                user &&
                <>
                    <Navbar bg="dark" variant="dark"  className="sticky-top">
                        <Container>
                            <Navbar.Brand href="/">
                                <Navbar.Collapse >
                                    <img className="userImg" src={user?.photoURL} alt="" />
                                </Navbar.Collapse>
                                NjAc Editor
                            </Navbar.Brand>

                            <div className='userDetails'>

                                <Navbar.Collapse>
                                    <Navbar.Text>
                                        <h2>{user?.displayName}</h2>
                                    </Navbar.Text>
                                </Navbar.Collapse>

                            </div>
                            
                            <Button onClick={userSignOut} variant="outline-success">Sign-Out</Button>
                        </Container>
                    </Navbar>
                </>
            }
        </div>
    )
}