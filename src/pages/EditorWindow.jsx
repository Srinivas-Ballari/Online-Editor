
import { useState } from 'react';
import Editor from "@monaco-editor/react";
import { EditorNavbar } from '../Components/EditorNavbar';
import Axios from 'axios';
import { ClockLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom"


export const EditorWindow = (props) => {

    const {state} = useLocation();
    const {id,title,code,lang} = state ? state : "";

  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("java");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  

  const userInputUpdate = (event) => {
    setUserInput(event.target.value);
  }

  const compile = () => {
      setLoading(true);
      if (userCode === ``) {
        setLoading = false;
        return;
      }

      //  for future Use of multiple language's 
      // const langNumberMap = {
      //   "C#" :"1",
      //   "F#" :"3",
      //   "Java" :"4",
      //   "Python" :"5",
      //   "C" :"6",
      //   "C++" :"7",
      //   "Php" :"8",
      //   "Haskell" :"11",
      //   "Ruby" :"12",
      //   "Perl" :"13",
      //   "Lua" :"14",
      //   "Nasm" :"15",
      //   "Javascript" :"17",
      //   "Go" : "20",
      //   "Scala" :"21",
      //   "D" :"30",
      //   "Swift" :"37",
      //   "Bash" :"38",
      //   "Erlang" :"40",
      //   "Elixir" :"41",
      //   "Ocaml" :"42",
      //   "Kotlin" :"43",
      //   "Rust" :"46",
      //   "Clojure" :"47",
      //   "ATS" :"48",
      //   "Cobol" :"49",
      //   "Coffeescript" :"50",
      //   "Crystal" :"51",
      //   "Elm" :"52",
      //   "Groovy" :"53",
      //   "Idris" :"54",
      //   "Julia" :"55",
      //   "Mercury" :"56",
      //   "Nim" :"57",
      //   "Nix" :"58",
      //   "Raku" :"59",
      //   "TypeScript" :"60",
      // };

      const langNumberMap = {
        "cpp" : "7",
        "python" : "5",
        "c" : "6",
        "java" : "4"
      }

      const encodedParams = new URLSearchParams();
      encodedParams.append("LanguageChoice", langNumberMap[userLang]);
      encodedParams.append("Program", userCode);
      encodedParams.append("Input", userInput);


      let options = {
          method: 'POST',
          url: 'https://code-compiler.p.rapidapi.com/v2',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
            'x-rapidapi-key': '733c4f66dfmsh8e9896736d54bd4p1b27d7jsn20b6d34a73fa'
          },
          data: encodedParams
      };


      Axios.request(options)
      .then( function(response) {
        let opData = response.data;
        console.log(opData)
        opData.Errors==null ? setUserOutput(opData.Result) : setUserOutput(opData.Errors);
        setLoading(false);

      }).catch( (error)=> {
        console.error(error);
        setUserOutput("Some Error Occured!!");
      });

  }

  const defaultCodeMap = {
     "python" : code ? code : "\n#Enter your code here.\n",
     "java" : code ? code : "\nimport java.util.*; \nimport java.io.*; \n /* Do not modify the below class name.(It has to be Progman to run code successfully)*/ \nclass Progman{\n    public static void main(String[] args){ \n        // your code goes here... \n    }\n}\n",
     "cpp" : code ? code : "\n#include<bits/stdc++.h>\nusing namespace std;\n\nint main(){\n    // your code goes here...\n   \n   return 0;\n}\n",
     "c" : code ? code : "\n#include<stdio.h>\nint main(){\n    // your code goes here...\n    return 0;\n}\n"
  };


  return (
    props.user &&
    <>

      <EditorNavbar userLang={lang ? lang : userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme} userCode ={userCode} />

      <div className='centreEditor'>

          <Editor
            height="calc(100vh - 90px)"
            width="70%"
            theme={userTheme}
            language={userLang}
            defaultLanguage={userLang}
            value={defaultCodeMap[userLang]}
            onChange={(value) => { setUserCode(value) }}
          />
          
      </div>

      <br /><br />

      <div className='io'>

        <div className='ipBox'>
          <h3>Standarad Input:</h3>
          <textarea className='codeInput' onChange=
              {(e) => setUserInput(e.target.value)} rows={10} cols={60}
              placeholder="           
              
                              
               Enter your input here
              
              ">
          </textarea>
        </div>

        {loading ? (
            <div className="spinner-box">
              <ClockLoader/>
            </div>
          ) : (
            <div className="opBox">
              <h3>Standard Output:</h3>
             <textarea rows={10} cols={60} placeholder="
             

                Your output here
             ">
                {userOutput}
              </textarea>

            </div>
          )
        }
        
      </div>

      <br /><br />

      <div className='runButton'>
        <Button onClick={() => compile()} variant='dark' >
          <h3>Run <i class="fa-sharp fa-solid fa-person-running"></i></h3>
        </Button>
      </div>

      <br /><br />

    </>
  )
}