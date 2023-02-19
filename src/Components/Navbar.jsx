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
    const userSignOut = async() =>{
        await signOut(auth);
        navigate("/");
    }

    
    return (
        <div className = "loginPage">
            {
                !user &&
                <>
                     
                </>

            }

            {
                user &&
                <>
                    <Navbar bg="dark" variant="dark"  className="sticky-top">
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={user?.photoURL} alt="Loading..." style={{"width":"60px","height":"60px",borderRadius:"30%",marginRight:"10px"}}/>
                                NJAC-Editor
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