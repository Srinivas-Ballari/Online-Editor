import { auth } from "../config/firebase"
import { useEffect, useState } from "react"
import { db } from '../config/firebase';
// imports for centered-modal
import Modal from 'react-bootstrap/Modal';
//imports for displaying cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { collection, getDocs } from "firebase/firestore";


export const Saved = (props) =>{
    const[list,setList]  = useState([{}])
    
    const getList = async ()=>{
        const userCollection = auth?.currentUser?.uid;
        const userCodeCollectionRef = collection(db,userCollection);
        try {
            const data = await getDocs(userCodeCollectionRef);
            const filtered = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setList(filtered);
        }
        catch (error) {
            console.log(error);
        }

    }
    
    useEffect(() => {
        getList();
    },[]);

    return (
        <>
            <h3 className = "hero-title" style={{ "textAlign": "center", "marginTop": "30px", "marginBottom": "35px" }}>Review Your Code's </h3>

            <div style={{ "display": "grid", "grid-template-columns": "repeat(4, 1fr)", "grid-auto-rows": "400px", "marginLeft": "60px" }}>

                {list.map((doc) => (
                    <div >


                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1251897026/vector/programming-and-coding-concept-top-angle-view-on-computer-laptop-screen-vector-illustration.jpg?s=170667a&w=0&k=20&c=Ax13rn1DeScyX0v-ZNrtpVwa794pnb6J9a8i84rxGIE=" />
                            <Card.Body>
                                <Card.Title> Title : {doc.title}</Card.Title>
                                <Card.Text>
                                    Language : {doc.lang}
                                </Card.Text>
                                <Button variant="primary" onClick={()=> {
                                    // console.log(doc.id);
                                    
                                }}> Open </Button>

                            </Card.Body>

                        </Card>



                    </div>
                ))}
            </div>
        </>
    )
}