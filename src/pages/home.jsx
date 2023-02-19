import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { Card, Image, Text, Badge, Group } from '@mantine/core';
import {LandingPage} from './Landing';
import { OldLanding } from './old';

export const Home = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <>

            {

                !user &&
                <LandingPage/>
            }


            {
                user &&
                <>

                    <div className='newEditorSaved'>

                        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>New-Editor</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Open a new editor and start coding ...
                                    </p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="primary" className='plus' onClick={() => { navigate("/newEditorWindow") }}>+</ Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>



                        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>Saved-Snippet's</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>See all your saved code snippets here...
                                    </p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => { navigate("/savedSnippets") }}>GO</ Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>

                    </div>


                </>
            }



        </>
    )
}