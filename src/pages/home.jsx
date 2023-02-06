import { auth } from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';
import {Button,Modal } from 'react-bootstrap';
import { Card, Image, Text, Badge, Group } from '@mantine/core';

export const Home = () =>{
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <>
    
            {
                user &&
                <>
                    <div className='homeContent'>
                        <h1>Welcome!</h1>
                        <p>
                            The NJAC Editor is "NOT JUST A CODE EDITOR" it is a tool that allows you to compile source code and run it in several different programming languages online as well as to store the code snippets of user.
                        </p>
                        <p>
                            NJAC can be used for program execution. It converts the text-based source code into an executable repsentation known as object code.
                        </p>
                    </div>

                        <div className="row">
                            <div className="icons col-lg-4">
                                <i className="fa-solid fa-code fa-3x iconText"></i>
                                <h4>Code Effectively</h4>
                                <p>supports 4 different languages</p>
                            </div>
                            <div className="icons col-lg-4">
                                <i className="fa-solid fa-file-code fa-3x iconText"></i>
                                <h4>Save Code Snippet's</h4>
                                <p>capture your learning's in one click</p>
                            </div>
                            
                        </div>

                        <div className='row'>
                            <div className="icons col-lg-4">
                                <i className="fa-solid fab fa-leanpub fa-3x iconText"></i>
                                <h4>Review</h4>
                                <p>learn from the saved code file's.</p>
                            </div>
                        </div>

                        
                    <div className='homeContent'>
                        <p>
                            For text Online Compiler and code editor's main objective is to implement Code without installing compiler in the system, directly the code can be compiled and run. An online compiler has the same basic functionality as a conventional compiler, however with one significant difference: all of a project or application's source code is stored and executed online via a web browser. 
                        </p>
                    </div>
                        

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
                                <Button variant="primary" className='plus' onClick={()=>{navigate("/newEditorWindow")}}>+</ Button>
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
                                <Button variant="primary">GO</ Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>

                </div>


                </>
            }



        </>
    )
}