import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//const dotenv = require("dotenv");
//dotenv.config();
// const dotenv = require("dotenv");
// dotenv.config();
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import InputAdornment from "@material-ui/core/InputAdornment";

function checkLums(mail) {
	 
	if (mail.endsWith("lums.edu.pk")) {
		return true;
	} else {
		return false;
	}
}

const Signup = () => {
	const [data, setData] = useState({ fname: "", lname: "", question: "", answer: "", email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (checkLums(data.email)) {
			const signupobject = {
				firstName: data.fname,
				lastName: data.lname,
				email: data.email,
				password: data.password,
				Squestion: data.question,
				Sanswer: data.answer,
				reportCount: 0
			};
	
			const url = `/signup`;
			await axios.post(url, signupobject).then((res)=>{
				console.log("Hello");
				console.log(res);
	
				const userData = res.data;
				localStorage.setItem('user', JSON.stringify(userData));
				
				navigate('/pages/homepage');
	
			})		
			.catch(function (error) {
	
				if (error.response) {
					if (
						error.response &&
						error.response.status >= 400 &&
						error.response.status <= 500
					) {
						setError(error.response.data.message);
						console.log("Error 1");
						setError("There was an error");
					}
				} else if (error.request) {
					console.log("Error 2");
					console.log(error.request);
					setError("There was an error");
				} else {
					console.log("Error 3");
					console.log('Error', error.message);
					setError("There was an error");
				}
	
			});

		} else {
			setError("Please use a LUMS email address");
		}
		
	};
		


	let navigate = useNavigate()
	return (
		// <div className={styles.login_container}>
		//{/* // <div> */}
		<div className={styles.login_form_container}>

			{/* <div className={styles.rightSupreme}>  add another encapsulation*/}
			<div className={styles.right}>
				{/* <Link href='./pages/Homepage'> */}
				<div className="d-flex align-items-start ml-10 mt-2" 
				style={{
					cursor:'pointer'
				}}
				>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#319fa0' }} >KONSA</div>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#000000' }}
					>COURSE</div>
				</div>
				{/* </Link> className={styles.form_container}		 */}
				<div className="d-flex align-items-center justify-content-center flex-column" style={{ flex: 9 }}>
					{/* <div style={{alignContent:"center",height:"100%",width:"100%",justifyContent:"center",flexDirection:"column",borderTopLeftRadius:"10px",backgroundColor:"white"}}> */}
					<form className={styles.form_container} onSubmit={handleSubmit}
					style={{
						backgroundColor: 'rgba(58, 175, 160, 0.05)',
						width: '800px',
						borderRadius:' 25px',
						height: '350px'
					}}
					>
						<h1 className="pb-5" style={{ color: "black" }}>Create an Account</h1>
						<div className="d-flex justify-content-center" style={{ marginRight: "5%%" }}>
							<div className="d-flex flex-column" style={{ marginRight: "2.5%" }}>
								<input
									type="text"
									placeholder="First Name"
									name="fname"
									onChange={handleChange}
									value={data.fname}
									required
									className={styles.input}
								/>
								<input
									type="text"
									placeholder="Security Question"
									name="question"
									onChange={handleChange}
									value={data.question}
									required
									className={styles.input}
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									onChange={handleChange}
									value={data.email}
									required
									className={styles.input}
								/>
							</div>
							<div className="d-flex flex-column" style={{ marginLeft: "2.5%" }}>
								<input
									type="text"
									placeholder="Last Name"
									name="lname"
									onChange={handleChange}
									value={data.lname}
									required
									className={styles.input}
								/>
								<input
									type="text"
									placeholder="Answer"
									name="answer"
									onChange={handleChange}
									value={data.answer}
									required
									className={styles.input}
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={data.password}
									required
									className={styles.input}
								/>
							</div>
						</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" onSubmit={handleSubmit} className={styles.green_btn}>
							Sign Up
						</button>
						{/* Update Pass */}
					</form>
				</div>
				{/* </div> */}
			</div>
			<div className={styles.left}>
				<h1>Go To Home</h1>
				<h2 >

					<button type="button" className={styles.white_btn}
						onClick={() => {
							navigate('/pages/homepage')

						}}>
						Home
					</button>

				</h2>
			</div>
		</div>
		//   </div>
	)
}

// import React from 'react'

// function column() {
//     return (
//         <div>
//             <input
// 							type="password"
// 							placeholder="Current Password"
// 							name="old"
// 							onChange={handleChange}
// 							value={data.old}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="New Password"
// 							name="new"
// 							onChange={handleChange}
// 							value={data.new}
// 							required
// 							className={styles.input}
// 						/>
//                         <input
// 							type="password"
// 							placeholder="Confirm New Password"
// 							name="cnew"
// 							onChange={handleChange}
// 							value={data.cnew}
// 							required
// 							className={styles.input}
// 						/>
//         </div>
//     )
// }




export default Signup;