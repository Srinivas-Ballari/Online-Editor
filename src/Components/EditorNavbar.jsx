import React from 'react';
import Select from 'react-select';

export const EditorNavbar = ({ userLang, setUserLang, userTheme,
	setUserTheme }) => {
	const languages = [
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
			<div className='editorTitle' style={{ "textAlign": "center", "marginTop": "14px", "marginBottom": "14px" }}>
				<h1>Happy Coding!</h1>
			</div>

			<div className='navbar' style={{"marginBottom":"20px"}}>
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
					<button><h5>Save <i class="fa-solid fa-floppy-disk"></i></h5></button>
				</div>

			</div>
		</>
	)
}

