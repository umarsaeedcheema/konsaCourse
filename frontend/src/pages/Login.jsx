import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Button } from "@mui/material";


//TODO
//1)	On pressing sign in, verify from db via api call and go to homepage. Update state (how ?)
//2)	If doesn't exist, show error message
//3)	Verify that its a lums email

//const signin = require ('../../../backend/')

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [showPassword, setvisibility] = useState(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		console.log(input.value)
	};
	const handleClickShowPassword = () => {
		setvisibility(!showPassword)
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const logindetails = {
			email: data.email,
			password: data.password
		};

		const url = `/login`;

		await axios.post(url, logindetails).then((res) => {
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
						setError(error.response.data.error);
						// setError(error.response.data.message);
						// console.log(error.response.data.error);
					}
				} else if (error.request) {
					// console.log("Error 2");
					// console.log(error.request);
					setError(error.request.data.error);
				} else {
					// console.log("Error 3");
					// console.log('Error', error.message);
					setError(error.request.data.error);
				}

			});

	};


	let navigate = useNavigate()
	return (

		< div className={styles.login_form_container} >
			<div className={styles.left}>
				<h1 >New Here?</h1>
				<h2 >
					<Button type="tutton ml-10"
						variant="contained"
						style={{
							borderRadius: '15px',
							backgroundColor: 'white'
						}}
						className={styles.white_btn}
						onClick={() => {
							navigate('/pages/signup')
						}}
					>
						Sign Up
					</Button>
				</h2>
			</div>
			<div className={styles.right} >
				<div className="d-flex justify-content-end pr-20 mt-4">
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#319fa0', cursor: 'pointer' }} >KONSA</div>
					<div className="d-flex fw-bold" onClick={() => { navigate('/pages/landing') }}
						style={{ color: '#000000', cursor: 'pointer' }}
					>COURSE</div>

				</div>

				<div className="d-flex align-items-center justify-content-center flex-column"
					style={{
						margin: 'auto',
						backgroundColor: 'rgba(58, 175, 160, 0.05)',
						borderRadius: '5%',
						width: '500px',
						height: '320px',

					}}
				>

					<form className={styles.form_container} onSubmit={handleSubmit}
						style={{

							height: '100 %',
							display: 'flex',
							flexDirection: 'column',
							alignItems: ' center',
							justifyContent: 'center'

						}}
					>

						<h1 className="mb-5" style={{ color: "black" }}>Sign in to Your Account</h1>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}

						/>

						{error && <div className={styles.error_msg}>{error}</div>}

						<span className="d-flex justify-content-end mb-2"
							style={{ width: "100%", marginRight: "8%", fontSize: "15px", cursor: 'pointer' }}
							onClick={() => {
								navigate('/pages/forgotpassword')
							}}>
							Forgot password?
						</span>

						<div
						style={{
							width:'100%',
							marginLeft:'70%'
						}}
						>
							<Button type="submit" variant="contained"
								style={{
									borderRadius: '15px',
									width:'35%'
								}}
							>
								Sign In
							</Button>
						</div>

					</form>
				</div>
			</div>

		</div >
	)
}

export default Login;