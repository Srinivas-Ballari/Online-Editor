import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import Select from 'react-select';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { db } from '../config/firebase';

export const EditorNavbar = ({ userLang, setUserLang, userTheme, setUserTheme, userCode }) => {
	const [user] = useAuthState(auth);
	const [displayNavBar, setDisplayNavBar] = useState(true);
	const [Title, setTitle] = useState("");
	const collectionRef = collection(db,user.uid);


	const saveSnippet = async() => {
		// enter data into db:
		try{
			if(userCode!=``){
				const temp = await addDoc(collectionRef,{
					title : Title,
					code : userCode,
					lang : userLang
				});
			}
			setDisplayNavBar(true);
		}catch(err){
			console.log(err);
		}
		setDisplayNavBar(true);	
	}
	const languages = [
		// for future if mulitptle langs req, uncomment :) 
		// {value : "C#" 			, label:"C#"	}, 
		// {value : "F#"      		, label:"F#" 	},
		// {value : "Java" 		, label:"Java"	},
		// {value : "Python"		, label:"Python"	},
		// {value : "C" 			, label:"C"	},
		// {value : "C++" 			, label:"C++"	},
		// {value : "Php" 			, label:"Php"	},
		// {value : "Haskell"		, label:"Haskell "	},
		// {value : "Ruby"			, label:"Ruby "	},
		// {value : "Perl" 		, label:"Perl "	},
		// {value : "Lua" 			, label:"Lua "	},
		// {value : "Nasm"			, label:"Nasm "	},
		// {value : "Javascript"	, label:"Javascript "	},
		// {value : "Go"			, label:"Go "	},
		// {value : "Scala"		, label:"Scala "	},
		// {value : "D"			, label:"D "	},
		// {value : "Swift"		, label:"Swift "	},
		// {value : "Bash"			, label:"Bash "	},
		// {value : "Erlang"		, label:"Erlang "	},
		// {value : "Elixir "		, label:"Elixir "	},
		// {value : "Ocaml"		, label:"Ocaml "	},
		// {value : "Kotlin"		, label:"Kotlin "	},
		// {value : "Rust"			, label:"Rust"	},
		// {value : "Clojure"		, label:"Clojure "	},
		// {value : "ATS"			, label:"ATS "	},	
		// {value : "Cobol"		, label:"Cobol "	},
		// {value : "Coffeescript"	, label:"Coffeescript "	},
		// {value : "Crystal"		, label:"Crystal "	},
		// {value : "Elm"			, label:"Elm "	},
		// {value : "Groovy"		, label:"Groovy "	},
		// {value : "Idris"		, label:"Idris "	},
		// {value : "Julia"		, label:"Julia "	},
		// {value : "Mercury"		, label:"Mercury "	},
		// {value : "Nim"			, label:"Nim "	},
		// {value : "Nix"			, label:"Nix "	},
		// {value : "Raku"			, label:"Raku "	},
		// {value : "TypeScript"	, label:"TypeScript "},

		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]

	return (
		<>
			{
				displayNavBar &&
				<>
					<div className='editorTitle' style={{ "textAlign": "center", "marginTop": "14px", "marginBottom": "14px" }}>
						<h1>Happy Coding!</h1>
					</div>

					<div className='navbar' style={{ "marginBottom": "20px" }}>
						<div style={{ "marginLeft": "40px", "border": "solid #333366", "borderWidth": "thin" }}>
							<Select options={languages} value={userLang}
								onChange={(e) => setUserLang(e.value)}
								placeholder={userLang} />

						</div>


						<div style={{ "marginRight": "40px", "border": "solid #333366", "borderWidth": "thin" }}>
							<Select options={themes} value={userTheme}
								onChange={(e) => setUserTheme(e.value)}
								placeholder={userTheme} />
						</div>


						<div style={{ "marginRight": "40px", "border": "solid #333366", "borderWidth": "thin" }}>
							<button onClick={() => { setDisplayNavBar(false) }}><h5>Save <i class="fa-solid fa-floppy-disk"></i></h5></button>
						</div>

					</div>
				</>

			}

			{
				!displayNavBar &&

				<>

					<div className='navbar' style={{"border":"solid #333366","marginTop":"10px","marginBottom":"10px"}}>

						<div style={{"marginLeft":"19px"}}>
							<h3>Save the code snippet with a title.</h3>
						</div>
						
						<div style={{ "marginLeft": "40", "border": "solid #333366", "marginTop":"30px","marginBottom":"30px" ,"borderWidth": "thin" }}>

							<input type="text" placeholder='Enter title...' onChange={(e) => {
							setTitle(e.target.value) }} size="40"/>

						</div>
						<div style={{ "marginRight": "100px", "border": "solid #333366", "borderWidth": "thin" }}>
							<button onClick={saveSnippet}>Save-Code</button>
						</div>
					</div>

				</>

			}
		</>

	)
}

