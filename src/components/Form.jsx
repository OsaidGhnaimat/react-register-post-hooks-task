import React from "react";
import './stylePost.css';
import { Link } from "react-router-dom";



const Form = ({input, setInput, post, setPost}) => {
	const inputTextHandler = (e) => {
		setInput(e.target.value)
	}
	const submitHandler = (e) => {
		e.preventDefault();
		setPost([
			...post, {text:input}
		])
		setInput("")
	}



	return(
		<div>
			<form action="" className="post-form">
				<input  onChange={inputTextHandler} type="text" className="todo-input" value={input} />
				<button onClick={submitHandler} className="todo-button" type="submit">
					post
				</button>
			</form>
			<div className="cont">
			<ul className="cont-post" >
				
				{post.map(p => (
					<div className="post">{p.text}</div>
					
				))}
			</ul>
			</div>
		</div>
	);
}
export default Form;