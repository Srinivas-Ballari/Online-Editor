// import logo from './logo.svg';
import './App.css';
import {React, useEffect,useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Home} from './pages/home';
import {MyNavbar} from './Components/Navbar' 
import { EditorWindow } from './pages/EditorWindow';
import { Saved } from './Components/Saved';
// authentication realted: 
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  const currUser = auth.currentUser;
  return (
    <div className='App'>
        <BrowserRouter>
          <MyNavbar className="navClass"/>
          <Routes>
            <Route path="/" element={<Home user = {user} />}/>
            <Route path="/newEditorWindow" element={<EditorWindow user={user}/>}/>
            <Route path="/savedSnippets" element={<Saved currUser = {currUser}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
