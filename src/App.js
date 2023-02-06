// import logo from './logo.svg';
import './App.css';
import {React} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Home} from './pages/home';
import {MyNavbar} from './Components/Navbar' 
import { EditorWindow } from './pages/EditorWindow';
function App() {

  return (
    <div className='App'>
        <BrowserRouter>
          <MyNavbar className="navClass"/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newEditorWindow" element={<EditorWindow/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
