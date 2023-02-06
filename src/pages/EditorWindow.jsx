
import { useState } from 'react';
import Editor from "@monaco-editor/react";
import { EditorNavbar } from '../Components/EditorNavbar';
import Axios from 'axios';
import { ClockLoader } from 'react-spinners';

export const EditorWindow = () => {
  // State variable to set users source code
  const [userCode, setUserCode] = useState(``);

  // State variable to set editors default language
  const [userLang, setUserLang] = useState("python");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);


  const userInputUpdate = (event) => {
    setUserInput(event.target.value);
  }

  const compile = () => {
    setLoading(true);
    if (userCode === ``) return;
    Axios.post(`http://localhost:3000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput
    }).then((res) => {
      setUserOutput(res.data.output);
    }).then(() => {
      setLoading(false);
    })
  }

  const clearOutput = () => {
    setUserOutput("");
  }


  return (
    <>

      <EditorNavbar userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme} />

      <div className='centreEditor'>

        <Editor
          height="calc(100vh - 90px)"
          width="70%"
          theme={userTheme}
          language={userLang}
          defaultLanguage="python"
          defaultValue="# Enter your code here"
          onChange={(value) => { setUserCode(value) }}
        />
      </div>

      <br /><br />

      <div className='io'>
        
        <div className='ipBox'>
          <h3>Standarad Input:</h3>
          <textarea className='codeInput' onChange=
              {(e) => setUserInput(e.target.value)} rows={10} cols={60}>
          </textarea>
        </div>

        {loading ? (
            <div className="spinner-box">
              <ClockLoader/>
            </div>
          ) : (
            <div className="opBox">
              <h3>Standard Output:</h3>
              <textarea rows={10} cols={60}>
                  <pre>{userOutput}</pre>
              </textarea>
            </div>
          )
        }
        
      </div>

      <br /><br />

      <div className='runButton'>
        <button onClick={() => compile()} >
          <h4>Run <i class="fa-solid fa-1x fa-robot"></i></h4>
        </button>
      </div>

      <br /><br />


    </>
  )
}