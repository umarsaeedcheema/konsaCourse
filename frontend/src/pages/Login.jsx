import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


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
		console.log("HELLO");
		
	};


	let navigate = useNavigate()
	return (
		
		< div className={styles.login_form_container} >
			<div className={styles.left}>
				<h1 >New Here ?</h1>
				<h2 >
					<button type="button" className={styles.white_btn}
						onClick={() => {
							navigate('/pages/signup')
						}}>
						Sign Up
					</button>
				</h2>
			</div>
			{/* <div className={styles.rightSupreme}>  add another encapsulation*/}
			<div className={styles.right} >
				<div className="d-flex align-items-end flex-column" style={{ flex: 1 }}>
					<text style={{ color: "black", fontSize: "20px", paddingTop: "20px", paddingRight: "20px",cursor: 'pointer' }}
					onClick={()=>{
						navigate('/pages/landing')
					}}>
						KonsaCourse

					</text>

				</div>

				<div className="d-flex align-items-center justify-content-center felx-column" style={{ flex: 9 }}>

					<form className={styles.form_container} onSubmit={handleSubmit}>

						<h1 style={{ color: "black", fontSize: "120%" }}>Sign in to Your Account</h1>
						
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

						<span className="d-flex justify-content-end"
							style={{ width: "100%", marginRight: "2%", fontSize: "15px", cursor: 'pointer' }}
							onClick={() => {
								navigate('/pages/forgotpassword')
							}}>
							Forgot password?
						</span>


						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>

					</form>
				</div>
			</div>

		</div >
	)
}

export default Login;