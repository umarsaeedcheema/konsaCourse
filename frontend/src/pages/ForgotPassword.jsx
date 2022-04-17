import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// import { Link } from "react-router-dom";


const ForgotPassword = () => {
	const [data, setData] = useState({ email: "", question: "", answer: "", password: "" });
	const [error, setError] = useState("");
	// const [showPassword , setvisibility] = useState(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};
	// const handleClickShowPassword = ()=>{
	// 	setvisibility(!showPassword)
	// }

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(e.target.value)
		// try {
		// 	const url = "http://localhost:8080/api/auth";
		// 	const { data: res } = await axios.post(url, data);
		// 	localStorage.setItem("token", res.data);
		// 	window.location = "/";
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 	}
		// }
	};

	const navigate = useNavigate()


	return (
		<div className={styles.login_form_container}>
			<div className={styles.left}>
				<h1>New Here?</h1>
				<h2 style={{
					width:'100%'
				}}>
					<Button type="button"
						variant="contained"
						style={{
							borderRadius:'15px',
							backgroundColor:'white',
							width:'35%',
							marginLeft:"31%"
						}}
						onClick={() => {
							navigate('/pages/login')
						}}
					>
						Sign Up
					</Button>
				</h2>
			</div>
			<div className={styles.right}>

				<div className="d-flex justify-content-end pr-20 mt-4 "
					style={{
						cursor: 'pointer',

					}}
				>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#319fa0' }} >KONSA</div>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#000000' }}
					>COURSE</div>

				</div>
				<div className="d-flex align-items-center justify-content-center flex-column"
					style={{
						backgroundColor: 'rgba(58, 175, 160, 0.05)',
						borderRadius: '25px',
						width: '450px',
						height: '400px',
						margin: 'auto'
					}}
				>

					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 className="mb-10" style={{ color: "black" }}>Forgot Password</h1>
						<input
							type="email"
							placeholder="Please type your email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Select your Security question"
							name="question"
							onChange={handleChange}
							value={data.question}
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
							type={"password"}
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
							style={{
								marginBottom: '5%'
							}}
						// endAdornment={
						// 	<InputAdornment position="end" style={{color:"black",height:"10%"}}>
						// 	  <IconButton
						// 		onClick={handleClickShowPassword}
						// 	  >
						// 		{showPassword ? <Visibility /> : <VisibilityOff />}
						// 	  </IconButton>
						// 	</InputAdornment>
						//   }
						/>
						{/* <IconButton
									onClick={handleClickShowPassword}
								  >
									{showPassword ? <Visibility /> : <VisibilityOff />}
								  </IconButton> */}
						{/* <button></button> */}
						{error && <div className={styles.error_msg}

						>{error}</div>}
						<Button type="submit"
							variant="contained"
							style={{
								borderRadius: '15px',
								color: 'white'
							}}

						>
							Update Password
						</Button>

					</form>
				</div>
				{/* </div> */}
			</div>
		</div>
		//   </div>
	)
}

export default ForgotPassword;