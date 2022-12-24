import { useState } from "react";


function App() {
	const [charCount, setCharCount] = useState("")
	const [wordsCount, setWordsCount] = useState("")
	
	const handleChange = (event) => {
		setCharCount(event.target.value.length);
		const words = event.target.value.split(/\b/);
  		const wordsCount = words.filter(word => word.trim() !== "").length;
  		setWordsCount(wordsCount);
	};
	  
	  

	return (
		<div className="App">
			<div className="MainPanel">
				<textarea class="InputText" type="Text" placeholder="Start typing here..." onChange={handleChange}/>
			</div>
			<div className="CounterPanel">
				<div className="CounterLeftChild">
					<div className="CounterText"> {wordsCount || "0"} </div>
					<div className="CategoryText"> Words </div>
				</div>
				<div className="CounterRightChild">
					<div className="CounterText"> {charCount || "0"} </div>
					<div className="CategoryText"> Characters </div>
				</div>
			</div>
		</div>
	);
}

export default App;
