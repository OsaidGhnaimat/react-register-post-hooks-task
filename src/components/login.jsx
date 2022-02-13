import React from "react";
import { NavLink } from "react-router-dom";


const Login = ({error, setError, user ,setUser}) => {

	const inputChangeHandler = (e) =>{
		setError({
			email: "",
			password: "",
		})
		let name = e.target.name;
		setUser({
			...user, [name]:e.target.value
		})
	}

	const submitHabler = (e) => {
		e.preventDefault();
		let err = {};
		let validate = true;		
		// console.log(JSON.parse(localStorage.getItem('users')).filter((u) => u.email === user.email));
		if(user.email === ""){
			
			validate = false;
			err['email'] = 'email is empty';
		}
		if(user.password === ""){
			validate = false;
			err['password'] = 'password is empty';
		}

		if (JSON.parse(localStorage.getItem("users")) !== null){
			var users = JSON.parse(localStorage.getItem("users"));
			var u = users.filter((u) => {
				// console.log(u[0].password);
				if(u.email === user.email){
					return true 
				} else {
					err['email'] = 'Wrong Email';
					validate = false;
				}
				if(u[0].password === user.password){
					return true ;
				}else {
					err['password'] = 'Wrong password';
					validate = false;
				}
			})
			
		}else{
			err['nulluser'] = 'There are no registered users';
			validate = false;
		} 

		console.log(err);
		setError(err);
		console.log(error.name);

		if(validate){
			setError([]);
			sessionStorage.setItem("currentUser", JSON.stringify(user));
			setUser({
				name: "",
			    email: "",
				password: "",
				re_password:""
			});
		}
		// if(u[0].password!== user.password){
				
		// }
	}

	return(
		<div className="container">
		{/* { nav ?<Navigate to="/shop" replace={true}/>:null} */}
    <div className="title">Login</div>
    <div className="content">
      <form method="POST" onSubmit={submitHabler}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Email</span>
            <input onChange={inputChangeHandler} type="text" placeholder="Enter your email" name="email" id="email" />
			{error.email === '' ? '' : <small> {error.email} </small>}
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input onChange={inputChangeHandler} type="password" placeholder="Enter your password" name="password" id="password"/>
			{error.password === '' ? '' : <small> {error.password} </small>}
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" name="submit"/>
        </div>
		<p className="loginhere">
         Don't have any account ? <a href="#" className="loginhere-link">
		 <NavLink to="/" className="signup-image-link" >

			 SignUp here
			 </NavLink>
			 </a>
        </p>

      </form>

    </div>
  </div>
	)
}
export default Login;