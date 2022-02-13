import React from "react";
import './style.css';
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



const SignUp = ({error , setError, user, setUser , nav , setNav}) => {

	const inputChangeHandler = (e) =>{
		setError({
			name: "",
			email: "",
			password: "",
			re_password:""
		})
		let name = e.target.name;
		setUser({
			...user, [name]:e.target.value
		})
	}

	const submitHabler = (e) =>{
		e.preventDefault();
		let err = {};
		let validate = true;
	// check if input is empty 

		if(user.name === ""){
			validate = false;
			err['name'] = 'name is empty';
		}
		if(user.email === ""){
			
			validate = false;
			err['email'] = 'email is empty';
		}
		if(user.password === ""){
			validate = false;
			err['password'] = 'password is empty';
		}
		if(user.re_password === ""){
			validate = false;
			err['re_password'] = 're_password is empty';
		}else if(user.password  != user.re_password){
			validate = false;
			err['re_password'] = 'password is not match';
		}
		console.log(err);
		setError(err);
		console.log(error.name);

		if(validate){
			if (JSON.parse(localStorage.getItem("users")) === null) {
				localStorage.setItem("users", JSON.stringify([user]));
			  } else {
				let users = JSON.parse(localStorage.getItem("users"));
				let newUsers = [...users, user];
				localStorage.setItem("users", JSON.stringify(newUsers));
			  }
			  sessionStorage.setItem("currentUser", JSON.stringify(user));
			  setUser({
				name: "",
				email: "",
				password: "",
				re_password:""
			  });
			  setNav(true)
		}
		
	}



	return(
		<div className="container">
		{/* { nav ?<Navigate to="/shop" replace={true}/>:null} */}
    <div className="title">Registration</div>
    <div className="content">
      <form method="POST" onSubmit={submitHabler}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input onChange={inputChangeHandler} type="text" placeholder="Enter your username" name="name" id="name"  value={user.name}/>
			{error.name === '' ? '' : <small> {error.name} </small>}
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input onChange={inputChangeHandler} type="text" placeholder="Enter your email" name="email" id="email"  value={user.email}/>
			{error.email === '' ? '' : <small> {error.email} </small>}
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input onChange={inputChangeHandler} type="password" placeholder="Enter your password" name="password" id="password" value={user.password}/>
			{error.password === '' ? '' : <small> {error.password} </small>}
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input onChange={inputChangeHandler} type="password" placeholder="Confirm your password" name="re_password" id="re_password"  value={user.re_password}/>
			{error.re_password === '' ? '' : <small> {error.re_password} </small>}
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" name="submit"/>
        </div>
		<p class="loginhere">

                        Have already an account ? <a href="#" class="loginhere-link">
						<NavLink to="/login" className="signup-image-link" >

							Login here
						</NavLink>
		</a>
                    </p>

      </form>

    </div>
  </div>
	)
	
}

export default SignUp;